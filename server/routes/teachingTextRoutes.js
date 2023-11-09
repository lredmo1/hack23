const express = require("express");
const uploadController = require("../controllers/uploadController");
const { uploadVideo } = uploadController;
const router = express.Router();
const multer = require("multer");
const multerSingle = multer();


router.post("/", async (req, res) => {
    const { title, description, img, video, categories } = req.body;
    const userId = "654d297fc93255b6bd60ec00"; // Use the actual user ID
  
    try {
      const user = await User.findById(userId);
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const newTeachingText = new TeachingText({
        title,
        description,
        categories,
        user: userId, // Associate the knowledge with the user
      });
  
      const insertedTeachingText = await newTeachingText.save();
  
      return res.status(201).json(insertedTeachingText);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  });
  


  module.exports = router;
