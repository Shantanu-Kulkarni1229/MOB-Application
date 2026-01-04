const multer = require("multer");
const path = require("path");

// Set storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Store files in 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Rename file
  }
});

const upload = multer({ storage });

module.exports = upload;
