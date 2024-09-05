
import styles from './ChatScreen.module.css'

export default function Question(props){
    return (
        <div className={styles.que}>
            {props.que}
        </div>
    )
}