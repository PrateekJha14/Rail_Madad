
import styles from '../css/ChatScreen.module.css'

export default function Button(props){

    return(
        <button className={styles.button} >{props.taskName}</button>
    )
}