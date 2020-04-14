import { Command } from '@oclif/command';
import { packageJsonExists } from '../services/package-json-exists';
import * as npm from '../services/npm';
import { copyTemplateFiles } from '../services/copy-template-files';
import * as packageJson from '../services/package-json';

const devDeps = [
  '@typescript-eslint/eslint-plugin',
  '@typescript-eslint/parser',
  'eslint',
  'eslint-config-prettier',
  'eslint-plugin-prettier',
  'eslint-plugin-react',
  'eslint-plugin-simple-import-sort',
  'prettier',
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
    npm.installDev(cwd, devDeps);
    copyTemplateFiles(cwd, 'eslint', '*');
    packageJson.addScript(cwd, 'lint', "tsc --noEmit && eslint '*/**/*.{js,ts,tsx}' --fix");
  }
}
