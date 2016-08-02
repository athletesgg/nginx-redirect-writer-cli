'use strict'

const URL = 'http://www.martinexperiments.com'

const tap = require('tap')

const cwd = process.cwd()

const convert = require('../../lib/convert')
const parse = require('../../lib/parse')

// Negatives
const test1 = {
  csv: {
    expected: [
      [`${URL}/old`, `${URL}/new`]
    , [`${URL}/old2`, `${URL}/new2`]
    , [`${URL}/mew`, `${URL}/mew2`]
    , [`${URL}/same`, `${URL}/same`]
    ]
  }
, rules: {
    expected: [
      `rewrite ^/old?$ ${URL}/new permanent;`
    , `rewrite ^/old2?$ ${URL}/new2 permanent;`
    , `rewrite ^/mew?$ ${URL}/mew2 permanent;`
    ]
  }
}

tap.test('should parse test1.csv', (t) => {
  parse(cwd, './tests/fixtures/test.csv', (error, raw) => {
    if (error) {
      throw error
    }

    test1.csv.found = raw
    t.deepEqual(test1.csv.found, test1.csv.expected)

    t.end()
  })
})

tap.test('should convert test1 rules', (t) => {
  test1.rules.found = convert(test1.csv.found)

  t.deepEqual(test1.rules.found, test1.rules.expected)

  t.end()
})
