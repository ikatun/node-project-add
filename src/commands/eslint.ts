import { Command } from '@oclif/command';

import { containsDependency } from '../services/contains-dependency';
import { copyTemplateFiles } from '../services/copy-template-files';
import * as packageJson from '../services/package-json';
import { packageJsonExists } from '../services/package-json-exists';
import * as packageManager from '../services/package-manager';

const devDeps = [
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint',
  'eslint-config-prettier',
  'eslint-plugin-prettier',
  'eslint-plugin-react',
  'eslint-plugin-simple-import-sort',
  'prettier',
  'lint-staged',
  'husky',
];

export default class Eslint extends Command {
  static description = 'Add a proper eslint+prettier configuration for your typescript project';

  static examples = [
    `$ node-add eslint
eslint config added
`,
  ];

  static flags = {};

  static args = [];

  async run() {
    this.parse(Eslint);
    const cwd = process.cwd();

    if (!packageJsonExists(cwd)) {
      throw new Error('Missing package.json, command should be run in node project root directory');
    }

    const missingDeps = devDeps.filter(devDep => !containsDependency(cwd, devDep));
    packageManager.installDev(cwd, missingDeps);

    copyTemplateFiles(cwd, 'eslint', '*');
    packageJson.addScript(cwd, 'lint', "eslint '*/**/*.{js,ts,tsx}'");

    packageJson.addKey(cwd, 'husky.hooks.pre-commit', 'tsc --noEmit && lint-staged');
    packageJson.addKey(cwd, ['lint-staged', '*.{js,ts,tsx}'], ['eslint --fix']);
  }
}
