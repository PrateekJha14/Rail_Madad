import { useState } from "react";
import ChatbotInput from "./ChatbotInput";
import styles from "../css/ChatComponent.module.css";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);

  // Send user message and receive chatbot response
  const sendMessage = async (userMessage) => {
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
      setMessages((prevMessages) => prevMessages.map(
        (msg, index) => index === prevMessages.length - 1 ? botMessage : msg
      ));
    } catch (error) {
      console.error("Error communicating with chatbot:", error);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatWindow}>
        {messages.map((message, index) => (
          <div key={index} className={styles.chatMessage}>
            <p><strong>You:</strong> {message.user}</p>
            <p><strong>Bot:</strong> {message.bot}</p>
          </div>
        ))}
      </div>
      
      <ChatbotInput onSendMessage={sendMessage} />
    </div>
  );
};

export default ChatComponent;
