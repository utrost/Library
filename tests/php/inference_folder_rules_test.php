<?php
declare(strict_types=1);
namespace OCP { interface IRequest {} interface IUserSession {} interface IConfig {} interface IURLGenerator {} }
namespace OCP\AppFramework { class Controller { public function __construct(protected string $appName, protected \OCP\IRequest $request) {} } }
namespace OCP\AppFramework\Http { class RedirectResponse { public function __construct(public string $url) {} } class JSONResponse { public function __construct(public array $data = [], public int $status = 200, public array $headers = []) {} } }
namespace OCP\AppFramework\Http\Attribute { #[\Attribute] class NoAdminRequired {} #[\Attribute] class NoCSRFRequired {} }
namespace OCP\Files {
 interface IRootFolder {}
 class NotFoundException extends \RuntimeException {} class NotPermittedException extends \RuntimeException {}
 class Folder {
  public array $children = [];
  public function __construct(public int $id, public bool $readable = true) {}
  public function getId(): int { return $this->id; }
  public function isReadable(): bool { return $this->readable; }
  public function get(string $path): mixed { return $this->children[$path] ?? throw new NotFoundException(); }
 }
}
namespace OCA\Library\Service { class RootService { public array $deleted = []; public function deleteRoot(string $uid, int $id): void { $this->deleted[] = [$uid,$id]; } public function listRoots(string $uid): array { return $uid === 'alice' ? [['id' => 1, 'path' => '/Books']] : []; } } }
namespace {
 require __DIR__ . '/../../lib/Service/GuidedRuleValidator.php';
 require __DIR__ . '/../../lib/Service/InferenceFolderRuleStore.php';
 require __DIR__ . '/../../lib/Controller/InferenceFolderRuleController.php';
 require __DIR__ . '/../../lib/Controller/RootController.php';
 use OCA\Library\Service\InferenceFolderRuleStore as Store;
 function check(bool $condition, string $label): void { if (!$condition) throw new \RuntimeException($label); }
 $config = new class implements \OCP\IConfig {
  public array $data = [];
  public function getUserKeys($uid,$app): array { return array_keys($this->data[$uid] ?? []); }
  public function getUserValue($uid,$app,$key,$default): string { return $this->data[$uid][$key] ?? $default; }
  public function setUserValue($uid,$app,$key,$value): void { $this->data[$uid][$key] = $value; }
  public function deleteUserValue($uid,$app,$key): void { unset($this->data[$uid][$key]); }
 };
 $session = new class implements \OCP\IUserSession {
  public ?string $uid = 'alice';
  public function getUser(): ?object { return $this->uid === null ? null : new class($this->uid) { public function __construct(private string $uid) {} public function getUID(): string { return $this->uid; } }; }
 };
 $request = new class implements \OCP\IRequest { public array $params = []; public function getParam($key,$default=null): mixed { return $this->params[$key] ?? $default; } };
 $root = new \OCP\Files\Folder(10);$child=new \OCP\Files\Folder(11);$root->children['Fiction']=$child;
 $home = new \OCP\Files\Folder(2);$home->children['Books']=$root;
 $files = new class($home) implements \OCP\Files\IRootFolder { public function __construct(public $home) {} public function getUserFolder($uid): object { return $this->home; } };
 $store = new Store($config);
 $controller = new \OCA\Library\Controller\InferenceFolderRuleController('library',$request,$session,new \OCA\Library\Service\RootService(),$files,$store);
 $definitionId=str_repeat('a',32);
 $definition=['name'=>'Title','pattern'=>'%title%.%extension%'];
 $config->setUserValue('alice','library','inference_pattern_'.$definitionId,json_encode($definition));
 $valid=['rootId'=>1,'folder'=>'Fiction','recursive'=>true,'definitionId'=>$definitionId];
 $request->params=$valid;
 $saved=$controller->create();check($saved->status===201,'created');$id=$saved->data['id'];
 check($controller->create()->status===409,'duplicate');
 $index=$controller->index();check($index->status===200 && count($index->data['assignments'])===1,'listed');
 check($index->data['assignments'][0]['available'],'available');check(!isset($index->data['assignments'][0]['folderFileId']),'internal identity excluded');
 check($index->headers['Cache-Control']==='private, no-store','private caching');
 $config->deleteUserValue('alice','library','inference_pattern_'.$definitionId);
 check($controller->index()->data['assignments'][0]['definition']['pattern']===$definition['pattern'],'snapshot survives definition deletion');
 $root->children['Fiction']=new \OCP\Files\Folder(12);
 check(!$controller->index()->data['assignments'][0]['available'],'replaced folder unavailable');
 $root->children['Fiction']=$child;$child->readable=false;
 check(!$controller->index()->data['assignments'][0]['available'],'revoked read permission unavailable');
 check($controller->create()->status===404,'unreadable folder rejected');$child->readable=true;
 $root->id=99;check(!$controller->index()->data['assignments'][0]['available'],'root replacement unavailable');$root->id=10;
 foreach (['../Fiction','Fiction/..','Fiction//Books',"Fiction\0",'Fiction\\Books',str_repeat('x',2001),['Fiction']] as $bad) { $request->params=['folder'=>$bad]+$valid;check($controller->create()->status===422,'invalid folder'); }
 foreach (['1','false',0,[]] as $bad) { $request->params=['recursive'=>$bad]+$valid;check($controller->create()->status===422,'strict recursion flag'); }
 foreach ([2, '1oops',[],0,-1] as $bad) { $request->params=['rootId'=>$bad]+$valid;check($controller->create()->status===404,'invalid root'); }
 $request->params=['definitionId'=>str_repeat('b',32)]+$valid;check($controller->create()->status===404,'other definition inaccessible');
 $request->params=$valid;$session->uid='bob';
 check($controller->index()->status===404,'other user root not visible');
 check($controller->delete($id)->status===200,'foreign delete idempotent');
 check(count($store->all('alice'))===1,'foreign delete has no effect');
 $session->uid=null;check($controller->create()->status===401 && $controller->index()->status===401 && $controller->delete($id)->status===401,'anonymous denied');
 $session->uid='alice';check($controller->delete('invalid')->status===422,'invalid deletion id');
 $root->readable=false;check($controller->delete($id)->status===200 && count($store->all('alice'))===0,'can remove unavailable assignment');$root->readable=true;
 $config->setUserValue('alice','library','inference_pattern_'.$definitionId,json_encode($definition));
 for($i=0;$i<100;$i++) $store->save('alice',['version'=>1,'rootId'=>1,'rootFileId'=>10,'folderFileId'=>11,'folder'=>'Other'.$i,'recursive'=>true,'definition'=>['id'=>$definitionId]+$definition]);
 check($controller->create()->status===422,'100 assignment limit');
 $store->deleteRoot('bob',1);check(count($store->all('alice'))===100,'foreign root cleanup isolated');
 $store->deleteRoot('alice',2);check(count($store->all('alice'))===100,'other root cleanup isolated');
 $rootService=new \OCA\Library\Service\RootService();
 $urls=new class implements \OCP\IURLGenerator { public function getAbsoluteURL($path): string { return $path; } };
 $rootController=new \OCA\Library\Controller\RootController('library',$request,$rootService,$session,$urls,null,$store);
 $rootController->delete(1);check(count($store->all('alice'))===100,'unconfirmed root deletion retains assignments');
 $request->params=['confirmDeleteText'=>'DELETE'];$rootController->delete(1);
 check($rootService->deleted===[['alice',1]] && count($store->all('alice'))===0,'confirmed root deletion removes assignments');
 check($store->definition('alice',$definitionId)!==null,'root cleanup keeps saved definitions');
 check(Store::folder('/Fiction/')==='Fiction' && Store::folder('/')==='', 'folder normalization');
 $method=new \ReflectionMethod($controller,'create');
 check(!$method->getAttributes(\OCP\AppFramework\Http\Attribute\NoCSRFRequired::class),'create requires CSRF');
 check(!(new \ReflectionMethod($controller,'delete'))->getAttributes(\OCP\AppFramework\Http\Attribute\NoCSRFRequired::class),'delete requires CSRF');
 echo "inference_folder_rules_ok=true ownership=true snapshots=true bounds=true folder_identity=true permissions=true csrf_attributes=true\n";
}
