import { terser } from 'rollup-plugin-terser';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import postcss from 'rollup-plugin-postcss';
import url from "@rollup/plugin-url";
const cssUrl = require("postcss-url")

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
    postcss({
      modules: false,
      plugins: [cssUrl({url: 'inline'})]
    }),
    url(),
    resolve(),
    babel({ babelHelpers: 'bundled' })
  ]
}
