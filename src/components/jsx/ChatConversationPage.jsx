import ChatComponent from './ChatComponent';
import styles from '../css/ChatConversationPage.module.css';

const ChatConversationPage = () => {
  return (
    <div className={styles.pageContainer}>
      <h2 className={styles.header}>Chat with AI</h2>
      <ChatComponent />
    </div>
  );
};

export default ChatConversationPage;
