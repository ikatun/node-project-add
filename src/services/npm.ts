import { spawnSync } from 'child_process';

export function installDev(cwd: string, depsList: string[]) {
  return spawnSync('npm', ['install', ...depsList, '--save-dev'], { cwd, stdio: 'inherit' });
}
