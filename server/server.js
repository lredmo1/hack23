const path = require('path');
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require("mongoose");
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./../webpack.config');
const compiler = webpack(config);
const uploadRoutes = require("./routes/uploadRoutes");
const videoUploadRoutes = require("./routes/videoUploadRoutes");

// MODELS IMPORT
const User = require("./models/User.model");
const TeachingText = require("./models/TeachingText.model");

const mongoAtlasUri = process.env.DATABASE_URL
  
const app = express();

// parse incoming requests with JSON payloads
app.use(express.json());

// REQUIRED ROUTERS

// REQUIRED CONTROLLERS (IF NEEDED HERE)

const PORT = process.env.PORT || 3001;

app.use("/api/uploads",uploadRoutes)
app.use("/api/video-uploads", videoUploadRoutes);
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

// TEST ROUTE

app.get("/", async (req, res) => {
  return res.json({ message: "Hello, World ✌️" });
});

app.get('/hello', (req, res) => {
  res.send('hello world');
});


// TO BE DELETED, ROUTES FOR TEST PURPOSE

// app.post("/teachingtext", async (req, res) => {
//   const { title, description, img, video, categories } = req.body;
//   const userId = "654d297fc93255b6bd60ec00"; // Use the actual user ID

//   try {
//     const user = await User.findById(userId);

//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const newTeachingText = new TeachingText({
//       title,
//       description,
//       categories,
//       user: userId, // Associate the knowledge with the user
//     });

//     const insertedTeachingText = await newTeachingText.save();

//     return res.status(201).json(insertedTeachingText);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: "Internal Server Error" });
//   }
// });


// app.get("/users", async (req, res) => {
//   const allUsers = await User.find();
//   return res.status(200).json(allUsers);
// });

// app.post("/user", async (req, res) => {
//   const newUser = new User({ ...req.body });
//   const insertedUser = await newUser.save();
//   return res.status(201).json(insertedUser);
// })

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

try {
  // Connect to the MongoDB cluster
  mongoose.connect(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true });

  // Listen for successful connection
  mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
  });

  // Listen for connection errors
  mongoose.connection.on('error', (err) => {
    console.error('Mongoose connection error: ' + err);
  });

} catch (e) {
  console.log('Could not connect');
}

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

