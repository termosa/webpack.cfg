# Webpack.cfg

[![npm](https://img.shields.io/npm/l/webpack.cfg.svg)](https://github.com/termosa/webpack.cfg)
[![npm](https://img.shields.io/npm/v/webpack.cfg.svg)](https://www.npmjs.com/package/webpack.cfg)
[![Travis](https://img.shields.io/travis/termosa/webpack.cfg.svg)](https://travis-ci.org/termosa/webpack.cfg)

An easy to use Webpack configuration library without a need to learn new API

## Installation

Same as Webpack itself:

``` bash
$ npm install --save-dev webpack.cfg
```

or

``` bash
$ yarn add --dev webpack.cfg
```

## Usage

``` js
// webpack.config.js
const webpackCfg = require('webpack.cfg')

module.exports = webpackCfg({
    entry: './index',
    output: {
        filename: 'build.js'
    }
})
```

## License

[MIT](https://github.com/termosa/webpack.cfg/blob/master/LICENSE) © [Stanislav Termosa](https://github.com/termosa)

