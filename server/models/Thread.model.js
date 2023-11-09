const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema(
  {
    content: {
      type: String,
    },
    user: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
  },
  {
    timestamps: true,
  }
);

const Thread = mongoose.model("Thread", threadSchema);
module.exports = Thread;