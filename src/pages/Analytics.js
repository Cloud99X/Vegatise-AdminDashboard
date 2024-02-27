// import { useCallback } from "react";
import React, { useState, useEffect, useCallback } from "react";
import "antd/dist/antd.min.css";
// import { Switch, FormControlLabel, Radio } from "@mui/material";
// import { Dropdown, Menu, Button } from "antd";
// import { RightOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Analytics.module.css";
import PageLayout from "../components/page-layout/page-layout";
import plusIcon from "../icons/plusIcon.png";


import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";



const Analytics = () => {

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const onComponent1Click = useCallback(() => {
    navigate("/about-campaign");
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
    <PageLayout activeSidebarItem="Analytics">
      <section className={styles.pageLayout}>
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
        <div className={styles.bodyContainer}>
          <span className={styles.title}>Analytics</span>
          <button className={styles.newCampaignContainer}>
            <img alt="plusIcon" src={plusIcon} className={styles.plusIcon} />
            <span className={styles.title2}>New Campaign</span>
          </button>
          <span className={styles.title3}>Campaign List</span>
          <span className={styles.title4}>View and manage campaign analytics </span>

          <div className={styles.inputContainer}>
            <InputGroup className={styles.searchbar2Fig4} width="250px">
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="#000000" />}
              />
              <Input
                variant="outline"
                placeholder="Search"
                size="sm"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </InputGroup>
          </div>
        </div>
      </section>
    </PageLayout>

    // <div className={styles.analytics}>
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
    //             src="/spanavatar.svg"
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
    //     <div
    //       className={styles.campaign12032023}
    //     >{`Campaign : 12/03/2023 - 13/05/2023  `}</div>
    //     <h1 className={styles.analytics1}>Analytics</h1>
    //     <div className={styles.mapsicleMapParent}>
    //       <img
    //         className={styles.mapsicleMapIcon}
    //         alt=""
    //         src="/mapsicle-map@2x.png"
    //       />
    //       <div className={styles.impressionMap}>Impression map</div>
    //       <div className={styles.groupParent}>
    //         <FormControlLabel
    //           className={styles.groupChild}
    //           label="Campaign zone"
    //           control={<Switch color="error" />}
    //         />
    //         <FormControlLabel
    //           className={styles.groupItem}
    //           label="Heat map"
    //           control={<Radio color="error" />}
    //         />
    //         <FormControlLabel
    //           className={styles.groupInner}
    //           label="Route map"
    //           control={<Radio color="error" />}
    //         />
    //       </div>
    //       <img className={styles.vectorIcon} alt="" src="/vector.svg" />
    //     </div>
    //     <div className={styles.impressionStatesParent}>
    //       <div className={styles.impressionStates}>Impression states</div>
    //       <div className={styles.la9oa7d1}>
    //         <div className={styles.svgjsg10605}>
    //           <img
    //             className={styles.svgjsline10610Icon}
    //             alt=""
    //             src="/svgjsline10610.svg"
    //           />
    //           <div className={styles.svgjsg10638}>
    //             <div className={styles.svgjsg10639}>
    //               <div className={styles.svgjstext10641}>01 Jan</div>
    //               <div className={styles.svgjstext10644}>02 Jan</div>
    //               <div className={styles.svgjstext10647}>03 Jan</div>
    //               <div className={styles.svgjstext10650}>04 Jan</div>
    //               <div className={styles.svgjstext10653}>05 Jan</div>
    //               <div className={styles.svgjstext10656}>06 Jan</div>
    //               <div className={styles.svgjstext10659}>07 Jan</div>
    //               <div className={styles.svgjstext10662}>08 Jan</div>
    //               <div className={styles.svgjstext10665}>09 Jan</div>
    //               <div className={styles.svgjstext10668}>10 Jan</div>
    //               <div className={styles.svgjstext10671}>11 Jan</div>
    //               <div className={styles.svgjstext10674}>12 Jan</div>
    //             </div>
    //           </div>
    //           <img
    //             className={styles.svgjsg10626Icon}
    //             alt=""
    //             src="/svgjsg10626.svg"
    //           />
    //           <img
    //             className={styles.svgjsg10613Icon}
    //             alt=""
    //             src="/svgjsg10613.svg"
    //           />
    //           <img
    //             className={styles.svgjsg10629Icon}
    //             alt=""
    //             src="/svgjsg10629.svg"
    //           />
    //           <img
    //             className={styles.svgjsline10697Icon}
    //             alt=""
    //             src="/svgjsline10697.svg"
    //           />
    //           <img
    //             className={styles.svgjsline10698Icon}
    //             alt=""
    //             src="/svgjsline10698.svg"
    //           />
    //         </div>
    //         <img
    //           className={styles.svgjsrect10609Icon}
    //           alt=""
    //           src="/svgjsline10698.svg"
    //         />
    //         <div className={styles.svgjsg10677}>
    //           <div className={styles.svgjsg10639}>
    //             <div className={styles.svgjstext10680}>100</div>
    //             <div className={styles.svgjstext10683}>80</div>
    //             <div className={styles.svgjstext10686}>60</div>
    //             <div className={styles.svgjstext10689}>40</div>
    //             <div className={styles.svgjstext10692}>20</div>
    //             <div className={styles.svgjstext10695}>0</div>
    //           </div>
    //         </div>
    //         <div className={styles.janParent}>
    //           <div className={styles.jan}>05 Jan</div>
    //           <b className={styles.b}>105</b>
    //           <b className={styles.b1}>60</b>
    //           <b className={styles.b2}>45</b>
    //           <div className={styles.totalImpressionsParent}>
    //             <div className={styles.totalImpressions}>Total impressions</div>
    //             <div className={styles.radio}>
    //               <div className={styles.signedByBaseRadioEnable} />
    //               <img
    //                 className={styles.selectedIcon}
    //                 alt=""
    //                 src="/selected.svg"
    //               />
    //             </div>
    //           </div>
    //           <div className={styles.peakImpressionsParent}>
    //             <div className={styles.peakImpressions}>Peak Impressions</div>
    //             <div className={styles.radio1}>
    //               <div className={styles.signedByBaseRadioEnable} />
    //               <img
    //                 className={styles.selectedIcon}
    //                 alt=""
    //                 src="/selected1.svg"
    //               />
    //             </div>
    //           </div>
    //           <div className={styles.offPeakImpressionsParent}>
    //             <div className={styles.offPeakImpressions}>
    //               Off Peak Impressions
    //             </div>
    //             <div className={styles.radio2}>
    //               <div className={styles.signedByBaseRadioEnable} />
    //               <img
    //                 className={styles.selectedIcon}
    //                 alt=""
    //                 src="/selected2.svg"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //         <div className={styles.la9oa7d1Child} />
    //       </div>
    //       <div className={styles.groupContainer}>
    //         <div className={styles.peakImpressionsGroup}>
    //           <div className={styles.peakImpressions}>Peak Impressions</div>
    //           <div className={styles.radio1}>
    //             <div className={styles.signedByBaseRadioEnable} />
    //             <img
    //               className={styles.selectedIcon}
    //               alt=""
    //               src="/selected1.svg"
    //             />
    //           </div>
    //         </div>
    //         <div className={styles.totalImpressionsGroup}>
    //           <div className={styles.totalImpressions}>Total impressions</div>
    //           <div className={styles.radio}>
    //             <div className={styles.signedByBaseRadioEnable} />
    //             <img
    //               className={styles.selectedIcon}
    //               alt=""
    //               src="/selected.svg"
    //             />
    //           </div>
    //         </div>
    //         <div className={styles.offPeakImpressionsGroup}>
    //           <div className={styles.offPeakImpressions1}>
    //             Off Peak Impressions
    //           </div>
    //           <div className={styles.radio2}>
    //             <div className={styles.signedByBaseRadioEnable} />
    //             <img
    //               className={styles.selectedIcon}
    //               alt=""
    //               src="/selected2.svg"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className={styles.menuItemParent}>
    //         <Dropdown
    //           className={styles.menuItem}
    //           overlay={
    //             <Menu>
    //               {[
    //                 { value: "1" },
    //                 { value: "2" },
    //                 { value: "3" },
    //                 { value: "4" },
    //                 { value: "5" },
    //                 { value: "6" },
    //                 { value: "7" },
    //                 { value: "8" },
    //                 { value: "9" },
    //                 { value: "10" },
    //                 { value: "11" },
    //                 { value: "12" },
    //                 { value: "13" },
    //                 { value: "14" },
    //                 { value: "15" },
    //                 { value: "16" },
    //                 { value: "17" },
    //                 { value: "18" },
    //                 { value: "19" },
    //                 { value: "20" },
    //                 { value: "21" },
    //                 { value: "22" },
    //                 { value: "23" },
    //                 { value: "24" },
    //                 { value: "25" },
    //                 { value: "26" },
    //                 { value: "27" },
    //                 { value: "28" },
    //                 { value: "29" },
    //                 { value: "30" },
    //                 { value: "31" },
    //               ].map((option, index) => (
    //                 <Menu.Item key={index}>
    //                   <a onClick={(e) => e.preventDefault()}>
    //                     {option.value || ""}
    //                   </a>
    //                 </Menu.Item>
    //               ))}
    //             </Menu>
    //           }
    //           trigger={["hover"]}
    //         >
    //           <Button onClick={(e) => e.preventDefault()}>
    //             {`Date `}
    //             <RightOutlined />
    //           </Button>
    //         </Dropdown>
    //         <Dropdown
    //           className={styles.menuItem1}
    //           overlay={
    //             <Menu>
    //               {[
    //                 { value: "1" },
    //                 { value: "2" },
    //                 { value: "3" },
    //                 { value: "4" },
    //               ].map((option, index) => (
    //                 <Menu.Item key={index}>
    //                   <a onClick={(e) => e.preventDefault()}>
    //                     {option.value || ""}
    //                   </a>
    //                 </Menu.Item>
    //               ))}
    //             </Menu>
    //           }
    //           trigger={["hover"]}
    //         >
    //           <Button onClick={(e) => e.preventDefault()}>
    //             {`week `}
    //             <RightOutlined />
    //           </Button>
    //         </Dropdown>
    //         <Dropdown
    //           className={styles.menuItem2}
    //           overlay={
    //             <Menu>
    //               {[
    //                 { value: "January" },
    //                 { value: "February" },
    //                 { value: "March" },
    //                 { value: "April" },
    //                 { value: "May" },
    //                 { value: "June" },
    //                 { value: "July" },
    //                 { value: "August" },
    //                 { value: "September" },
    //                 { value: "October" },
    //                 { value: "November" },
    //                 { value: "December" },
    //               ].map((option, index) => (
    //                 <Menu.Item key={index}>
    //                   <a onClick={(e) => e.preventDefault()}>
    //                     {option.value || ""}
    //                   </a>
    //                 </Menu.Item>
    //               ))}
    //             </Menu>
    //           }
    //           trigger={["hover"]}
    //         >
    //           <Button onClick={(e) => e.preventDefault()}>
    //             {`Month `}
    //             <RightOutlined />
    //           </Button>
    //         </Dropdown>
    //       </div>
    //     </div>
    //     <div className={styles.todayImpressionsParent}>
    //       <div className={styles.todayImpressions}>Today Impressions</div>
    //       <div className={styles.analytics2}>
    //         <div className={styles.cardnumbers}>
    //           <div className={styles.parent}>
    //             <b className={styles.b3}>1508</b>
    //             <div className={styles.totalChannels}>Total impressions</div>
    //           </div>
    //           <img
    //             className={styles.cardnumbersChild}
    //             alt=""
    //             src="/group-3.svg"
    //           />
    //         </div>
    //         <div className={styles.cardnumbers}>
    //           <div className={styles.parent}>
    //             <b className={styles.b3}>125</b>
    //             <div className={styles.totalChannels}>Peak impressions</div>
    //           </div>
    //           <img
    //             className={styles.cardnumbersChild}
    //             alt=""
    //             src="/group-31.svg"
    //           />
    //         </div>
    //         <div className={styles.cardnumbers}>
    //           <div className={styles.parent}>
    //             <b className={styles.b3}>789</b>
    //             <div className={styles.totalChannels}>off Peak impressions</div>
    //           </div>
    //           <img
    //             className={styles.cardnumbersChild}
    //             alt=""
    //             src="/group-32.svg"
    //           />
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
    //     <div className={styles.menuItem3}>
    //       <div className={styles.frameParent}>
    //         <button className={styles.growthParent}>
    //           <img className={styles.growthIcon} alt="" src="/growth.svg" />
    //           <div className={styles.analytics3}>Analytics</div>
    //         </button>
    //         <div className={styles.frameChild} />
    //       </div>
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent1Click}>
    //           <img className={styles.growthIcon} alt="" src="/carprofile.svg" />
    //           <div className={styles.myGroup}>About campaign</div>
    //         </button>
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
    //           <button className={styles.logout1}>
    //             <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
    //           </button>
    //           <div className={styles.logout2}>Logout</div>
    //         </button>
    //       </div>
    //       <img
    //         className={styles.componentChild}
    //         alt=""
    //         src="/ellipse-1@2x.png"
    //       />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Analytics;
