import { spawnSync } from 'child_process';

export function installDev(cwd: string, depsList: string[]) {
  if (depsList.length === 0) {
    return;
  }

  return spawnSync('yarn', ['add', ...depsList, '--dev'], { cwd, stdio: 'inherit' });
}
