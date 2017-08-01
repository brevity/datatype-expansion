'use strict'

const describe = require('mocha/lib/mocha.js').describe
const it = require('mocha/lib/mocha.js').it

const _ = require('lodash')
const expect = require('chai').expect
const types = require('./fixtures/types')
const forms = require('./fixtures/expanded_forms')
const expandedForm = require('..').expandedForm

describe('expandedForm()', function () {
  _.each(types, function (type, name) {
    it('should generate expanded form of type ' + name, function () {
      expandedForm(types[name], types, function (err, expForm) {
        expect(err).to.equal(null)
        expect(expForm).to.deep.equal(forms[name])
      })
    })
  })
})
describe('omissions', function () {
  expandedForm(types['Song'], types, function (err, expForm) {
    if (err) console.error(err)
    expect(expForm.dependencies).to.equal(undefined)
    expect(expForm.exclusiveMaximum).to.equal(undefined)
    expect(expForm.exclusiveMinimum).to.equal(undefined)
    expect(expForm.additionalItems).to.equal(undefined)
  })
})
