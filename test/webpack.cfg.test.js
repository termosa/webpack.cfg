import test from 'ava'
import webpackCfg from '..'

test('webpack.cfg is a function', t =>
  t.is(typeof webpackCfg, 'function')
)

test.todo('webpack.cfg returns object equal to an argument')

test.todo('changes to webpack.cfg result object doesn\'t have side-effects')
