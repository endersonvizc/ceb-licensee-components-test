import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import image from '@rollup/plugin-image';
import commonjs from '@rollup/plugin-commonjs';

export default [
  {
    input: './src/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs'
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        exports: 'named'
      }
    ],
    plugins: [
      commonjs({
        include: /node_modules/,
        namedExports: {
          'prop-types': [
            'array',
            'bool',
            'func',
            'number',
            'object',
            'string',
            'symbol',
            'any',
            'arrayOf',
            'element',
            'elementType',
            'instanceOf',
            'node',
            'objectOf',
            'oneOf',
            'oneOfType',
            'shape',
            'exact',
          ],
        },
      }),
      resolve(),
      babel({
        exclude: 'node_modules/**',
        babelHelpers: 'bundled',
      }),
      external(),
      image(),
      postcss({
        plugins: [],
        minimize: true
      }),
      terser()
    ]
  }
];
