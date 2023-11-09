const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
// require("./config/dbConfig");

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./../webpack.config');
const compiler = webpack(config);

// MODELS IMPORT
const User = require("./models/User.model");

const app = express();

// parse incoming requests with JSON payloads
app.use(express.json());

// REQUIRED ROUTERS

// REQUIRED CONTROLLERS (IF NEEDED HERE)

const PORT = process.env.PORT || 3001;

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

// HOME

app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World ✌️" });
});

app.get('/hello', (req, res) => {
  res.send('hello world');
});

// USER ROUTES

app.get("/users", async (req, res) => {
  const allUsers = await User.find();
  return res.status(200).json(allUsers);
});

app.post("/user", async (req, res) => {
  const newUser = new User({ ...req.body });
  const insertedUser = await newUser.save();
  return res.status(201).json(insertedUser);
})



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


const start = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/gdi2023"
    );
    app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();

