/* eslint-disable */

const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js');

const host = 'localhost';
const port = 3000;

new webpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  stats: {
    color: true
  },
  historyApiFallback: true
}).listen(port, host, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Running development server using ${host}:${port}`);
  }
});
