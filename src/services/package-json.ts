import fs from 'fs';
import _ from 'lodash';
import path from 'path';

export function addKey(cwd: string, propertyPath: string | string[], value: any) {
  const filePath = path.join(cwd, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf8' }));
  _.set(packageJson, propertyPath, value);
  fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2) + '\n', { encoding: 'utf8' });
}

export function addScript(cwd: string, key: string, value: string) {
  addKey(cwd, ['scripts', key], value);
}
