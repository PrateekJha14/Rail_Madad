import { useRef, useState } from "react";
import { MdPhotoLibrary, MdCameraAlt, MdArrowUpward } from "react-icons/md";
import styles from "../css/ChatbotInput.module.css";

const ChatbotInput = ({ onSendMessage }) => {
  const [userMessage, setUserMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleIconClick = (captureType = "") => {
    if (captureType === "camera") {
      fileInputRef.current.setAttribute("capture", "environment");
    } else {
      fileInputRef.current.removeAttribute("capture");
    }
    fileInputRef.current.click();
  };

  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const selectedFile = files[0];
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });
        const data = await response.json();
        console.log("File uploaded successfully:", data);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleSubmit = () => {
    if (userMessage.trim()) {
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

      {/* Input field with rounded style */}
      <input
        type="text"
        placeholder="Enter Your Complaints"
        className={styles.input}
        value={userMessage}
        onChange={(e) => setUserMessage(e.target.value)}
      />

      {/* Send Button styled like an upward arrow inside a circle */}
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
