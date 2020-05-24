import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';

export default {
  input: 'src/index.js',
  output: [
    {
      file: './dist/easy-drawing-board.js',
      format: 'umd',
      name: 'EasyDrawingBoard'
    },
    {
      file: './dist/easy-drawing-board.min.js',
      format: 'iife',
      name: 'EasyDrawingBoard',
      plugins: [terser()]
    }
  ],
  plugins: [
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
}
