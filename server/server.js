const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./../webpack.config');
const compiler = webpack(config);

const app = express();

// REQUIRED ROUTERS

// REQUIRED CONTROLLERS (IF NEEDED HERE)

const PORT = process.env.PORT || 3001;

// parse incoming requests with JSON payloads
app.use(express.json());

// parse incoming requests with urlencoded payloads
app.use(express.urlencoded({ extended: true }));

// serve static files in production mode
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, './../dist')));
}

// serve files on publicPath specified in webpack config
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }),
);

// ADD ROUTES HERE
// ex app.use('/comments', CommentRouter);

// serve 404 status
app.use((req, res) => res.sendStatus(404));

// global error handling
app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultError, err);
  console.log(errorObj.log);
  res.status(errorObj.status).send(errorObj.message);
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
