/* eslint-disable */

const path = require('path');

require('app-module-path').addPath(path.join(process.cwd(), 'src'));

require('./globals');

require('babel-core/register');
require.extensions['.css'] = () => {
  return;
};


const express = require('express');
const application = express();

const morgan = require('morgan');
const logger = morgan('combined');
application.use(logger);

application.set('views', path.join(__dirname, 'views'));
application.set('view engine', 'ejs');

// Serve static files
// application.use(express.static('src/static'));

if (__DEVELOPMENT__) {
  const webpack = require('webpack');
  const webpackConfig = require('../webpack/development.js').default;
  const webpackDev = require('webpack-dev-middleware');
  const webpackHot = require('webpack-hot-middleware');
  const webpackCompiler = webpack(webpackConfig);

  application.use(
    webpackDev(
      webpackCompiler,
      {
        hot: true,
        publicPath: webpackConfig.output.publicPath,
        stats: { colors: true }
      }
    )
  );

  application.use(webpackHot(webpackCompiler));
}

application.get('*', require('./render').default);

const port = 3000;

application.listen(port, function() {
  console.log(`Running server on port ${port}`);
});
