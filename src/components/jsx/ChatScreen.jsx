import { useState } from "react";  // Import useState
import styles from '../css/ChatScreen.module.css'
import Welcome from './Welcome'
import Question from './Question'
import Button from './Button'
import ChatbotInput from './ChatbotInput'

function ChatScreen() {
  const [messages, setMessages] = useState([]);  // Initialize messages state

  // Send user message and receive chatbot response
  const sendMessage = async (userMessage) => {
    if (!userMessage.trim()) return; // Ensure empty messages are not sent

    const userChat = { user: userMessage, bot: "danish bhai zinda hote toh aaj SIH me hote" };
    setMessages((prevMessages) => [...prevMessages, userChat]);

    try {
      const response = await fetch("http://localhost:5000/chatbot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      const botMessage = { user: userMessage, bot: data.response };

      // Update the chatbot response once received
      setMessages((prevMessages) => 
        prevMessages.map((msg, index) => 
          index === prevMessages.length - 1 ? botMessage : msg
        )
      );
    } catch (error) {
      console.error("Error communicating with chatbot:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Welcome />
      
      <div className={styles.questionContainer}>
        {/* Example: Different questions */}
        <Question que="What are the pre-requisites to avail the UTS mobile application service?" />
        <Question que="How do I reset my password in the UTS app?" />
        <Question que="Can I link multiple devices to the same UTS account?" />
        <Question que="How do I report an issue with the UTS app?" />
      </div>

      <div className={styles.buttonContainer}>
        {/* Buttons for different tasks */}
        <Button taskName="Submit a Video" />
        <Button taskName="Submit an Image" />
        <Button taskName="Talk to AI" />
      </div>

      {/* Display messages */}
      <div className={styles.chatWindow}>
        {messages.map((message, index) => (
          <div key={index} className={styles.chatMessage}>
            <p><strong>You:</strong> {message.user}</p>
            <p><strong>Bot:</strong> {message.bot}</p>
          </div>
        ))}
      </div>

      {/* Chatbot input */}
      <ChatbotInput onSendMessage={sendMessage} />
    </div>
  );
}

export default ChatScreen;
