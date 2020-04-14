import { hasYarnLock } from './services/has-yarn-lock';
import * as npm from './services/npm';
import * as yarn from './services/yarn';

export function installDev(cwd: string, depsList: string[]) {
  if (hasYarnLock(cwd)) {
    return yarn.installDev(cwd, depsList);
  }

  return npm.installDev(cwd, depsList);
}

export function install(cwd: string, depsList: string[]) {
  if (hasYarnLock(cwd)) {
    return yarn.install(cwd, depsList);
  }

  return npm.install(cwd, depsList);
}
