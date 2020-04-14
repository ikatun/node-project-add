import fs from 'fs';
import path from 'path';

export function containsDependency(cwd: string, packageName: string) {
  return fs.existsSync(path.join(cwd, 'node_modules', packageName));
}
