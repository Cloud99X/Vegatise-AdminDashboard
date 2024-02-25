import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <img alt="" src="/menu.svg" className={styles.headerImage} />
      <div className={styles.header}>
        <img
          alt=""
          src="/span_badge-wrapper.svg"
          className={styles.headerImage}
        />
        <img alt="" src="/settingsSVG.svg" className={styles.headerImage} />
        <div className={styles.adminContainer}>
          <img alt="" src="/logo.png" className={styles.headerImage1} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className={styles.admin}>Admin</span>
            <span className={styles.adminName}>Abdurrahman</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
