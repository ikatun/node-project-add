node-add
========

Add eslint, prettier, husky or typescript support to your existing NodeJS or React project.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/node-add.svg)](https://npmjs.org/package/node-add)
[![Downloads/week](https://img.shields.io/npm/dw/node-add.svg)](https://npmjs.org/package/node-add)
[![License](https://img.shields.io/npm/l/node-add.svg)](https://github.com/ikatun/node-add/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g node-add
$ node-add COMMAND
running command...
$ node-add (-v|--version|version)
node-add/0.0.1 darwin-x64 node-v12.13.1
$ node-add --help [COMMAND]
USAGE
  $ node-add COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`node-add hello [FILE]`](#node-add-hello-file)
* [`node-add help [COMMAND]`](#node-add-help-command)

## `node-add hello [FILE]`

describe the command here

```
USAGE
  $ node-add hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ node-add hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ikatun/node-add/blob/v0.0.1/src/commands/hello.ts)_

## `node-add help [COMMAND]`

display help for node-add

```
USAGE
  $ node-add help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
