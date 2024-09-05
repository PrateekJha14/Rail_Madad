import styles from './ChatScreen.module.css'
import Welcome from './Welcome'
import Question from './Question'
import Button from './Button'


function ChatScreen() {

  return (
    <>
      <div className={styles.container}>
        <Welcome />
        <div className={styles.questionContainer}>
          <Question
            que="What are the pre-requisites to avail the UTS mobile application service?"
          />
          <Question
            que="What are the pre-requisites to avail the UTS mobile application service?"
          />
          <Question
            que="What are the pre-requisites to avail the UTS mobile application service?"
          />
          <Question
            que="What are the pre-requisites to avail the UTS mobile application service?"
          />
        </div>

        <div className={styles.buttonContainer}>
          <Button taskName="Submit a Video" />
          <Button taskName="Submit an Image" />
          <Button taskName="Talk to AI" />
        </div>
      </div>
    </>
  )
}

export default ChatScreen;
