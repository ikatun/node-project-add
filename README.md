nodeadd
========

Add eslint, prettier, husky or typescript support to your existing NodeJS or React project.

You can use it alongside npm to create a typescript project with prettier, eslint and husky git hook working together

Usage example:
```shell script
mkdir example-node-app
cd example-node-app
npm init -y
npx nodeadd typescript
npm start
```

Congratulations, you now have a running typescript node project!
Directory `build` contains the transpiled javascript build, `src` directory contains the source.
File `src/index.ts` is the entry file of your app.

You can also run the command in an existing javascript project to enable typescript support.

To add linter support to a typescript project, run `nodeadd eslint` command.
Usage example:
```shell script
npx nodeadd eslint
```

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/nodeadd.svg)](https://npmjs.org/package/nodeadd)
[![Downloads/week](https://img.shields.io/npm/dw/nodeadd.svg)](https://npmjs.org/package/nodeadd)
[![License](https://img.shields.io/npm/l/nodeadd.svg)](https://github.com/ikatun/nodeadd/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g nodeadd
$ nodeadd COMMAND
running command...
$ nodeadd (-v|--version|version)
nodeadd/0.0.1 darwin-x64 node-v12.13.1
$ nodeadd --help [COMMAND]
USAGE
  $ nodeadd COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`nodeadd eslint`](#nodeadd-eslint)
* [`nodeadd help [COMMAND]`](#nodeadd-help-command)
* [`nodeadd typescript`](#nodeadd-typescript)

## `nodeadd eslint`

Add a proper eslint+prettier configuration for your typescript project

```
USAGE
  $ nodeadd eslint

EXAMPLE
  $ nodeadd eslint
  eslint config added
```

_See code: [src/commands/eslint.ts](https://github.com/ikatun/nodeadd/blob/v0.0.1/src/commands/eslint.ts)_

## `nodeadd help [COMMAND]`

display help for nodeadd

```
USAGE
  $ nodeadd help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_

## `nodeadd typescript`

Add a typescript configuration for a node project

```
USAGE
  $ nodeadd typescript

EXAMPLE
  $ nodeadd typescript
```

_See code: [src/commands/typescript.ts](https://github.com/ikatun/nodeadd/blob/v0.0.1/src/commands/typescript.ts)_
<!-- commandsstop -->
