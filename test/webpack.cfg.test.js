/* eslint-env mocha */

var expect = require('chai').expect
var webpackCfg = require('..')

describe('webpack.cfg library', function () {
  it('should be a function', function () {
    expect(webpackCfg).to.be.instanceof(Function)
  })

  it('should return object equal to an argument', function () {
    var source = {
      output: { filename: 'build.js' }
    }
    var sourceCopy = JSON.parse(JSON.stringify(source))
    expect(webpackCfg(source)).to.be.deep.equal(sourceCopy)
  })

  it('should not return object with links to any part of origin object', function () {
    var source = {
      output: { filename: 'build.js' }
    }
    var sourceCopy = JSON.parse(JSON.stringify(source))
    var config = webpackCfg(source)
    config.output.filename = 'bundle.js'
    expect(config).not.to.be.deep.equal(sourceCopy)
  })
})
