import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';

export default {
  input: 'src/index.js',
  output: [
    {
      file: './dist/easy-drawing-board.js',
      format: 'umd',
      name: 'EasyDrawingBoard'
    }
  ],
  plugins: [
    // terser(),
    resolve(),
    babel({ babelHelpers: 'bundled' }),
    postcss()
  ]
}
