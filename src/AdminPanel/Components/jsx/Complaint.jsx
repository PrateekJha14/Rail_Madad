import React from "react";
import styles from "../styles/Complaint.module.css";

const ComplaintDetails = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.sidebar}>
        <div className={styles.userCard}>
          <div className={styles.userAvatar}></div>
          <p className={styles.welcomeText}>Welcome<br />Mr. Suraj</p>
        </div>
        <nav>
          <ul className={styles.menu}>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
            <li>Menu item</li>
          </ul>
        </nav>
      </div>
      <div className={styles.mainContent}>
        <header className={styles.header}>
          <div className={styles.logo}>RailMadad</div>
          <div className={styles.stats}>
            <div className={styles.statBox}>
              <p>Total Resolved</p>
              <span className={styles.resolved}>352</span>
            </div>
            <div className={styles.statBox}>
              <p>Total Under Process</p>
              <span className={styles.underProcess}>87</span>
            </div>
            <div className={styles.statBox}>
              <p>Total Pending</p>
              <span className={styles.pending}>12</span>
            </div>
          </div>
        </header>
        <div className={styles.complaintDetails}>
          <div className={styles.complaintHeader}>
            <p>ID: 2356 &nbsp;&nbsp; Complaint: E-Catering Service Issues</p>
            <div className={styles.complaintStatus}>
              <p>Date: 2024-09-23</p>
              <p>Time: 20:56</p>
            </div>
          </div>

          <div className={styles.complaintInfo}>
            <div className={styles.infoSection}>
              <h3>Complainant Information</h3>
              <div className={styles.infoBox}></div>
            </div>
            <div className={styles.infoSection}>
              <h3>Complaint Description</h3>
              <div className={styles.infoBox}></div>
              <button className={styles.readMore}>Read More</button>
            </div>
          </div>

          <div className={styles.uploads}>
            <div>
              <h4>Image Uploaded By Client</h4>
              <a href="#">link_to_image</a>
            </div>
            <div>
              <h4>Video Uploaded By Client</h4>
              <a href="#">link_to_video</a>
            </div>
          </div>

          <div className={styles.additionalInfo}>
            <h4>Info Extracted By Image/Video</h4>
            <ul>
              <li>Info 1</li>
              <li>Info 2</li>
              <li>Info 3</li>
              <li>Info 4</li>
            </ul>
          </div>

          <div className={styles.responseSection}>
            <h4>Add Response</h4>
            <textarea rows="4"></textarea>
            <div className={styles.responseActions}>
              <div className={styles.statusChange}>
                <p>Change Status:</p>
                <button className={`${styles.statusBtn} ${styles.green}`}></button>
                <button className={`${styles.statusBtn} ${styles.yellow}`}></button>
                <button className={`${styles.statusBtn} ${styles.red}`}></button>
              </div>
              <button className={styles.submitBtn}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintDetails;
