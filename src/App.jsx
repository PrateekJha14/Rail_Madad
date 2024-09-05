import { useState } from "react";
import styles from "./App.module.css"; // Assuming you have a CSS module for styling
import Header from "./components/jsx/Header";
import ChatScreen from "./components/jsx/ChatScreen";
import ChatComponent from "./components/jsx/ChatComponent"; // Import ChatComponent

function App() {
  const [isChatActive, setIsChatActive] = useState(false); // State to track if chat has started

  const handleSendMessage = (message) => {
    if (message.trim()) {
      setIsChatActive(false); // Activate the chat component after a message is sent
    }
  };
  console.log(isChatActive);
  

  return (
    <div className={styles.app}>
      <div className={styles.header}><Header /></div>
      <div className={styles.mainContent}>
        {/* Conditionally render ChatScreen or ChatComponent */}
        {/* {{isChatActive ? (
          <ChatComponent onSendMessage={handleSendMessage} />
        ) : (
          <ChatScreen onSendMessage={handleSendMessage}/>
        )}} */}
        {isChatActive&&<ChatComponent onSendMessage={handleSendMessage} />}
        {!isChatActive&&<ChatScreen onSendMessage={handleSendMessage} />}
      </div>
    </div>
  );
}

export default App;
