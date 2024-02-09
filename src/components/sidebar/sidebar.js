import React from "react";
import styles from "./sidebar.module.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ activeItem }) => {
  const navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(`/${page}`);
  };

  const sidebarItems = [
    {
      name: "Analytics",
      icon: "./growth3.svg",
      activeIcon: "/growth.svg",
    },
    {
      name: "About Campaign",
      icon: "./carprofile.svg",
      activeIcon: "/carprofile1.svg",
    },
    {
      name: "Attribution",
      icon: "./rocketlaunch.svg",
      activeIcon: "/rocketlaunch1.svg",
    },
    {
      name: "Drivers Information",
      icon: "./rocketlaunch.svg",
      activeIcon: "/rocketlaunch1.svg",
    },
    {
      name: "Retargeting",
      icon: "/arrowscounterclockwise.svg",
      activeIcon: "/arrowscounterclockwise1.svg",
    },
    {
      name: "Billing",
      icon: "./dollar-coin.svg",
      activeIcon: "/dollar-coin1.svg",
    },
    {
      name: "Settings",
      icon: "./setting.svg",
      activeIcon: "/setting1.svg",
    },
  ];

  //
  const navigations = [
    "analytics",
    "about-campaign",
    "attribution",
    "coming-soon",
    "retargetting",
    "billing",
    "setting",
  ];

  const onLogoutClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);
  //
  return (
    <div className={styles.sidebar}>
      <img src="/asset-84x@2x.png" width={200} className={styles.section} />
      <div className={styles.itemsContainer}>
        {sidebarItems.map((item, index) => (
          <div
            className={
              activeItem === item.name
                ? styles.activeSidebarItemContainer
                : styles.sidebarItemContainer
            }
            key={index}
          >
            <div
              className={
                activeItem === item.name
                  ? styles.activeIcon
                  : styles.notActiveIcon
              }
            />
            <button
              className={
                activeItem === item.name
                  ? styles.activeSidebarItem
                  : styles.sidebarItem
              }
              onClick={() => navigateToPage(navigations[index])}
            >
              <img
                alt={item.name}
                src={activeItem === item.name ? item.activeIcon : item.icon}
              />
              <span>{item.name}</span>
            </button>
          </div>
        ))}
      </div>
      <div className={styles.logoutSection}>
        <img src="/ellipse-1@2x.png" alt="" className={styles.companyImage} />
        <p className={styles.companyText}>Popeyes</p>
        <p className={styles.brandText}>Brand</p>
        <div className={styles.logoutButton} onClick={onLogoutClick}>
          <img alt="" src="/logout.svg" />
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

{
  /* <div className={styles.sidebarItemContainer}>
          <div className={styles.notActiveIcon} />
          <button className={styles.sidebarItem}>
            <img alt="" src="/growth3.svg" />
            <span>Analytics</span>
          </button>
        </div>
        <div className={styles.sidebarItemContainer}>
          <div className={styles.notActiveIcon} />
          <button className={styles.sidebarItem}>
            <img alt="" src="/carprofile.svg" />
            <span>About Campaign</span>
          </button>
        </div>
        <div className={styles.sidebarItemContainer}>
          <div className={styles.notActiveIcon} />
          <button className={styles.sidebarItem}>
            <img alt="" src="/rocketlaunch.svg" />
            <span>Attribution</span>
          </button>
        </div>
        <div className={styles.activeSidebarItemContainer}>
          <div className={styles.activeIcon} />
          <button className={styles.activeSidebarItem}>
            <img alt="" src="/rocketlaunch1.svg" />
            <span>Drivers Information</span>
          </button>
        </div>
        <div className={styles.sidebarItemContainer}>
          <div className={styles.notActiveIcon} />
          <button className={styles.sidebarItem}>
            <img alt="" src="/arrowscounterclockwise.svg" />
            <span>Retargeting</span>
          </button>
        </div>
        <div className={styles.sidebarItemContainer}>
          <div className={styles.notActiveIcon} />
          <button className={styles.sidebarItem}>
            <img alt="" src="/dollar-coin.svg" />
            <span>Billing</span>
          </button>
        </div>
        <div className={styles.sidebarItemContainer}>
          <div className={styles.notActiveIcon} />
          <button className={styles.sidebarItem}>
            <img alt="" src="/setting.svg" />
            <span>Settings</span>
          </button>
        </div> */
}
