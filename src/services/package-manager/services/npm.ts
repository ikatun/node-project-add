import { spawnSync } from 'child_process';

export function install(cwd: string, depsList: string[]) {
  if (depsList.length === 0) {
    return;
  }

  return spawnSync('npm', ['install', ...depsList], { cwd, stdio: 'inherit' });
}

export function installDev(cwd: string, depsList: string[]) {
  if (depsList.length === 0) {
    return;
  }

  return spawnSync('npm', ['install', ...depsList, '--save-dev'], { cwd, stdio: 'inherit' });
}
