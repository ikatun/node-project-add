import fs from 'fs';
import path from 'path';

export function packageJsonExists(cwd: string) {
  return fs.existsSync(path.join(cwd, 'package.json'));
}
