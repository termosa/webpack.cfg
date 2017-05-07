const clone = require('clone')

module.exports = origin => {
  const cfg = origin === void 0 ? {} : clone(origin)
  return cfg
}
