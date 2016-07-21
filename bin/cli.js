#!/usr/bin/env node

const pkg = require('../package.json')
const program = require('commander')

const convert = require('../lib/convert')

const cwd = process.cwd()

program
  .version(pkg.version)
  .usage('<input> <output>')
  .arguments('<input> <output>')
  .action(function handleAction(input, output) {
    convert(cwd, input, output)
  })

program.parse(process.argv)

if (!program.args.length) {
  return program.help()
}
