import { useState } from "react";  
import styles from '../css/ChatScreen.module.css'
import Welcome from './Welcome'
import Question from './Question'
import Button from './Button'
import ChatbotInput from './ChatbotInput'

function ChatScreen() {
  const [messages, setMessages] = useState([]);  // Initialize messages state
  const [isChatActive, setIsChatActive] = useState(false); // State to track chat activation

  // Send user message and receive chatbot response
  const sendMessage = async (userMessage) => {
    if (!userMessage.trim()) return; // Ensure empty messages are not sent

    // If chat is not active, activate it on first message send
    if (!isChatActive) {
      setIsChatActive(true);
    }

    const userChat = { user: userMessage, bot: "Hey! How can I assist you?" };
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
      {/* Conditionally render the Welcome Page or Chat Interface */}
      {!isChatActive ? (
        <div>
          {/* Main page with welcome message and buttons */}
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

          {/* Chatbot input will always be visible */}
          <ChatbotInput onSendMessage={sendMessage} />
        </div>
      ) : (
        <div className={styles.activeChatContainer}>
          {/* Chat Interface (activated after the first message is sent) */}
          <div className={styles.chatWindow}>
            {messages.map((message, index) => (
              <div key={index} className={styles.chatMessage}>
                <div className={styles.userMessage}>
                  <strong>You:</strong> {message.user}
                </div>
                {message.bot && (
                  <div className={styles.botMessage}>
                    <strong>Bot:</strong> {message.bot}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Chatbot input for continuing conversation */}
          <ChatbotInput onSendMessage={sendMessage} />
        </div>
      )}
    </div>
  );
}

export default ChatScreen;
