import React from "react";
import styles from "../styles/Dashboard.module.css";

const Dashboard = () => {
  const complaints = [
    { id: 1231, title: "Ticket Cancellation Refund Delay", date: "2024-15-23, 20:30", status: "Resolved" },
    { id: 1002, title: "Cleanliness Issues", date: "2024-11-23, 15:42", status: "Pending" },
    { id: 1029, title: "Overcharging by Vendor", date: "2024-13-23, 11:16", status: "Pending" },
    { id: 2024, title: "Lost Luggage", date: "2024-08-23, 23:43", status: "Resolved" },
    { id: 2356, title: "E-Catering Service Issues", date: "2024-09-23, 20:56", status: "Under Process" },
    { id: 1562, title: "Tatkal Booking Issues", date: "2024-18-23, 16:32", status: "Resolved" },
    { id: 1003, title: "Dirty Washrooms", date: "2024-10-23, 20:48", status: "Resolved" },
    { id: 2521, title: "Seat Allocation Error", date: "2024-11-23, 08:20", status: "Under Process" },
  ];

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
        <div className={styles.tableContainer}>
          <input type="text" placeholder="Search Id/ Name" className={styles.searchBar} />
          <table className={styles.complaintsTable}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Complaint Title</th>
                <th>Resources</th>
                <th>Date & Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {complaints.map((complaint) => (
                <tr key={complaint.id}>
                  <td>{complaint.id}</td>
                  <td>{complaint.title}</td>
                  <td><a href="#">Link</a></td>
                  <td>{complaint.date}</td>
                  <td>{complaint.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
