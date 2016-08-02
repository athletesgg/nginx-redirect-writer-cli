#!/usr/bin/env node

const program = require('commander')

const pkg = require('../package.json')

const convert = require('../lib/convert')
const parse = require('../lib/parse')
const write = require('../lib/write')

const cwd = process.cwd()

function handleAction(input, output) {
  parse(cwd, input, (error, raw) => {
    if (error) {
      throw error
    }

    const rules = convert(raw)

    write(cwd, output, rules, (error) => {
      if (error) {
        throw error
      }
    })
  })
}

program
  .version(pkg.version)
  .usage('<input> <output>')
  .arguments('<input> <output>')
  .action(handleAction)

program.parse(process.argv)

if (!program.args.length) {
  return program.help()
}
