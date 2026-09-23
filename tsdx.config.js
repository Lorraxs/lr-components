const postcss = require('rollup-plugin-postcss');
const autoprefixer = require('autoprefixer');
const nodeResolve = require('@rollup/plugin-node-resolve');

module.exports = {
  /**
   * @param {import('rollup/dist/rollup').InputOptions} config
   */
  rollup(config, options) {
    config.plugins.push(
      postcss({
        plugins: [autoprefixer()],
      }),
      nodeResolve.nodeResolve({
        extensions: ['.css'],
      })
    );
    return config;
  },
};
