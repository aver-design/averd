/* eslint-disable no-param-reassign */
const path = require('path');

module.exports = {
  port: 8077,
  source: './components',
  output: './preview/dist',
  htmlTemplate: './preview/theme/static/index.html',
  theme: './preview/theme',
  themeConfig: {},
  lessConfig: {
    javascriptEnabled: true,
  },
  webpackConfig(config) {
    config.mode = process.env.NODE_ENV || 'development';
    config.devtool = 'source-map';
    config.resolve.alias = {
      'averd/lib': path.join(__dirname, '..', 'components'),
      'averd/es': path.join(__dirname, '..', 'components'),
      averd: path.join(__dirname, '..'),
    };
    return config;
  },
  htmlTemplateExtraData: {
    BUILD_VERSION: new Date().valueOf(),
  },
};
