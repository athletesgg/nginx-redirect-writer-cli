'use strict'

const reduceRows = require('./reduce-rows')

function convert(raw) {
  console.log('Starting conversion:')

  const rules = raw.reduce(reduceRows, [])

  console.log('Finished conversion.')

  return rules
}

module.exports = convert
