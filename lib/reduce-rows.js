'use strict'

const url = require('url')

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

module.exports = reduceRows
