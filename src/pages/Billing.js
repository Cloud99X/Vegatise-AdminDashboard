import { useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Billing.module.css";
import PageLayout from "../components/page-layout/page-layout";

const Billing = () => {
  const navigate = useNavigate();

  const onComponent1Click = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  const onComponent11Click = useCallback(() => {
    navigate("/about-campaign");
  }, [navigate]);

  const onComponent12Click = useCallback(() => {
    navigate("/attribution");
  }, [navigate]);

  const onComponent13Click = useCallback(() => {
    navigate("/retargetting");
  }, [navigate]);

  const onComponent14Click = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <PageLayout activeSidebarItem="Billing">
      <div className={styles.container}>
        <p className={styles.text}>
          This feature is under research and development
        </p>
        <img alt="" src="/DevImg.png" />
      </div>
    </PageLayout>
    // <div className={styles.billing}>
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
    //             src="/spanavatar5.svg"
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
    //     <Link className={styles.imageVector} to="/billing-invoice">
    //       <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
    //       <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
    //       <img className={styles.vectorIcon2} alt="" src="/vector4.svg" />
    //       <img className={styles.vectorIcon3} alt="" src="/vector5.svg" />
    //       <img className={styles.vectorIcon4} alt="" src="/vector6.svg" />
    //       <img className={styles.vectorIcon5} alt="" src="/vector7.svg" />
    //       <img className={styles.vectorIcon6} alt="" src="/vector8.svg" />
    //       <img className={styles.vectorIcon7} alt="" src="/vector9.svg" />
    //       <img className={styles.vectorIcon8} alt="" src="/vector10.svg" />
    //       <img className={styles.vectorIcon9} alt="" src="/vector11.svg" />
    //       <img className={styles.vectorIcon10} alt="" src="/vector12.svg" />
    //       <img className={styles.vectorIcon11} alt="" src="/vector13.svg" />
    //       <img className={styles.vectorIcon12} alt="" src="/vector14.svg" />
    //       <img className={styles.vectorIcon13} alt="" src="/vector15.svg" />
    //       <img className={styles.vectorIcon14} alt="" src="/vector16.svg" />
    //       <img className={styles.vectorIcon15} alt="" src="/vector17.svg" />
    //       <img className={styles.vectorIcon16} alt="" src="/vector18.svg" />
    //       <img className={styles.vectorIcon17} alt="" src="/vector19.svg" />
    //       <img className={styles.vectorIcon18} alt="" src="/vector20.svg" />
    //       <img className={styles.vectorIcon19} alt="" src="/vector21.svg" />
    //       <img className={styles.vectorIcon20} alt="" src="/vector22.svg" />
    //       <img className={styles.vectorIcon21} alt="" src="/vector23.svg" />
    //       <img className={styles.vectorIcon22} alt="" src="/vector24.svg" />
    //       <img className={styles.vectorIcon23} alt="" src="/vector25.svg" />
    //       <img className={styles.vectorIcon24} alt="" src="/vector26.svg" />
    //       <img className={styles.vectorIcon25} alt="" src="/vector27.svg" />
    //       <img className={styles.vectorIcon26} alt="" src="/vector28.svg" />
    //       <img className={styles.vectorIcon27} alt="" src="/vector29.svg" />
    //       <img className={styles.vectorIcon28} alt="" src="/vector30.svg" />
    //       <img className={styles.vectorIcon29} alt="" src="/vector31.svg" />
    //       <img className={styles.vectorIcon30} alt="" src="/vector32.svg" />
    //       <img className={styles.vectorIcon31} alt="" src="/vector33.svg" />
    //       <img className={styles.vectorIcon32} alt="" src="/vector34.svg" />
    //       <img className={styles.vectorIcon33} alt="" src="/vector35.svg" />
    //       <img className={styles.vectorIcon34} alt="" src="/vector36.svg" />
    //       <img className={styles.vectorIcon35} alt="" src="/vector37.svg" />
    //       <img className={styles.vectorIcon36} alt="" src="/vector38.svg" />
    //       <img className={styles.vectorIcon37} alt="" src="/vector39.svg" />
    //       <img className={styles.vectorIcon38} alt="" src="/vector40.svg" />
    //       <img className={styles.vectorIcon39} alt="" src="/vector41.svg" />
    //       <img className={styles.vectorIcon40} alt="" src="/vector42.svg" />
    //       <img className={styles.vectorIcon41} alt="" src="/vector43.svg" />
    //       <img className={styles.vectorIcon42} alt="" src="/vector44.svg" />
    //       <img className={styles.vectorIcon43} alt="" src="/vector45.svg" />
    //       <img className={styles.vectorIcon44} alt="" src="/vector46.svg" />
    //       <img className={styles.vectorIcon45} alt="" src="/vector47.svg" />
    //       <img className={styles.vectorIcon46} alt="" src="/vector48.svg" />
    //       <img className={styles.vectorIcon47} alt="" src="/vector49.svg" />
    //       <img className={styles.vectorIcon48} alt="" src="/vector50.svg" />
    //       <img className={styles.vectorIcon49} alt="" src="/vector51.svg" />
    //       <img className={styles.vectorIcon50} alt="" src="/vector52.svg" />
    //     </Link>
    //     <div className={styles.getExclusiveEarlyAccessToParent}>
    //       <div className={styles.getExclusiveEarly}>
    //         Get exclusive early access to our upcoming features! Join the beta
    //         test now and share your feedback to shape the future of our product.
    //       </div>
    //       <a className={styles.requestAccess}>Request Access</a>
    //       <img
    //         className={styles.image7AdobeExpress1}
    //         alt=""
    //         src="/image-7-adobe-express-1.svg"
    //       />
    //     </div>
    //     <div className={styles.cantWait}>Can’t wait ?</div>
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
    //           <img className={styles.growthIcon} alt="" src="/growth2.svg" />
    //           <div className={styles.myGroup}>Analytics</div>
    //         </button>
    //       </div>
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent11Click}>
    //           <img className={styles.growthIcon} alt="" src="/carprofile.svg" />
    //           <div className={styles.myGroup}>About campaign</div>
    //         </button>
    //       </div>
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent12Click}>
    //           <img
    //             className={styles.growthIcon}
    //             alt=""
    //             src="/rocketlaunch2.svg"
    //           />
    //           <div className={styles.myGroup}>Attribution</div>
    //         </button>
    //       </div>
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent13Click}>
    //           <img
    //             className={styles.growthIcon}
    //             alt=""
    //             src="/arrowscounterclockwise.svg"
    //           />
    //           <div className={styles.myGroup}>Retargeting</div>
    //         </button>
    //       </div>
    //       <div className={styles.frameParent}>
    //         <button className={styles.dollarCoinParent}>
    //           <img
    //             className={styles.growthIcon}
    //             alt=""
    //             src="/dollar-coin1.svg"
    //           />
    //           <div className={styles.analytics1}>Billing</div>
    //         </button>
    //         <div className={styles.frameChild} />
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
    //       <img className={styles.groupChild} alt="" src="/ellipse-1@2x.png" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Billing;
