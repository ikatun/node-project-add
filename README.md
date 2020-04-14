node-project-add
========

Add eslint, prettier, husky or typescript support to your existing NodeJS or React project.

You can use it alongside npm to create a typescript project with prettier, eslint and husky git hook working together

Usage example:
```shell script
mkdir example-node-app
cd example-node-app
npm init -y
npx node-project-add typescript
npm start
```

Congratulations, you now have a running typescript node project!
Directory `build` contains the transpiled javascript build, `src` directory contains the source.
File `src/index.ts` is the entry file of your app.

You can also run the command in an existing javascript project to enable typescript support.

To add linter support to a typescript project, run `node-project-add eslint` command.
Usage example:
```shell script
npx node-project-add eslint
```

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/node-project-add.svg)](https://npmjs.org/package/node-project-add)
[![Downloads/week](https://img.shields.io/npm/dw/node-project-add.svg)](https://npmjs.org/package/node-project-add)
[![License](https://img.shields.io/npm/l/node-project-add.svg)](https://github.com/ikatun/node-project-add/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g node-project-add
$ node-project-add COMMAND
running command...
$ node-project-add (-v|--version|version)
node-project-add/0.0.2 darwin-x64 node-v12.13.1
$ node-project-add --help [COMMAND]
USAGE
  $ node-project-add COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`node-project-add eslint`](#node-project-add-eslint)
* [`node-project-add help [COMMAND]`](#node-project-add-help-command)
* [`node-project-add typescript`](#node-project-add-typescript)

## `node-project-add eslint`

Add a proper eslint+prettier configuration for your typescript project

```
USAGE
  $ node-project-add eslint

EXAMPLE
  $ node-project-add eslint
  eslint config added
```

_See code: [src/commands/eslint.ts](https://github.com/ikatun/node-project-add/blob/v0.0.2/src/commands/eslint.ts)_

## `node-project-add help [COMMAND]`

display help for node-project-add

```
USAGE
  $ node-project-add help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `node-project-add typescript`

Add a typescript configuration for a node project

```
USAGE
  $ node-project-add typescript

EXAMPLE
  $ node-project-add typescript
```

_See code: [src/commands/typescript.ts](https://github.com/ikatun/node-project-add/blob/v0.0.2/src/commands/typescript.ts)_
<!-- commandsstop -->
