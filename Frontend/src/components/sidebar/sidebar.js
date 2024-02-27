import React, { useCallback } from "react";
import styles from "./sidebar.module.css";
import { useNavigate } from "react-router-dom";
import GrowthIcon from "../../icons/growth3.svg";
import GrowthIconActive from "../../icons/growth.svg";
import CarIcon from "../../icons/carprofile.svg";
import CarIconActive from "../../icons/carprofile1.svg";
import RocketIcon from "../../icons/rocketlaunch.svg";
import RocketIconActive from "../../icons/rocketlaunch1.svg";
import RefreshIcon from "../../icons/arrowscounterclockwise.svg";
import RefreshIconActive from "../../icons/arrowscounterclockwise1.svg";
import DollerIcon from "../../icons/dollar-coin.svg";
import DollerIconActive from "../../icons/dollar-coin1.svg";
import SettingIcon from "../../icons/setting.svg";
import SettingIconActive from "../../icons/setting1.svg";

const Sidebar = ({ activeItem }) => {
  const navigate = useNavigate();

  const navigateToPage = (page) => {
    navigate(`/${page}`);
  };

  const sidebarItems = [
    {
      name: "Analytics",
      icon: GrowthIcon,
      activeIcon: GrowthIconActive,
    },
    {
      name: "About Campaign",
      icon: CarIcon,
      activeIcon: CarIconActive,
    },

    {
      name: "Drivers Information",
      icon: RocketIcon,
      activeIcon: RocketIconActive,
    },
    {
      name: "Attribution",
      icon: RocketIcon,
      activeIcon: RocketIconActive,
    },
    {
      name: "Retargeting",
      icon: RefreshIcon,
      activeIcon: RefreshIconActive,
    },
    {
      name: "Billing",
      icon: DollerIcon,
      activeIcon: DollerIconActive,
    },
    {
      name: "Settings",
      icon: SettingIcon,
      activeIcon: SettingIconActive,
    },
  ];

  //
  const navigations = [
    "analytics",
    "about-campaign",
    "coming-soon",
    "attribution",
    "retargetting",
    "billing",
    "setting",
  ];

  const onLogoutClick = () => {
    navigate("/log-in");
  };

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
        <img src="/logo.png" alt="" className={styles.companyImage} />
        <p className={styles.companyText}>Abdurrahman</p>
        <p className={styles.brandText}>Admin</p>
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
