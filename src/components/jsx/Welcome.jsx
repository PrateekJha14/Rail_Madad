
import logo from "../../assets/railmadadlogo.jpeg"
import styles from '../css/ChatScreen.module.css'

export default function Welcome(){
    return (
        <div>
            <h1 className={styles.welcome}>Welcome to Portal</h1>
            <img className={styles.logo} src={logo}/>
        </div>
    )
}