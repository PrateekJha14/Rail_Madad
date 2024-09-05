import ChatbotInput from "./components/ChatbotInput";
import styles from "./App.module.css"; // Create this CSS module
import Header from "./components/Header";
import ChatScreen from "./components/ChatScreen";

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.header}><Header/></div>
      <div className={styles.chatscreen}><ChatScreen/></div>
      <div className={styles.bot}><ChatbotInput /></div>
    </div>
  );
}

export default App;