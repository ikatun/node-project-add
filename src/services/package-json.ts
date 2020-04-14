import fs from 'fs';
import path from 'path';

export function addScript(cwd: string, key: string, value: string) {
  const filePath = path.join(cwd, 'package.json');
  const packageJson = JSON.parse(fs.readFileSync(filePath, { encoding: 'utf8' }));
  const scripts = packageJson.scripts || {};
  scripts[key] = value;
  packageJson.scripts = scripts;

  fs.writeFileSync(filePath, JSON.stringify(packageJson, null, 2), { encoding: 'utf8' });
}
