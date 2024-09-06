import { useRef, useState } from "react";
import { MdPhotoLibrary, MdCameraAlt, MdArrowUpward } from "react-icons/md";
import styles from "../css/ChatbotInput.module.css";

const ChatbotInput = ({ onSendMessage }) => {
  const [userMessage, setUserMessage] = useState("");
  const [uploadedImage, setUploadedImage] = useState(null); // State to hold the uploaded image preview URL
  const [imageFile, setImageFile] = useState(null); // Store the actual image file for upload
  const [imageCaption, setImageCaption] = useState(""); // State to hold the caption
  const fileInputRef = useRef(null);

  const handleIconClick = (captureType = "") => {
    if (captureType === "camera") {
      fileInputRef.current.setAttribute("capture", "environment");
    } else {
      fileInputRef.current.removeAttribute("capture");
    }
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const selectedFile = files[0];
      const fileURL = URL.createObjectURL(selectedFile); // Create a preview URL for the image
      setUploadedImage(fileURL); // Set the image for preview
      setImageFile(selectedFile); // Store the actual file for uploading

      // Reset the caption when a new image is uploaded
      setImageCaption("");
    }
  };

  const handleSubmit = async () => {
    if (uploadedImage && imageFile) {
      // Prepare the form data for the image and caption
      const formData = new FormData();
      formData.append("file", imageFile);

      try {
        // Upload the image to the server
        const response = await fetch("http://localhost:5000/uploads", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log("File uploaded successfully:", data);

        // Once uploaded, send the image and caption to the server
        onSendMessage({ imageUrl: data.filePath, caption: imageCaption });

        // Clear the state after sending
        setUploadedImage(null);
        setImageFile(null);
        setImageCaption("");
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else if (userMessage.trim()) {
      // If there's no image, just send the text message
      onSendMessage(userMessage);
      setUserMessage("");  // Clear the input field after sending the message
    }
  };

  return (
    <div className={styles.chatbotInput}>
      <div className={styles.iconContainer}>
        <MdPhotoLibrary onClick={() => handleIconClick()} className={styles.icon} />
        <MdCameraAlt onClick={() => handleIconClick("camera")} className={styles.icon} />
      </div>

      {/* Input field */}
      {!uploadedImage ? (
        <input
          type="text"
          placeholder="Enter Your Complaints"
          className={styles.input}
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
      ) : (
        <div className={styles.imagePreviewContainer}>
          <img src={uploadedImage} alt="Preview" className={styles.imagePreview} />
          <input
            type="text"
            placeholder="Add a caption"
            className={styles.captionInput}
            value={imageCaption}
            onChange={(e) => setImageCaption(e.target.value)}
          />
        </div>
      )}

      {/* Send Button */}
      <div className={styles.sendButton} onClick={handleSubmit}>
        <MdArrowUpward className={styles.arrow} />
      </div>

      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
        accept="image/*"
      />
    </div>
  );
};

export default ChatbotInput;
