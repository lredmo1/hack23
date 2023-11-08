const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./../webpack.config');
const compiler = webpack(config);

const PORT = process.env.PORT || 3001;

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

app.get('/hello', (req, res) => {
  res.send('hello world');
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
