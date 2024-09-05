import  { useState } from 'react';
import styles from '../css/Header.module.css';
import satyamev from '../../assets/satyamev-jayate.png'
const Header = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English');

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
    // You can also add additional logic here for language change, like updating the UI or making API calls.
  };

  return (
    <header className={styles.header}>
      <div className={styles.leftSection}>
        <img
          src={satyamev}
          alt="Government of India"
          className={styles.logo}
        />
        <div className={styles.titleContainer}>
            <div className="leftHeader">
          <h1 className={styles.title}>RailMadad</h1>
          <p className={styles.subtitle}>
            For Inquiry, Assistance & Grievance Redressal
          </p>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <div className={styles.assistance}>
          <span className={styles.number}>139</span>
          <span className={styles.assistanceText}>for Security/Medical Assistance</span>
        </div>
        <select
          className={styles.languageSelect}
          value={selectedLanguage}
          onChange={handleLanguageChange}
        >
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
          <option value="Tamil">Tamil</option>
          <option value="Telugu">Telugu</option>
          <option value="Bengali">Bengali</option>
          <option value="Marathi">Marathi</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
