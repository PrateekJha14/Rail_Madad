import { useState } from "react";
import styles from "./App.module.css";
import Header from "./components/jsx/Header";
import ChatConversationPage from "./components/jsx/ChatConversationPage"; // Import the new component
import ChatScreen from './components/jsx/ChatScreen'

function App() {
  const [isChatActive, setIsChatActive] = useState(false);

  const handleSendMessage = (message) => {
    if (message.trim()) {
      setIsChatActive(true); // Show ChatConversationPage after sending a message
    }
  };

  return (
    <div className={styles.app}>
      <div className={styles.header}><Header /></div>
      <div className={styles.mainContent}>
        {isChatActive && <ChatConversationPage />}
        {!isChatActive && <ChatScreen onSendMessage={handleSendMessage} />}
      </div>
    </div>
  );
}

export default App;
