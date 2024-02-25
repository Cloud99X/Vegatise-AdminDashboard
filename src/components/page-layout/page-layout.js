import React from "react";
import styles from "./page-layout.module.css";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";

const PageLayout = ({ children, activeSidebarItem }) => {
  return (
    <div className={styles.page}>
      <Sidebar activeItem={activeSidebarItem} />
      <section className={styles.pageLayout}>
        <Header />
        {children}
      </section>
    </div>
  );
};

export default PageLayout;
