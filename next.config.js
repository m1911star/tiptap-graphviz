/** @type {import('next').NextConfig} */

const WasmPackPlugin = require('@wasm-tool/wasm-pack-plugin');
const {
  dirname,
  relative,
  resolve,
  join,
} = require('path');

module.exports = {
  reactStrictMode: true,
  // webpack(config) {
  //   // Ensures that web workers can import scripts.
  //   config.output.publicPath = '/_next/';

  //   // From https://github.com/rustwasm/wasm-pack/issues/835#issuecomment-772591665
  //   config.experiments = {
  //     syncWebAssembly: true,
  //   };

  //   config.module.rules.push({
  //     test: /\.wasm$/,
  //     type: 'webassembly/sync',
  //   });

  //   // From https://github.com/wasm-tool/wasm-pack-plugin
  //   config.plugins.push(
  //     new WasmPackPlugin({
  //       crateDirectory: resolve('./node_modules/@hpcc-js/wasm/dist'),
  //       args: '--log-level warn',
  //     })
  //   );

  //   return config;
  // }
}
