import express from 'express'
import multer from 'multer'
import path from "path"

const app = express();
const PORT = 5000; // Directly setting the port number
const UPLOAD_DIR = 'uploads/'; // Directly setting the upload directory

// Set up Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_DIR); // Use the directly set upload directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Create unique file name
  },
});

const upload = multer({ storage });

// Route to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  res.json({ fileName: req.file.filename, filePath: `/${req.file.path}` });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});