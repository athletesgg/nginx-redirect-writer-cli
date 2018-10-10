'use strict'

const url = require('url')

function reduceRows(result, row) {
  console.log('Processing rule:', row[0], row[1])

  const oldUrl = url.parse(row[0])
  const oldUrlPath = oldUrl.pathname
  const oldUrlCleaned = `${oldUrl.protocol}//${oldUrl.hostname}${oldUrlPath}`

  console.log('Cleaned old url:', row[0], oldUrlCleaned)

  const newUrl = row[1]

  if (oldUrlCleaned === newUrl) {
    console.log('Skipping identical URLs:', row[0], row[1])
    return result
  }

  result.push(`rewrite ^${oldUrlPath}?$ ${newUrl} permanent;`)

  return result
}

module.exports = reduceRows
