import fs from 'fs';
import path from 'path';

export function hasYarnLock(cwd: string) {
  return fs.existsSync(path.join(cwd, 'yarn.lock'));
}
