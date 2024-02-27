import React from "react";
import styles from "./page-layout.module.css";
import Sidebar from "../sidebar/sidebar";

const PageLayout = ({ children, activeSidebarItem }) => {
  return (
    <div className={styles.page}>
      <Sidebar activeItem={activeSidebarItem} />
      {children}
    </div>
  );
};

export default PageLayout;
