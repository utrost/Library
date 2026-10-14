import { execFileSync } from 'node:child_process'

// Nextcloud 33.0.9's command reads an undefined login-name option. Use the
// command's own token-service operation as a narrowly scoped CLI fallback.
// Return stdout to the caller; never print the credential in test logs.
export function createTemporaryAppPassword(container, user, name) {
  const options = { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }
  try {
    return execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', 'occ', 'user:add-app-password', '--no-interaction', '--name', name, user], options)
  } catch (error) {
    if (!String(error.stderr).includes('The "login-name" option does not exist.')) throw error
    const input = Buffer.from(JSON.stringify({ user, name })).toString('base64')
    const code = `define('OC_CONSOLE',true); require '/var/www/html/lib/base.php';
      $input=json_decode(base64_decode('${input}'),true);
      $user=\\OC::$server->get(\\OCP\\IUserManager::class)->get($input['user']);
      if (!$user) throw new \\RuntimeException('Test account not found');
      $token=\\OC::$server->get(\\OCP\\Security\\ISecureRandom::class)->generate(72, \\OCP\\Security\\ISecureRandom::CHAR_UPPER . \\OCP\\Security\\ISecureRandom::CHAR_LOWER . \\OCP\\Security\\ISecureRandom::CHAR_DIGITS);
      $generated=\\OC::$server->get(\\OC\\Authentication\\Token\\IProvider::class)->generateToken($token,$user->getUID(),$user->getUID(),null,$input['name'],\\OC\\Authentication\\Token\\IToken::PERMANENT_TOKEN,\\OC\\Authentication\\Token\\IToken::DO_NOT_REMEMBER);
      \\OC::$server->get(\\OCP\\EventDispatcher\\IEventDispatcher::class)->dispatchTyped(new \\OC\\Authentication\\Events\\AppPasswordCreatedEvent($generated));
      echo 'app password:',PHP_EOL,$token,PHP_EOL;`
    return execFileSync('docker', ['exec', '-u', 'www-data', container, 'php', '-r', code], options)
  }
}
