var clone = require('clone')

module.exports = function (origin) {
  var cfg = origin === void 0 ? {} : clone(origin)
  return cfg
}

//# sourceMappingURL=webpack.cfg.js.map