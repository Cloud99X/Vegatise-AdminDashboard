import React, { useState, useEffect, useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./ComingSoon.module.css";
import { collection, documentId, getDocs } from "firebase/firestore";
import firebaseApp from "./firebase";
import { getFirestore } from "firebase/firestore";
import PageLayout from "../components/page-layout/page-layout";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import axios from "axios";

const ComingSoon = () => {
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userWatching, setUserWatching] = useState("alldrivers");
  const [checkedRows, setCheckedRows] = useState([]);

  const handleCheckboxClick = (documentId) => {
    // Toggle the checked state for the clicked row
    setCheckedRows((prevCheckedRows) => {
      if (prevCheckedRows.includes(documentId)) {
        return prevCheckedRows.filter((id) => id !== documentId);
      } else {
        return [...prevCheckedRows, documentId];
      }
    });
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // const filteredPersonalInfo = personalInfo.filter((driver) => {
  //   const fullName = `${driver.name} ${driver.surname}`.toLowerCase();
  //   return fullName.includes(searchTerm.toLowerCase());
  // });

  // const fetchPersonalInfo = async () => {
  //   try {
  //     const db = getFirestore(firebaseApp);
  //     const personalInfoCollection = collection(db, "PersonalInfomation");
  //     const querySnapshot = await getDocs(personalInfoCollection);
  //     const storage = getStorage(firebaseApp);
  //     const personalInfoArray = querySnapshot.docs.map(async (doc) => {
  //       const data = doc.data();
  //       const folderRef = ref(storage, `/${doc.id}/Profile Photo`);
  //       const folderSnapshot = await listAll(folderRef);
  //       if (folderSnapshot.items.length > 0) {
  //         const firstImageRef = folderSnapshot.items[0];
  //         const profilePictureUrl = await getDownloadURL(firstImageRef);
  //         return {
  //           documentId: doc.id,
  //           profilePicture: profilePictureUrl,
  //           ...data,
  //         };
  //       } else {
  //         return {
  //           documentId: doc.id,
  //           profilePicture: "",
  //           ...data,
  //         };
  //       }
  //     });
  //     const resolvedPersonalInfoArray = await Promise.all(personalInfoArray);
  //     setPersonalInfo(resolvedPersonalInfoArray);
  //   } catch (error) {
  //     console.error("Error fetching personal information:", error);
  //   }
  // };
  //fetchPersonalInfo();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/drivers-data/all-drivers"
        );
        setPersonalInfo(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const onRectangleButtonClick = useCallback(() => {
    navigate("/driver-profile-detail");
  }, [navigate]);

  const onComponent1Click = useCallback(() => {
    navigate("/analytics");
  }, [navigate]);

  const onComponent11Click = useCallback(() => {
    navigate("/about-campaign");
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

  const onTableRowClick = useCallback(
    (documentId) => {
      navigate(`/driver-profile-detail/${documentId}`);
    },
    [navigate]
  );

  const formatDate = (timestamp) => {
    // Convert Firestore timestamp to milliseconds
    const milliseconds =
      timestamp._seconds * 1000 + Math.round(timestamp._nanoseconds / 1000000);
    // Create a new Date object
    const date = new Date(milliseconds);

    // Extract date components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    // Extract time components
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;

    return `${formattedDate} ${formattedTime}`;
  };

  return (
    <PageLayout activeSidebarItem="Drivers Information">
      {/* add the content that need to display right side of the side bar */}
      <section className={styles.pageLayout}>
        <div className={styles.driverListContainer}>
          <p className={styles.driverList}>Driver List</p>
          <p className={styles.manageYourDrivers}>
            Manage your Driver’s list easily and safely
          </p>
          <div className={styles.inputContainer}>
            <InputGroup className={styles.searchbar2Fig4} width="250px">
              <img alt="" src="/srch.png" className={styles.srch} />
              <Input
                variant="outline"
                placeholder="Search"
                size="sm"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </InputGroup>
            <Dropdown
              className={styles.searchbar2Fig41}
              overlay={
                <Menu>
                  {[].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["hover"]}
            >
              <Button onClick={(e) => e.preventDefault()}>
                <div style={{ position: "relative", right: "15%" }}>Filter</div>
                <img alt="" src="/Arrowdwn.png" className={styles.drpdwn} />
              </Button>
            </Dropdown>
            <Dropdown
              className={styles.searchbar2Fig42}
              overlay={
                <Menu>
                  {[].map((option, index) => (
                    <Menu.Item key={index}>
                      <a onClick={(e) => e.preventDefault()}>
                        {option.value || ""}
                      </a>
                    </Menu.Item>
                  ))}
                </Menu>
              }
              trigger={["hover"]}
            >
              <Button onClick={(e) => e.preventDefault()}>
                <div style={{ position: "relative", right: "8%" }}>
                  View all leads
                </div>
                <img
                  alt=""
                  src="/Arrowdwn.png"
                  className={styles.drpdwn}
                  style={{
                    height: "30%",
                    width: "13%",
                    left: "98%",
                    bottom: "59%",
                  }}
                />
              </Button>
            </Dropdown>
          </div>
          <table>
            <thead>
              <tr style={{ backgroundColor: "white" }}>
                <th className={styles.icontd}></th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th>Status</th>
                <th>Date Modified</th>
              </tr>
            </thead>
            <tbody>
              {personalInfo.map((driver, index) => (
                <tr
                  key={index}
                  onClick={() => onTableRowClick(driver.documentId)}
                  style={{ cursor: "pointer" }}
                  className={styles.hoverHighlight}
                >
                  <td className={styles.icontd}>
                    <img
                      className={styles.icon}
                      src={
                        checkedRows.includes(driver.documentId)
                          ? "/checked.svg"
                          : "/unchecked.svg"
                      }
                      onClick={(e) => {
                        e.stopPropagation(); // Prevent row click when clicking the checkbox
                        handleCheckboxClick(driver.documentId);
                      }}
                    />
                  </td>
                  <td
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                    }}
                  >
                    <img className={styles.icon} src={driver.profilePicture} />
                    {driver.name}
                  </td>
                  <td>{driver.email}</td>
                  <td>{driver.mobileNumber}</td>
                  <td>{driver.status}</td>
                  <td>
                    {driver.timestamp
                      ? `${formatDate(driver.timestamp)} 
                        `
                      : ""}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PageLayout>
    // <div className={styles.comingSoon}>
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
    //             src="/spanavatar9.svg"
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
    //     <div className={styles.driverList}>Driver List</div>
    //     <div
    //       className={styles.manageYourDrivers}
    //     >{`Manage your Driver’s list easily and safely `}</div>
    //     <InputGroup className={styles.searchbar2Fig4} width="250px" w="250px">
    //       <InputLeftElement
    //         pointerEvents="none"
    //         children={<SearchIcon color="gray.300" />}
    //       />
    //       <Input
    //         variant="outline"
    //         placeholder="Search"
    //         size="sm"
    //         value={searchTerm}
    //         onChange={handleSearchChange}
    //       />
    //     </InputGroup>
    //     <Dropdown
    //       className={styles.searchbar2Fig41}
    //       overlay={
    //         <Menu>
    //           {[].map((option, index) => (
    //             <Menu.Item key={index}>
    //               <a onClick={(e) => e.preventDefault()}>
    //                 {option.value || ""}
    //               </a>
    //             </Menu.Item>
    //           ))}
    //         </Menu>
    //       }
    //       trigger={["hover"]}
    //     >
    //       <Button onClick={(e) => e.preventDefault()}>
    //         {`Filter `}
    //         <DownOutlined />
    //       </Button>
    //     </Dropdown>
    //     <Dropdown
    //       className={styles.searchbar2Fig42}
    //       overlay={
    //         <Menu>
    //           {[].map((option, index) => (
    //             <Menu.Item key={index}>
    //               <a onClick={(e) => e.preventDefault()}>
    //                 {option.value || ""}
    //               </a>
    //             </Menu.Item>
    //           ))}
    //         </Menu>
    //       }
    //       trigger={["hover"]}
    //     >
    //       <Button onClick={(e) => e.preventDefault()}>
    //         {`View all leads `}
    //         <DownOutlined />
    //       </Button>
    //     </Dropdown>

    //     <table>
    //       <thead>
    //         <tr>
    //           <th className={styles.icontd}></th>
    //           <th>Name</th>
    //           <th>Email</th>
    //           <th>Phone number</th>
    //           <th>Status</th>
    //           <th>Date Modified</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         {filteredPersonalInfo.map((driver, index) => (
    //         <tr key={index} onClick={() => onTableRowClick(driver.documentId)}>
    //             <td className={styles.icontd}><img className={styles.icon} src="/vector53@2x.png" /></td>
    //             <td>{driver.name}</td>
    //             <td>{driver.email}</td>
    //             <td>{driver.mobileNumber}</td>
    //             <td>{driver.status}</td>
    //             <td>{driver.timestamp ? driver.timestamp.toDate().toString() : ""}</td>
    //           </tr>
    //         ))}
    //       </tbody>
    //     </table>

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
    //           <img className={styles.growthIcon} alt="" src="/growth3.svg" />
    //           <div className={styles.myGroup}>Analytics</div>
    //         </button>
    //       </div>
    //       <div className={styles.component1Wrapper}>
    //         <button className={styles.component1} onClick={onComponent11Click}>
    //           <img className={styles.growthIcon} alt="" src="/carprofile.svg" />
    //           <div className={styles.myGroup}>About campaign</div>
    //         </button>
    //       </div>
    //       <div className={styles.frameParent}>
    //         <button className={styles.rocketlaunchParent}>
    //           <img
    //             className={styles.growthIcon}
    //             alt=""
    //             src="/rocketlaunch3.svg"
    //           />
    //           <div className={styles.analytics}>Drivers information</div>
    //         </button>
    //         <div className={styles.frameChild13} />
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
    // <div className={styles.logoutParent}>
    //   <div className={styles.logout}>
    //     <div className={styles.theresaMillyParent}>
    //       <div className={styles.theresaMilly}>popeyes</div>
    //       <div className={styles.influencer}>Brand</div>
    //     </div>
    //     <button
    //       className={styles.logoutGroup}
    //       onClick={onFrameButton1Click}
    //     >
    //       <img className={styles.growthIcon} alt="" src="/logout.svg" />
    //       <div className={styles.logout1}>Logout</div>
    //     </button>
    //   </div>
    //   <img className={styles.groupChild} alt="" src="/ellipse-1@2x.png" />
    // </div>
    //   </div>
    // </div>
  );
};

export default ComingSoon;
