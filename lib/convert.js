const csv = require('fast-csv')
const fs = require('fs')
const path = require('path')
const url = require('url')

function convert(cwd, input, output) {
  console.log('Starting conversion...')

  const parsed = []

  function handleWrite(error) {
    if (error) {
      throw error
    }

    console.log(
      `Rewrite Rules sucessfully written to ${path.join(cwd, output)}.`
    )
  }

  function reduceRows(result, row) {
    if (row[0] === row[1]) {
      console.log(`Skipping identical URLS: ${row[0]} ${row[1]}`)
      return result
    }

    const oldUrl = url.parse(row[0]).path
    const newUrl = row[1]

    result.push(`rewrite ^${oldUrl}?$ ${newUrl} permanent;`)

    return result
  }

  function handleData(results) {
    parsed.push(JSON.parse(results.toString()))
  }

  function handleEnd() {
    const rules = parsed.reduce(reduceRows, []).join('\n')

    fs.writeFile(path.join(cwd, output), rules, handleWrite)
  }

  csv.fromPath(path.join(cwd, input), {
    objectMode: false
  , headers: false
  , trim: true
  })
    .on('data', handleData)
    .on('end', handleEnd)
}

module.exports = convert
