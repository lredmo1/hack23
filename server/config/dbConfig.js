const mongoose = require("mongoose");

const endpoint = process.env.MONGODB_URI || "mongodb://localhost:27017/gdi2023";

mongoose
  .connect(endpoint)
  .then((db) => console.log("DB connected: ", db.connection.name))
  .catch((e) => console.error(e));
