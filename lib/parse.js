'use strict'

const csv = require('fast-csv')
const path = require('path')

function parse(cwd, input, callback) {
  console.log('Parsing CSV:', cwd, input)

  const parsed = []

  function handleData(results) {
    parsed.push(JSON.parse(results.toString()))
  }

  function handleEnd() {
    console.log('Finished parsing CSV:', parsed)
    callback && callback(null, parsed)
  }

  csv.fromPath(path.join(cwd, input), {
    objectMode: false
  , headers: false
  , trim: true
  })
    .on('data', handleData)
    .on('end', handleEnd)
}

module.exports = parse
