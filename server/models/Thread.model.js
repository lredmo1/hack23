const { Schema, model } = require("mongoose");

const threadSchema = new Schema(
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

const Thread = model("Thread", threadSchema);
module.exports = Thread;