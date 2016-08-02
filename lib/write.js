'use strict'

const fs = require('fs')
const path = require('path')

function write(cwd, output, rules, callback) {
  console.log('Writing NginX configuration:', cwd, output)

  function handleWrite(error) {
    if (error) {
      callback(error, null)
    }

    console.log(
      `Rewrite Rules sucessfully written to ${path.join(cwd, output)}.`
    )
    callback && callback(null, null)
  }

  fs.writeFile(path.join(cwd, output), rules.join('\n'), handleWrite)
}

module.exports = write
