import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./AboutCampaign.module.css";
import PageLayout from "../components/page-layout/page-layout";

const AboutCampaign = () => {
  const navigate = useNavigate();

  const onComponent1Click = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  const onComponent11Click = useCallback(() => {
    navigate("/attribution");
  }, [navigate]);

  const onComponent12Click = useCallback(() => {
    navigate("/retargetting");
  }, [navigate]);

  const onComponent13Click = useCallback(() => {
    navigate("/billing");
  }, [navigate]);

  const onComponent14Click = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <PageLayout activeSidebarItem="About Campaign">
      
      {/* add the content that need to display right side of the side bar */}
      <section className={styles.pageLayout}>
        
      </section>
    </PageLayout>
    // <div className={styles.aboutCampaign}>
    //   <div className={styles.headerheaderParent}>
    //     <div className={styles.headerheader}>
    //       <img
    //         className={styles.divheaderWrapperIcon}
    //         alt=""
    //         src="/divheaderwrapper.svg"
    //       />
    //       <div className={styles.divheaderAction}>
    //         <div className={styles.divheaderActionItem} />
    //         <div className={styles.divheaderActionItem}>
    //           <div className={styles.spanbadgeWrapper}>
    //             <img className={styles.svgIcon} alt="" src="/svg.svg" />
    //             <div className={styles.spanbadgeDot} />
    //           </div>
    //         </div>
    //         <img className={styles.divIcon} alt="" src="/div.svg" />
    //         <div className={styles.divheaderActionItem1}>
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src="/spanavatar10.svg"
    //           />
    //           <div className={styles.divhidden}>
    //             <div className={styles.divtextXs}>
    //               <div className={styles.admin}>Admin</div>
    //             </div>
    //             <div className={styles.divfontBold}>
    //               <b className={styles.abdurrahman}>Abdurrahman</b>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <b className={styles.thisFeatureIn}>
    //       This feature in under research and development
    //     </b>
    //     <div className={styles.rectangleParent}>
    //       <div className={styles.groupChild} />
    //       <div className={styles.rectangleWrapper}>
    //         <div className={styles.groupItem} />
    //       </div>
    //       <img className={styles.image57Icon} alt="" src="/image-57@2x.png" />
    //       <div className={styles.address1Parent}>
    //         <div className={styles.address1}>
    //           <p className={styles.mainRoadAthidiya}>
    //             143, Main Road, Athidiya, Dehiwala,
    //           </p>
    //           <p className={styles.mainRoadAthidiya}>Colombo, Western, 10350</p>
    //         </div>
    //         <div className={styles.time1}>10.31</div>
    //       </div>
    //       <div className={styles.address2Parent}>
    //         <div className={styles.address1}>
    //           <p className={styles.mainRoadAthidiya}>
    //             143, Main Road, Athidiya, Dehiwala,
    //           </p>
    //           <p className={styles.mainRoadAthidiya}>Colombo, Western, 10350</p>
    //         </div>
    //         <div className={styles.time1}>10.45</div>
    //       </div>
    //       <div className={styles.p}>
    //         <b className={styles.vehicle}>Tuk</b>
    //       </div>
    //       <div className={styles.duration}>duration</div>
    //       <div className={styles.distance}>distance</div>
    //     </div>

    //   </div>
    //   <div className={styles.navbar}>
    //     <div className={styles.divlogo}>
    //       <div className={styles.logo}>
    //         <img
    //           className={styles.asset84xIcon}
    //           alt=""
    //           src="/asset-84x@2x.png"
    //         />
    //       </div>
    //     </div>
    //     <div className={styles.menuItem}>
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent1Click}>
    //           <img className={styles.growthIcon} alt="" src="/growth1.svg" />
    //           <div className={styles.myGroup}>Analytics</div>
    //         </button>
    //       </div>
    //       <div className={styles.frameParent}>
    //         <button className={styles.carprofileParent}>
    //           <img
    //             className={styles.growthIcon}
    //             alt=""
    //             src="/carprofile1.svg"
    //           />
    //           <div className={styles.analytics}>About campaign</div>
    //         </button>
    //         <div className={styles.frameChild} />
    //       </div>
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent11Click}>
    //           <img
    //             className={styles.growthIcon}
    //             alt=""
    //             src="/rocketlaunch.svg"
    //           />
    //           <div className={styles.myGroup}>Attribution</div>
    //         </button>
    //       </div>
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent12Click}>
    //           <img
    //             className={styles.growthIcon}
    //             alt=""
    //             src="/arrowscounterclockwise.svg"
    //           />
    //           <div className={styles.myGroup}>Retargeting</div>
    //         </button>
    //       </div>
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent13Click}>
    //           <img
    //             className={styles.growthIcon}
    //             alt=""
    //             src="/dollar-coin.svg"
    //           />
    //           <div className={styles.myGroup}>Billing</div>
    //         </button>
    //       </div>
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent14Click}>
    //           <img className={styles.growthIcon} alt="" src="/setting.svg" />
    //           <div className={styles.myGroup}>Settings</div>
    //         </button>
    //       </div>
    //     </div>
    //     <div className={styles.logoutParent}>
    //       <div className={styles.logout}>
    //         <div className={styles.theresaMillyParent}>
    //           <div className={styles.theresaMilly}>popeyes</div>
    //           <div className={styles.influencer}>Brand</div>
    //         </div>
    //         <button
    //           className={styles.logoutGroup}
    //           onClick={onFrameButton1Click}
    //         >
    //           <img className={styles.growthIcon} alt="" src="/logout.svg" />
    //           <div className={styles.logout1}>Logout</div>
    //         </button>
    //       </div>
    //       <img className={styles.groupChildp} alt="" src="/ellipse-1@2x.png" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default AboutCampaign;
