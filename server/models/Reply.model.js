const { Schema, model } = require("mongoose");

const replySchema = new Schema(
  {
    content: {
      type: String,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    thread: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Thread",
    },
  },
  {
    timestamps: true,
  }
);

const Reply = model("reply", replySchema);
module.exports = Reply;