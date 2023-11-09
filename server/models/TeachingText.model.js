const mongoose = require("mongoose");

const TeachingTextSchema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    description: { type: String, required: true },
    categories: { type: Array, required: true },
    user: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
  },
  { timestamps: true }
);

const TeachingText = mongoose.model("TeachingText", TeachingTextSchema);
module.exports = TeachingText;
