import { useRef } from "react";
import { MdPhotoLibrary, MdCameraAlt, MdArrowUpward } from "react-icons/md";
import styles from "./ChatbotInput.module.css";

const ChatbotInput = () => {
  const fileInputRef = useRef(null);

  // Function to handle icon click and trigger file input
  const handleIconClick = (captureType = "") => {
    if (captureType === "camera") {
      fileInputRef.current.setAttribute("capture", "environment");
    } else {
      fileInputRef.current.removeAttribute("capture");
    }
    fileInputRef.current.click();
  };

  // Function to handle file selection and upload
  const handleFileChange = async (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      const selectedFile = files[0];
      console.log("Selected file:", selectedFile);

      // Perform the upload to the server using form data
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        console.log("File uploaded successfully:", data);
        // Handle further actions like updating the UI with the response data
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  return (
    <div className={styles.chatbotInput}>
      <div className={styles.iconContainer}>
        <MdPhotoLibrary 
          onClick={() => handleIconClick()} 
          className={styles.icon} 
        /> {/* Gallery Icon */}
        <MdCameraAlt 
          onClick={() => handleIconClick("camera")} 
          className={styles.icon} 
        /> {/* Camera Icon */}
      </div>
      <input
        type="text"
        placeholder="Enter Your Complaints"
        className={styles.input}
      />
      <MdArrowUpward  className={styles.arrow} /> {/* Upward Arrow Icon */}

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
