import styles from '../css/Status.module.css'
import Header from './Header';
import Logo from '../../assets/railmadadlogo.jpeg'

const ComplaintStatus = () => {
  return (
    <>
    <Header/>
    <div className={styles.container}>
        
      <div className={styles.complaintBox}>
        <div className={styles.complaintInfo}>
          <div className={styles.row}>
            <div className={styles.complaintId}>ID: 2356</div>
            <div className={styles.complaintType}>Complaint: E-Catering Service Issues</div>
          </div>
          <div className={styles.row}>
            <div className={styles.complaintDate}>Date: 2024-09-23</div>
            <div className={styles.complaintTime}>Time: 20:56</div>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.logo}>
            <img src={Logo} alt="Rail Madad Logo" />
          </div>
          <div className={styles.uploads}>
            <div className={styles.uploadsRow}>
              <div className={styles.uploadColumn}>
                <div className={styles.uploadTitle}>Image Uploaded</div>
                <a href="link_to_image" className={styles.uploadLink}>link_to_image</a>
              </div>
              <div className={styles.uploadColumn}>
                <div className={styles.uploadTitle}>Video Uploaded</div>
                <a href="link_to_video" className={styles.uploadLink}>link_to_video</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.statusBox}>
          <div className={styles.statusText}>Complaint Status</div>
          <div className={styles.statusIndicator}>
            <div className={styles.pendingDot}></div>
            <span>Pending!!</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ComplaintStatus;