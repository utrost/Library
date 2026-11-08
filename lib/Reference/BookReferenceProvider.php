<?php
declare(strict_types=1);
namespace OCA\Library\Reference;
use OCP\Collaboration\Reference\{ADiscoverableReferenceProvider,ISearchableReferenceProvider,IReference,Reference};
use OCP\{IUserSession,IURLGenerator,IL10N};
use OCA\Library\Service\BookAccessService;
final class BookReferenceProvider extends ADiscoverableReferenceProvider implements ISearchableReferenceProvider {
    public function __construct(private IUserSession $session,private IURLGenerator $urls,private IL10N $l10n,private BookAccessService $books) {}
    public function getId(): string { return 'library'; }
    public function getTitle(): string { return $this->l10n->t('Library books'); }
    public function getOrder(): int { return 40; }
    public function getIconUrl(): string { return $this->urls->imagePath('library','app.svg'); }
    public function getSupportedSearchProviderIds(): array { return ['library-books']; }
    private function itemId(string $reference): ?int {
        $base=$this->urls->linkToRouteAbsolute('library.page.index');
        $url=parse_url($reference);$own=parse_url($base);
        if (!is_array($url) || isset($url['user']) || isset($url['pass']) || ($url['scheme'] ?? '')!==($own['scheme'] ?? '') || ($url['host'] ?? '')!==($own['host'] ?? '') || ($url['port'] ?? null)!==($own['port'] ?? null) || rtrim($url['path'] ?? '','/')!==rtrim($own['path'] ?? '','/')) return null;
        parse_str($url['query'] ?? '',$params);$id=$params['details'] ?? null;
        return is_string($id) && preg_match('/^[1-9][0-9]{0,9}$/D',$id) && (int)$id<=2147483647 ? (int)$id : null;
    }
    public function matchReference(string $referenceText): bool { return $this->itemId($referenceText)!==null; }
    public function resolveReference(string $referenceText): ?IReference {
        $uid=$this->session->getUser()?->getUID();$id=$this->itemId($referenceText);
        if ($uid===null || $id===null || !($book=$this->books->find($uid,$id))) return null;
        $ref=new Reference($referenceText);$ref->setTitle($book['title']);$ref->setDescription((string)($book['creators'] ?? ''));
        $ref->setUrl($this->urls->linkToRouteAbsolute('library.page.index').'?details='.$id);
        $ref->setImageUrl($this->urls->linkToRouteAbsolute('library.cover.show',['itemId'=>$id]));return $ref;
    }
    public function getCachePrefix(string $referenceId): string { return 'library-book'; }
    public function getCacheKey(string $referenceId): ?string {
        $uid=$this->session->getUser()?->getUID();$id=$this->itemId($referenceId);
        $book=$uid!==null && $id!==null ? $this->books->find($uid,$id) : null;
        // Recheck access before any cache hit; revoked access must never use old metadata.
        return hash('sha256',json_encode([$uid,$referenceId,$book['metadataRevision'] ?? 'denied',$book['liveEtag'] ?? '',$book['coverCacheRevision'] ?? ''],JSON_THROW_ON_ERROR));
    }
}
