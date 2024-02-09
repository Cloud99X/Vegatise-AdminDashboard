import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Setting.module.css";
import PageLayout from "../components/page-layout/page-layout";

const Setting = () => {
  const navigate = useNavigate();

  const onButtonbutton2Click = useCallback(() => {
    window.open("ggggfgfg");
  }, []);

  const onButtonbutton3Click = useCallback(() => {
    window.open("vvbbvb");
  }, []);

  const onButtonbutton4Click = useCallback(() => {
    window.open("vcbb");
  }, []);

  const onButtonbutton5Click = useCallback(() => {
    window.open("bvbv");
  }, []);

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
    navigate("/billing");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <PageLayout activeSidebarItem="Settings">
      <div></div>
    </PageLayout>
    // <div className={styles.setting}>
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
    //             src="/spanavatar7.svg"
    //           />
    //           <div className={styles.divhidden}>
    //             <div className={styles.divtextXs}>
    //               <div className={styles.admin}>Admin</div>
    //             </div>
    //             <Link className={styles.divfontBold} to="/coming-soon">
    //               <b className={styles.abdurrahman}>Abdurrahman</b>
    //             </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <b className={styles.settings}>Settings</b>
    //     <div className={styles.divtabListParent}>
    //       <div className={styles.divtabList}>
    //         <nav className={styles.divtabNav}>
    //           <div className={styles.profile}>Profile</div>
    //         </nav>
    //         <nav className={styles.divtabNav1}>
    //           <div className={styles.preferences}>Preferences</div>
    //         </nav>
    //         <nav className={styles.divtabNav2}>
    //           <div className={styles.preferences}>Notification</div>
    //         </nav>
    //         <div className={styles.divtabNav3}>
    //           <div className={styles.integration}>Integration</div>
    //         </div>
    //         <div className={styles.divtabNav4}>
    //           <div className={styles.billing}>Billing</div>
    //         </div>
    //       </div>
    //       <div className={styles.general}>General</div>
    //       <div className={styles.divgrid}>
    //         <div className={styles.divfontSemibold}>
    //           <div className={styles.brandName}>Brand Name</div>
    //         </div>
    //         <Form className={styles.spaninputWrapper}>
    //           <Form.Control
    //             type="text"
    //             placeholder="Popeyes Louisiana Kitchen, Inc."
    //           />
    //         </Form>
    //       </div>
    //       <div className={styles.divgrid1}>
    //         <div className={styles.divfontSemibold}>
    //           <div className={styles.brandName}>Title</div>
    //         </div>
    //         <Form className={styles.spaninputWrapper}>
    //           <Form.Control
    //             type="text"
    //             placeholder="Fast-food restaurant company"
    //           />
    //         </Form>
    //       </div>
    //       <div className={styles.divgrid2}>
    //         <div className={styles.divfontSemibold}>
    //           <div className={styles.brandName}>Company logo</div>
    //         </div>
    //         <div className={styles.spanavatar}>
    //           <img
    //             className={styles.imgavatarImgIcon}
    //             alt=""
    //             src="/imgavatarimg4@2x.png"
    //           />
    //           <img
    //             className={styles.spanavatarChild}
    //             alt=""
    //             src="/ellipse-1@2x.png"
    //           />
    //         </div>
    //       </div>
    //       <button className={styles.buttonbutton}>
    //         <div className={styles.reset}>Reset</div>
    //       </button>
    //       <button className={styles.buttonbutton1}>
    //         <div className={styles.update}>Update</div>
    //       </button>
    //     </div>
    //     <div className={styles.divcard}>
    //       <div className={styles.divflexWrapper}>
    //         <div className={styles.divflex}>
    //           <div className={styles.divflex1}>
    //             <img
    //               className={styles.spanavatarIcon1}
    //               alt=""
    //               src="/spanavatar8.svg"
    //             />
    //             <div className={styles.popeyesParent}>
    //               <b className={styles.popeyes}>Popeyes</b>
    //               <div className={styles.louisianaKitchenInc}>
    //                 Louisiana Kitchen, Inc.
    //               </div>
    //             </div>
    //           </div>
    //           <div className={styles.divgrid3}>
    //             <div className={styles.div1}>
    //               <div className={styles.email}>Email</div>
    //               <div className={styles.iamfredimazeinfotechio}>
    //                 iamfred@imaze.infotech.io
    //               </div>
    //             </div>
    //             <div className={styles.div1}>
    //               <div className={styles.phone}>Phone</div>
    //               <div className={styles.div3}>+12-123-1234</div>
    //             </div>
    //             <div className={styles.div1}>
    //               <div className={styles.location}>Location</div>
    //               <div className={styles.colomboSriLanka}>
    //                 Colombo, Sri Lanka
    //               </div>
    //             </div>
    //             <div className={styles.div1}>
    //               <div className={styles.registeredDate}>Registered date</div>
    //               <div className={styles.div6}>17/11/1993</div>
    //             </div>
    //             <div className={styles.div1}>
    //               <div className={styles.title1}>Title</div>
    //               <div className={styles.colomboSriLanka}>
    //                 Fast-food restaurant company
    //               </div>
    //             </div>
    //             <div className={styles.div8}>
    //               <div className={styles.social}>Social</div>
    //               <div className={styles.divflex2}>
    //                 <button
    //                   className={styles.buttonbutton2}
    //                   onClick={onButtonbutton2Click}
    //                 >
    //                   <img className={styles.svgIcon1} alt="" src="/svg3.svg" />
    //                 </button>
    //                 <button
    //                   className={styles.buttonbutton3}
    //                   onClick={onButtonbutton3Click}
    //                 >
    //                   <img className={styles.svgIcon1} alt="" src="/svg4.svg" />
    //                 </button>
    //                 <button
    //                   className={styles.buttonbutton4}
    //                   onClick={onButtonbutton4Click}
    //                 >
    //                   <img className={styles.svgIcon1} alt="" src="/svg5.svg" />
    //                 </button>
    //                 <button
    //                   className={styles.buttonbutton5}
    //                   onClick={onButtonbutton5Click}
    //                 >
    //                   <img className={styles.svgIcon1} alt="" src="/svg6.svg" />
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
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
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent11Click}>
    //           <img className={styles.growthIcon} alt="" src="/carprofile.svg" />
    //           <div className={styles.myGroup1}>About campaign</div>
    //         </button>
    //       </div>
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent12Click}>
    //           <img
    //             className={styles.growthIcon}
    //             alt=""
    //             src="/rocketlaunch.svg"
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
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent14Click}>
    //           <img
    //             className={styles.growthIcon}
    //             alt=""
    //             src="/dollar-coin.svg"
    //           />
    //           <div className={styles.myGroup}>Billing</div>
    //         </button>
    //       </div>
    //       <div className={styles.frameParent}>
    //         <button className={styles.settingParent}>
    //           <img className={styles.growthIcon} alt="" src="/setting1.svg" />
    //           <div className={styles.analytics1}>Settings</div>
    //         </button>
    //         <div className={styles.frameChild} />
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

export default Setting;
