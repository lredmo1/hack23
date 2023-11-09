const mongoose = require("mongoose");

const KnowledgeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true},
    description: { type: String, required: true },
    img: { type: String },
    video: { type: String },
    categories: { type: Array, required: true },
    user: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
  },
  { timestamps: true }
);

const Knowledge = mongoose.model("Knowledge", KnowledgeSchema);
module.exports = Knowledge;
