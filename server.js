import express from 'express';
import multer from 'multer';
import path from 'path';
import cors from 'cors';
import fs from 'fs';
import { fileURLToPath } from 'url';

// Helper to get the current directory in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create Express app
const app = express();

// Enable CORS to allow requests from the client
app.use(cors());

// Create an 'uploads' directory if it doesn't exist
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Set up Multer to save files in the 'uploads' directory
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Use the correct path to 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Add timestamp to avoid name clashes
  },
});

const upload = multer({ storage });

// Route to handle image upload
app.post('/uploads', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: 'No file uploaded.' });
  }

  const caption = req.body.caption || ''; // Capture caption if available

  res.json({
    message: 'File uploaded successfully!',
    filePath: `/uploads/${req.file.filename}`,
    caption: caption, // Optionally include caption in response
    
  });
  console.log(caption)
});

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.resolve(uploadDir)));

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
