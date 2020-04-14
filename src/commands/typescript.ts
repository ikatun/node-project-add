import { Command } from '@oclif/command';

import { containsDependency } from '../services/contains-dependency';
import { copyTemplateFiles } from '../services/copy-template-files';
import * as packageJson from '../services/package-json';
import { packageJsonExists } from '../services/package-json-exists';
import * as packageManager from '../services/package-manager';

const devDeps = ['typescript', '@types/node', 'tsc-watch', 'reflect-metadata'];
const deps = ['source-map-support'];

export default class Typescript extends Command {
  static description = 'Add a typescript configuration for a node project';

  static examples = [
    `$ node-add typescript
  `,
  ];

  static flags = {};

  static args = [];

  async run() {
    this.parse(Typescript);
    const cwd = process.cwd();

    if (!packageJsonExists(cwd)) {
      throw new Error('Missing package.json, command should be run in node project root directory');
    }

    if (containsDependency(cwd, 'react-scripts')) {
      throw new Error('This looks like a create-react-app project, just rename root file to App.tsx and restart.');
    }

    if (containsDependency(cwd, 'react')) {
      throw new Error('This looks like a react project, migrate to create-react-app for typescript support');
    }

    packageManager.installDev(cwd, devDeps);
    packageManager.install(cwd, deps);

    copyTemplateFiles(cwd, 'typescript', '**/*');
    packageJson.addScript(cwd, 'build', 'rm -rf build && tsc');
    packageJson.addScript(cwd, 'start', "tsc-watch --onSuccess 'node build'");
  }
}
