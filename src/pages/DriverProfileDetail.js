import { useCallback } from "react";
import { Input } from "@chakra-ui/react";
import styles from "./DriverProfileDetail.module.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "./firebase";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import PageLayout from "../components/page-layout/page-layout";

const DriverProfileDetail = () => {
  const { documentId } = useParams();
  const navigate = useNavigate();
  const [driverInfo, setDriverInfo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDriverInfo, setEditedDriverInfo] = useState(null);
  const [status1, setStatus1] = useState("In Review");
  const [status2, setStatus2] = useState("In Review");
  const [status3, setStatus3] = useState("In Review");
  const [image, setImage] = useState("/component-473.svg");
  //
  const [DLStatus, setDLStatus] = useState("Pending");
  const [ILStatus, setILStatus] = useState("Pending");
  const [NICStatus, setNICStatus] = useState("Pending");
  const [vehicleImageStatus, setVehicleImageStatus] = useState("Pending");
  const [currentTab, setCurrentTab] = useState("Personal Info");

  const changeCurrentTab = (tab) => {
    setCurrentTab(tab);
  };
  const handleDLStatusChange = (newStatus) => {
    setDLStatus(newStatus);
  };

  const handleILStatusChange = (newStatus) => {
    setILStatus(newStatus);
  };

  const handleNICStatusChange = (newStatus) => {
    setNICStatus(newStatus);
  };

  const handleVehicleImageStatusChange = (newStatus) => {
    setVehicleImageStatus(newStatus);
  };

  const getIconForStatus = (status) => {
    switch (status) {
      case "Approved":
        return "471"; // Use the appropriate component number for the 'Approved' status
      case "Rejected":
        return "472"; // Use the appropriate component number for the 'Rejected' status
      case "In Review":
        return "473"; // Use the appropriate component number for the 'In Review' status
      case "Pending":
        return "474"; // Use the appropriate component number for the 'In Review' status
      default:
        return ""; // Return an empty string or default icon number for other cases
    }
  };

  //

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

  const toggleEdit = () => {
    setIsEditing((prev) => !prev);
    if (!isEditing) {
      setEditedDriverInfo({ ...driverInfo });
    }
  };

  const handleEditChange = (field, value) => {
    setEditedDriverInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handleApprovedClick1 = () => {
    setStatus1("Approved"); // Update status state to 'Approved'
  };

  const handleRejectClick1 = () => {
    setStatus1("Rejected"); // Update status state to 'Rejected'
  };

  const handleApprovedClick2 = () => {
    setStatus2("Approved");
  };

  const handleRejectClick2 = () => {
    setStatus2("Rejected");
  };

  const handleApprovedClick3 = () => {
    setStatus3("Approved");
  };

  const handleRejectClick3 = () => {
    setStatus3("Rejected");
  };

  useEffect(() => {
    const fetchDriverInfo = async () => {
      try {
        const db = getFirestore(firebaseApp);

        const personalInfoCollection = collection(db, "PersonalInfomation");
        const personalInfoDocRef = doc(personalInfoCollection, documentId);
        const personalInfoDocSnapshot = await getDoc(personalInfoDocRef);

        const nicNumberCollection = collection(db, "NIC Number");
        const nicNumberDocRef = doc(nicNumberCollection, documentId);
        const nicNumberDocSnapshot = await getDoc(nicNumberDocRef);

        const addressAndRoutesCollection = collection(db, "AddressAndRoutes");
        const addressAndRoutesDocRef = doc(
          addressAndRoutesCollection,
          documentId
        );
        const addressAndRoutesDocSnapshot = await getDoc(
          addressAndRoutesDocRef
        );

        if (
          personalInfoDocSnapshot.exists() &&
          nicNumberDocSnapshot.exists() &&
          addressAndRoutesDocSnapshot.exists()
        ) {
          const personalInfoData = personalInfoDocSnapshot.data();
          const nicNumberData = nicNumberDocSnapshot.data();
          const addressAndRoutesData = addressAndRoutesDocSnapshot.data();

          const mergedData = {
            ...personalInfoData,
            ...nicNumberData,
            ...addressAndRoutesData,
          };

          setDriverInfo(mergedData);
        } else {
          console.error("Document not found for ID:", documentId);
          setDriverInfo(null);
        }
      } catch (error) {
        console.error(
          "Error fetching driver information for ID:",
          documentId,
          error
        );
      }
    };

    fetchDriverInfo();
  }, [documentId]);

  const saveChanges = async () => {
    try {
      const db = getFirestore(firebaseApp);

      const personalInfoCollection = collection(db, "PersonalInfomation");
      const personalInfoDocRef = doc(personalInfoCollection, documentId);
      const timestamp = new Date();

      const nicNumberCollection = collection(db, "NIC Number");
      const nicNumberDocRef = doc(nicNumberCollection, documentId);

      const addressAndRoutesCollection = collection(db, "AddressAndRoutes");
      const addressAndRoutesDocRef = doc(
        addressAndRoutesCollection,
        documentId
      );

      await updateDoc(personalInfoDocRef, {
        name: editedDriverInfo.name,
        email: editedDriverInfo.email,
        mobileNumber: editedDriverInfo.mobileNumber,
        dateOfBirth: editedDriverInfo.dateOfBirth,
        timestamp: timestamp,
      });

      await updateDoc(nicNumberDocRef, {
        NICNumber: editedDriverInfo.NICNumber,
      });

      await updateDoc(addressAndRoutesDocRef, {
        Add1: editedDriverInfo.Add1,
        Add2: editedDriverInfo.Add2,
        AvgKM: editedDriverInfo.AvgKM,
      });

      setDriverInfo(editedDriverInfo);

      setIsEditing(false);
      window.alert("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
      window.alert("Error saving changes. Please try again.");
    }
  };
  //
  const onDLImagesButtonClick = useCallback(async () => {
    try {
      const storage = getStorage();
      const nicImagesFolder = `${documentId}/Driving Lisenceeee`;
      const folderRef = ref(storage, nicImagesFolder);
      const items = await listAll(folderRef);
      if (items && items.items.length > 0) {
        const firstItemUrl = await getDownloadURL(items.items[0]);
        window.open(firstItemUrl, "_blank");
      } else {
        console.error("No items found in the folder.");
      }
    } catch (error) {
      console.error("Error retrieving images:", error);
    }
  }, [documentId]);
  //
  const onNICImagesButtonClick = useCallback(async () => {
    try {
      const storage = getStorage();
      const nicImagesFolder = `${documentId}/NIC Images`;
      const folderRef = ref(storage, nicImagesFolder);
      const items = await listAll(folderRef);
      if (items && items.items.length > 0) {
        const firstItemUrl = await getDownloadURL(items.items[0]);
        window.open(firstItemUrl, "_blank");
      } else {
        console.error("No items found in the folder.");
      }
    } catch (error) {
      console.error("Error retrieving images:", error);
    }
  }, [documentId]);

  const onInsuranceImagesButtonClick = useCallback(async () => {
    try {
      const storage = getStorage();
      const nicImagesFolder = `${documentId}/vehicle Insurance Documents`;
      const folderRef = ref(storage, nicImagesFolder);
      const items = await listAll(folderRef);
      if (items && items.items.length > 0) {
        const firstItemUrl = await getDownloadURL(items.items[0]);
        window.open(firstItemUrl, "_blank");
      } else {
        console.error("No items found in the folder.");
      }
    } catch (error) {
      console.error("Error retrieving images:", error);
    }
  }, [documentId]);

  const onVehicleImagesButtonClick = useCallback(async () => {
    try {
      const storage = getStorage();
      const nicImagesFolder = `${documentId}/Vehicle Images`;
      const folderRef = ref(storage, nicImagesFolder);
      const items = await listAll(folderRef);
      if (items && items.items.length > 0) {
        const firstItemUrl = await getDownloadURL(items.items[0]);
        window.open(firstItemUrl, "_blank");
      } else {
        console.error("No items found in the folder.");
      }
    } catch (error) {
      console.error("Error retrieving images:", error);
    }
  }, [documentId]);

  const onVehicleRegistrationButtonClick = useCallback(async () => {
    try {
      const storage = getStorage();
      const nicImagesFolder = `${documentId}/Vehicle Registration Documents`;
      const folderRef = ref(storage, nicImagesFolder);
      const items = await listAll(folderRef);
      if (items && items.items.length > 0) {
        const firstItemUrl = await getDownloadURL(items.items[0]);
        window.open(firstItemUrl, "_blank");
      } else {
        console.error("No items found in the folder.");
      }
    } catch (error) {
      console.error("Error retrieving images:", error);
    }
  }, [documentId]);

  const onBillingProofButtonClick = useCallback(async () => {
    try {
      const storage = getStorage();
      const utilityFolder = `${documentId}/BillingProofDocuments/Utility Bill`;
      const bankFolder = `${documentId}/BillingProofDocuments/Bank Statements`;
      const folderRef = ref(storage, utilityFolder);
      const folderRef1 = ref(storage, bankFolder);
      const items = await listAll(folderRef);
      const items1 = await listAll(folderRef1);
      if (items && items.items.length > 0) {
        const firstItemUrl = await getDownloadURL(items.items[0]);
        window.open(firstItemUrl, "_blank");
      } else {
        console.error("No items found in the folder.");
      }
      if (items1 && items1.items.length > 0) {
        const firstItemUrl = await getDownloadURL(items1.items[0]);
        window.open(firstItemUrl, "_blank");
      } else {
        console.error("No items found in the folder.");
      }
    } catch (error) {
      console.error("Error retrieving images:", error);
    }
  }, [documentId]);

  return (
    <PageLayout activeSidebarItem="Drivers Information">
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
              <img alt="" src="/spanavatar9.svg" />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span className={styles.admin}>Admin</span>
                <span className={styles.adminName}>Abdurrahman</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.driverListContainer}>
          <p className={styles.driverList}>Driver Profile</p>
          <p className={styles.dateCreated}>Date Created 04.03.2024</p>
          <div className={styles.container}>
            <div className={styles.tabContainer}>
              <div
                className={
                  currentTab === "Personal Info"
                    ? styles.activeTab
                    : styles.notActiveTab
                }
                onClick={() => changeCurrentTab("Personal Info")}
              >
                <span>Personal Info</span>
              </div>
              <div
                className={
                  currentTab === "Address & Routes"
                    ? styles.activeTab
                    : styles.notActiveTab
                }
                onClick={() => changeCurrentTab("Address & Routes")}
              >
                <span>Address & Routes</span>
              </div>
              <div
                className={
                  currentTab === "Billing Info"
                    ? styles.activeTab
                    : styles.notActiveTab
                }
                onClick={() => changeCurrentTab("Billing Info")}
              >
                <span>Billing Info</span>
              </div>
              <div
                className={
                  currentTab === "Vehicle Info"
                    ? styles.activeTab
                    : styles.notActiveTab
                }
                onClick={() => changeCurrentTab("Vehicle Info")}
              >
                <span>Vehicle Info</span>
              </div>
            </div>

            <div>{/* prathikshan */}</div>
          </div>

          {/* tab containers */}
          {currentTab === "Personal Info" && (
            <div className={styles.renderContent}>
              <p className={styles.contentTitle}>Personal info</p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
    // <div className={styles.driverProfileDetail}>
    //   <div className={styles.rectangleParent}>
    //     <div className={styles.frameChild} />
    //     <div className={styles.driverProfile}>Driver Profile</div>
    //     <div className={styles.profile}>
    //       <div className={styles.profileChild} />
    //       <div className={styles.profileInner}>
    //         <div className={styles.personalInfoParent}>
    //           <b className={styles.personalInfo}>personal info</b>
    //           <div className={styles.groupParent}>
    //             <div className={styles.fullNameParent}>
    //               <div className={styles.fullName}>Full Name</div>
    //               <div className={styles.charinduUdanthaEdirisuriya}>
    //                 {isEditing ? (
    //                   <Input
    //                     value={editedDriverInfo && editedDriverInfo.name}
    //                     onChange={(e) =>
    //                       handleEditChange("name", e.target.value)
    //                     }
    //                   />
    //                 ) : (
    //                   driverInfo && driverInfo.name
    //                 )}
    //               </div>
    //             </div>
    //             <div className={styles.fullNameWithInitialsParent}>
    //               <div className={styles.fullName}>Full Name with Initials</div>
    //               <div className={styles.cuEdirisuriya}>{/*Need to Add */}</div>
    //             </div>
    //             <div className={styles.udantha15gmailcomParent}>
    //               <div className={styles.udantha15gmailcom}>
    //                 {isEditing ? (
    //                   <Input
    //                     value={editedDriverInfo && editedDriverInfo.email}
    //                     onChange={(e) =>
    //                       handleEditChange("email", e.target.value)
    //                     }
    //                   />
    //                 ) : (
    //                   driverInfo && driverInfo.email
    //                 )}
    //               </div>
    //               <div className={styles.email}>Email</div>
    //             </div>
    //             <div className={styles.parent}>
    //               <div className={styles.udantha15gmailcom}>
    //                 {isEditing ? (
    //                   <Input
    //                     value={
    //                       editedDriverInfo && editedDriverInfo.mobileNumber
    //                     }
    //                     onChange={(e) =>
    //                       handleEditChange("mobileNumber", e.target.value)
    //                     }
    //                   />
    //                 ) : (
    //                   driverInfo && driverInfo.mobileNumber
    //                 )}
    //               </div>
    //               <div className={styles.email}>Phone</div>
    //             </div>
    //             <div className={styles.group}>
    //               <div className={styles.udantha15gmailcom}>
    //                 {isEditing ? (
    //                   <Input
    //                     value={editedDriverInfo && editedDriverInfo.dateOfBirth}
    //                     onChange={(e) =>
    //                       handleEditChange("dateOfBirth", e.target.value)
    //                     }
    //                   />
    //                 ) : (
    //                   driverInfo && driverInfo.dateOfBirth
    //                 )}
    //               </div>
    //               <div className={styles.email}>Date of birth</div>
    //             </div>
    //             <div className={styles.ageCategoryParent}>
    //               <div className={styles.ageCategory}>age category</div>
    //               <div className={styles.cuEdirisuriya}>{/*Need to Add */}</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={styles.groupDiv}>
    //         <div className={styles.routeInfoParent}>
    //           <b className={styles.personalInfo}>route info</b>
    //           <div className={styles.groupContainer}>
    //             <div className={styles.mainRoadAthidiyaDehiwalaParent}>
    //               <div className={styles.mainRoadAthidiyaContainer}>
    //                 <p className={styles.mainRoadAthidiya}>
    //                   {isEditing ? (
    //                     <Input
    //                       value={editedDriverInfo && editedDriverInfo.Add1}
    //                       onChange={(e) =>
    //                         handleEditChange("Add1", e.target.value)
    //                       }
    //                     />
    //                   ) : (
    //                     driverInfo && driverInfo.Add1
    //                   )}
    //                 </p>
    //               </div>
    //               <div className={styles.email}>Address line 1</div>
    //             </div>
    //             <div className={styles.mainRoadAthidiyaDehiwalaGroup}>
    //               <div className={styles.udantha15gmailcom}>
    //                 {isEditing ? (
    //                   <Input
    //                     value={editedDriverInfo && editedDriverInfo.Add2}
    //                     onChange={(e) =>
    //                       handleEditChange("Add2", e.target.value)
    //                     }
    //                   />
    //                 ) : (
    //                   driverInfo && driverInfo.Add2
    //                 )}
    //               </div>
    //               <div className={styles.email}>Address line 2</div>
    //             </div>
    //             <div className={styles.kmParent}>
    //               <div className={styles.udantha15gmailcom}>
    //                 {isEditing ? (
    //                   <Input
    //                     value={editedDriverInfo && editedDriverInfo.AvgKM}
    //                     onChange={(e) =>
    //                       handleEditChange("AvgKM", e.target.value)
    //                     }
    //                   />
    //                 ) : (
    //                   driverInfo && driverInfo.AvgKM
    //                 )}
    //               </div>
    //               <div className={styles.email}>
    //                 Average kilometers (KM) per day
    //               </div>
    //             </div>
    //             <div className={styles.colomboParent}>
    //               <div className={styles.colombo}>{/*Need to add */}</div>
    //               <div className={styles.email}>
    //                 on average which routes do you travel
    //               </div>
    //             </div>
    //             <div className={styles.technologyParent}>
    //               <div className={styles.colombo}>{/*Need to add */}</div>
    //               <div className={styles.email}>Occupation</div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className={styles.groupParent1}>
    //       <div className={styles.groupParent2}>
    //         <div className={styles.educationLevelParent}>
    //           <div className={styles.ageCategory}>education level</div>
    //           <div className={styles.cuEdirisuriya}>{/*Need to Add */}</div>
    //         </div>
    //         <div className={styles.singleParent}>
    //           <div className={styles.colombo}>{/*Need to Add */}</div>
    //           <div className={styles.email}>Marital Status</div>
    //         </div>
    //         <div className={styles.container}>
    //           <div className={styles.udantha15gmailcom}>
    //             {isEditing ? (
    //               <Input
    //                 value={editedDriverInfo && editedDriverInfo.NICNumber}
    //                 onChange={(e) =>
    //                   handleEditChange("NICNumber", e.target.value)
    //                 }
    //               />
    //             ) : (
    //               driverInfo && driverInfo.NICNumber
    //             )}
    //           </div>
    //           <div className={styles.email}>National Id Number</div>
    //         </div>
    //         <div className={styles.n455346Parent}>
    //           <div className={styles.udantha15gmailcom}>{/*Need to Add */}</div>
    //           <div className={styles.email}>Passport Number</div>
    //         </div>
    //         <div className={styles.lkParent}>
    //           <div className={styles.udantha15gmailcom}>{/*Need to Add */}</div>
    //           <div className={styles.email}>Nationality</div>
    //         </div>
    //         <div className={styles.mainRoadAthidiyaDehiwalaContainer}>
    //           <div className={styles.udantha15gmailcom}>
    //             <p className={styles.mainRoadAthidiya}>{/*Need to add */}</p>
    //           </div>
    //           <div className={styles.email}>Home Address</div>
    //         </div>
    //       </div>
    //       <b className={styles.vehicleInfo}>Vehicle info</b>
    //     </div>
    //     <div className={styles.dateCreated04032023}>
    //       Date created 04.03.2023
    //     </div>

    //     <button className={styles.rectangleGroup} onClick={toggleEdit}>
    //       <div className={styles.groupChild} />
    //       <div className={styles.editParent}>
    //         <div className={styles.edit}>Edit</div>
    //         <img
    //           className={styles.notepencilIcon}
    //           alt=""
    //           src="/notepencil.svg"
    //         />
    //       </div>
    //     </button>
    //     <button className={styles.rectangleContainer} onClick={saveChanges}>
    //       <div className={styles.groupItem} />
    //       <div className={styles.saveChanges}>Save changes</div>
    //     </button>
    //     <div className={styles.rectangleParent1}>
    //       <div className={styles.groupInner} />
    //       <i className={styles.search}>Search</i>
    //       <img
    //         className={styles.iconsearchNormal}
    //         alt=""
    //         src="/iconsearchnormal.svg"
    //       />

    //       <img
    //         className={styles.iconnotificationBing}
    //         alt=""
    //         src="/iconnotificationbing1.svg"
    //       />
    //       <img
    //         className={styles.iconmessages2}
    //         alt=""
    //         src="/iconmessages21.svg"
    //       />
    //       <Input className={styles.searchbar2Fig4} width="639px" w="639px" />
    //       <div className={styles.avatar1}>
    //         <img className={styles.image54Icon} alt="" src="/image-54@2x.png" />
    //       </div>
    //     </div>
    //     <div className={styles.attachedDocuments}>Information</div>
    //     <div className={styles.activityLog}>Attached Documents</div>
    //     <div className={styles.frameDiv}>
    //       <div className={styles.frameItem} />
    //       <div className={styles.d}>
    //         <div className={styles.checklistDesignChallengeV2} />
    //       </div>
    //       <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
    //       <div className={styles.infotype}>Personal Information</div>
    //       <div className={styles.status}>{status1}</div>

    //       <div className={styles.spanbadgeWrapper1}>
    //       {status1 === 'Approved' && <img className={styles.spanavatarIcon} alt="" src="/component-471.svg" />}
    //       {status1 === 'Rejected' && <img className={styles.spanavatarIcon} alt="" src="/component-472.svg" />}
    //       {status1 === 'In Review' && <img className={styles.spanavatarIcon} alt="" src="/component-473.svg" />}
    //       </div>
    //     </div>
    //     <div className={styles.rectangleParent2}>
    //       <div className={styles.frameItem} />
    //       <div className={styles.d}>
    //         <div className={styles.checklistDesignChallengeV2} />
    //       </div>
    //       <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
    //       <div className={styles.infotype}>Vehicle Information</div>
    //       <div className={styles.status}>{status2}</div>

    //       <div className={styles.spanbadgeWrapper1}>
    //       {status2 === 'Approved' && <img className={styles.spanavatarIcon} alt="" src="/component-471.svg" />}
    //       {status2 === 'Rejected' && <img className={styles.spanavatarIcon} alt="" src="/component-472.svg" />}
    //       {status2 === 'In Review' && <img className={styles.spanavatarIcon} alt="" src="/component-473.svg"/>}
    //       </div>
    //     </div>
    //     <div className={styles.rectangleParent3}>
    //       <div className={styles.frameItem} />
    //       <div className={styles.d}>
    //         <div className={styles.checklistDesignChallengeV2} />
    //       </div>
    //       <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
    //       <div className={styles.infotype}>Address And Routes</div>
    //       <div className={styles.status}>{status3}</div>
    //       <div className={styles.spanbadgeWrapper1}>
    //       {status3 === 'Approved' && <img className={styles.spanavatarIcon} alt="" src="/component-471.svg" />}
    //       {status3 === 'Rejected' && <img className={styles.spanavatarIcon} alt="" src="/component-472.svg" />}
    //       {status3 === 'In Review' && <img className={styles.spanavatarIcon} alt="" src="/component-473.svg" />}
    //       </div>
    //     </div>
    //     <div className={styles.rectangleParent4}>
    //       <div className={styles.divParent}>
    //         <div className={styles.div4}>
    //           <button className={styles.buttonbutton} onClick={handleApprovedClick1}>{/*personal info*/}
    //             <div className={styles.spanflex}>
    //               <img
    //                 className={styles.spantextLgIcon}
    //                 alt=""
    //                 src="/spantextlg.svg"
    //               />
    //               <b className={styles.approved}>Approved</b>
    //             </div>
    //           </button>
    //           <button className={styles.buttonbutton1} onClick={handleRejectClick1}>
    //             <div className={styles.spanflex1}>
    //               <img
    //                 className={styles.spantextLgIcon1}
    //                 alt=""
    //                 src="/spantextlg1.svg"
    //               />
    //               <div className={styles.reject}>Reject</div>
    //               <img
    //                 className={styles.spantextLgIcon1}
    //                 alt=""
    //                 src="/spantextlg1.svg"
    //               />
    //               {/* <div className={styles.reject}>Reject</div> */}
    //             </div>
    //           </button>
    //         </div>
    //         <div className={styles.div5}>
    //           <button className={styles.buttonbutton} onClick={handleApprovedClick2}>{/* Vehicle Info */}
    //             <div className={styles.spanflex}>
    //               <img
    //                 className={styles.spantextLgIcon}
    //                 alt=""
    //                 src="/spantextlg.svg"
    //               />
    //               <b className={styles.approved}>Approved</b>
    //             </div>
    //           </button>
    //           <button className={styles.buttonbutton1} onClick={handleRejectClick2}>
    //             <div className={styles.spanflex3} />
    //             <img
    //               className={styles.spantextLgIcon4}
    //               alt=""
    //               src="/spantextlg1.svg"
    //             />
    //             <div className={styles.reject2}>Reject</div>
    //           </button>
    //         </div>
    //         <div className={styles.div6}>
    //           <button className={styles.buttonbutton} onClick={handleApprovedClick3}>{/*Address and Routes */}
    //             <div className={styles.spanflex}>
    //               <img
    //                 className={styles.spantextLgIcon}
    //                 alt=""
    //                 src="/spantextlg.svg"
    //               />
    //               <b className={styles.approved}>Approved</b>
    //             </div>
    //           </button>
    //           <button className={styles.buttonbutton1} onClick={handleRejectClick3}>
    //             <img
    //               className={styles.spantextLgIcon4}
    //               alt=""
    //               src="/spantextlg1.svg"
    //             />
    //             <div className={styles.reject2}>Reject</div>
    //           </button>
    //         </div>
    //       </div>
    //     </div>

    //     <div className={styles.frameDiv2}>
    //       <div className={styles.frameItem} />
    //       <div className={styles.d}>
    //         <div className={styles.checklistDesignChallengeV2} />
    //       </div>
    //       <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
    //       <div className={styles.infotype}>Driving lisence</div>
    //       <div className={styles.status}>{DLStatus}</div>

    //       <div className={styles.spanbadgeWrapper1}>
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src={`/component-${getIconForStatus(DLStatus)}.svg`}
    //           />
    //       </div>

    //     </div>
    //     <div className={styles.rectangleParent22}>
    //       <div className={styles.frameItem} />
    //       <div className={styles.d}>
    //         <div className={styles.checklistDesignChallengeV2} />
    //       </div>
    //       <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
    //       <div className={styles.infotype}>Insurance lisence</div>
    //       <div className={styles.status}>{ILStatus}</div>

    //       <div className={styles.spanbadgeWrapper1}>
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src={`/component-${getIconForStatus(ILStatus)}.svg`}
    //           />
    //       </div>

    //     </div>
    //     <div className={styles.rectangleParent32}>
    //       <div className={styles.frameItem} />
    //       <div className={styles.d}>
    //         <div className={styles.checklistDesignChallengeV2} />
    //       </div>
    //       <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
    //       <div className={styles.infotype}>NIC</div>
    //       <div className={styles.status}>{NICStatus}</div>

    //       <div className={styles.spanbadgeWrapper1}>
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src={`/component-${getIconForStatus(NICStatus)}.svg`}
    //           />
    //       </div>

    //     </div>
    //     <div className={styles.rectangleParent321}>
    //       <div className={styles.frameItem} />
    //       <div className={styles.d}>
    //         <div className={styles.checklistDesignChallengeV2} />
    //       </div>
    //       <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
    //       <div className={styles.infotype}>Vehicle image</div>
    //       <div className={styles.status}>{vehicleImageStatus}</div>

    //       <div className={styles.spanbadgeWrapper1}>
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src={`/component-${getIconForStatus(vehicleImageStatus)}.svg`}
    //           />
    //       </div>
    //     </div>

    //     <div className={styles.rectangleParent3210}>
    //       <div className={styles.frameItem} />
    //       <div className={styles.d}>
    //         <div className={styles.checklistDesignChallengeV2} />
    //       </div>
    //       <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
    //       <div className={styles.infotype}>Revenue License</div>
    //       <div className={styles.status}>Pending</div>

    //       <div className={styles.spanbadgeWrapper1}>
    //         <img
    //           className={styles.spanavatarIcon}
    //           alt=""
    //           src="/component-474.svg"
    //         />
    //       </div>
    //     </div>

    //     <div className={styles.rectangleParent3211}>
    //       <div className={styles.frameItem} />
    //       <div className={styles.d}>
    //         <div className={styles.checklistDesignChallengeV2} />
    //       </div>
    //       <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
    //       <div className={styles.infotype}>Vehicle Registration Document</div>
    //       <div className={styles.status}>Pending</div>

    //       <div className={styles.spanbadgeWrapper1}>
    //         <img
    //           className={styles.spanavatarIcon}
    //           alt=""
    //           src="/component-474.svg"
    //         />
    //       </div>
    //     </div>

    //     <div className={styles.rectangleParent3212}>
    //       <div className={styles.frameItem} />
    //       <div className={styles.d}>
    //         <div className={styles.checklistDesignChallengeV2} />
    //       </div>
    //       <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
    //       <div className={styles.infotype}>Billing Proof (Optional)</div>
    //       <div className={styles.status}>Pending</div>

    //       <div className={styles.spanbadgeWrapper1}>
    //         <img
    //           className={styles.spanavatarIcon}
    //           alt=""
    //           src="/component-474.svg"
    //         />
    //       </div>
    //     </div>

    //     <div className={styles.rectangleParent42}>
    //       <div className={styles.spanbadgeWrapperParent}>
    //         <button
    //           className={styles.spanbadgeWrapper122}
    //           onClick={onDLImagesButtonClick}
    //           >
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src="/spanavatar1.svg"
    //           />
    //           <div className={styles.spanbadge}>
    //             <div className={styles.open}>Open</div>
    //           </div>
    //         </button>
    //         <button
    //           className={styles.spanbadgeWrapper22}
    //           onClick={onInsuranceImagesButtonClick}
    //         >
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src="/spanavatar1.svg"
    //           />
    //           <div className={styles.spanbadge}>
    //             <div className={styles.open}>Open</div>
    //           </div>
    //         </button>
    //         <button
    //           className={styles.spanbadgeWrapper32}
    //           onClick={onNICImagesButtonClick}
    //         >
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src="/spanavatar1.svg"
    //           />
    //           <div className={styles.spanbadge}>
    //             <div className={styles.open}>Open</div>
    //           </div>
    //         </button>

    //         <button
    //           className={styles.spanbadgeWrapper421}
    //           onClick={onVehicleImagesButtonClick}
    //         >
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src="/spanavatar1.svg"
    //           />
    //           <div className={styles.spanbadge}>
    //             <div className={styles.open}>Open</div>
    //           </div>
    //         </button>

    //         <button
    //           className={styles.spanbadgeWrapper42}
    //           onClick={onVehicleImagesButtonClick}
    //         >
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src="/spanavatar1.svg"
    //           />
    //           <div className={styles.spanbadge}>
    //             <div className={styles.open}>Open</div>
    //           </div>
    //         </button>

    //         <button
    //           className={styles.spanbadgeWrapper422}
    //           onClick={onVehicleRegistrationButtonClick}
    //         >
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src="/spanavatar1.svg"
    //           />
    //           <div className={styles.spanbadge}>
    //             <div className={styles.open}>Open</div>
    //           </div>
    //         </button>
    //         <button
    //           className={styles.spanbadgeWrapper423}
    //           onClick={onBillingProofButtonClick}
    //         >
    //           <img
    //             className={styles.spanavatarIcon}
    //             alt=""
    //             src="/spanavatar1.svg"
    //           />
    //           <div className={styles.spanbadge}>
    //             <div className={styles.open}>Open</div>
    //           </div>
    //         </button>
    //       </div>

    //       <div className={styles.divParent}>
    //         <div className={styles.div4}>
    //           <button
    //           className={styles.buttonbutton}
    //           onClick={() => handleDLStatusChange("Approved")}
    //           >
    //             <div className={styles.spanflex}>
    //               <img
    //                 className={styles.spantextLgIcon}
    //                 alt=""
    //                 src="/spantextlg.svg"
    //               />
    //               <b className={styles.approved}>Approved</b>
    //             </div>
    //           </button>
    //           <button
    //           className={styles.buttonbutton1}
    //           onClick={() => handleDLStatusChange("Rejected")}
    //           >
    //             <div className={styles.spanflex1}>

    //               <img
    //                 className={styles.spantextLgIcon1}
    //                 alt=""
    //                 src="/spantextlg1.svg"
    //               />
    //               <div className={styles.reject}>Reject</div>
    //             </div>
    //           </button>
    //         </div>
    //         <div className={styles.div5}>
    //           <button
    //           className={styles.buttonbutton}
    //           onClick={() => handleILStatusChange("Approved")}
    //           >
    //             <div className={styles.spanflex}>
    //               <img
    //                 className={styles.spantextLgIcon}
    //                 alt=""
    //                 src="/spantextlg.svg"
    //               />
    //               <b className={styles.approved}>Approved</b>
    //             </div>
    //           </button>
    //           <button
    //           className={styles.buttonbutton1}
    //           onClick={() => handleILStatusChange("Rejected")}
    //           >
    //             <div className={styles.spanflex3} />
    //             <img
    //               className={styles.spantextLgIcon4}
    //               alt=""
    //               src="/spantextlg1.svg"
    //             />
    //             <div className={styles.reject2}>Reject</div>
    //           </button>
    //         </div>
    //         <div className={styles.div6}>
    //           <button
    //           className={styles.buttonbutton}
    //           onClick={() => handleNICStatusChange("Approved")}
    //           >
    //             <div className={styles.spanflex}>
    //               <img
    //                 className={styles.spantextLgIcon}
    //                 alt=""
    //                 src="/spantextlg.svg"
    //               />
    //               <b className={styles.approved}>Approved</b>
    //             </div>
    //           </button>
    //           <button
    //           className={styles.buttonbutton1}
    //           onClick={() => handleNICStatusChange("Rejected")}
    //           >
    //             <img
    //               className={styles.spantextLgIcon4}
    //               alt=""
    //               src="/spantextlg1.svg"
    //             />
    //             <div className={styles.reject2}>Reject</div>
    //           </button>
    //         </div>
    //         <div className={styles.div7}>
    //           <button
    //           className={styles.buttonbutton}
    //           onClick={() => handleVehicleImageStatusChange("Approved")}
    //           >
    //             <div className={styles.spanflex}>
    //               <img
    //                 className={styles.spantextLgIcon}
    //                 alt=""
    //                 src="/spantextlg.svg"
    //               />
    //               <b className={styles.approved}>Approved</b>
    //             </div>
    //           </button>
    //           <button
    //           className={styles.buttonbutton1}
    //           onClick={() => handleVehicleImageStatusChange("Rejected")}
    //           >
    //             <img
    //               className={styles.spantextLgIcon4}
    //               alt=""
    //               src="/spantextlg1.svg"
    //             />
    //             <div className={styles.reject2}>Reject</div>
    //           </button>
    //         </div>

    //         <div className={styles.div8}>
    //           <button className={styles.buttonbutton}>
    //             <div className={styles.spanflex}>
    //               <img
    //                 className={styles.spantextLgIcon}
    //                 alt=""
    //                 src="/spantextlg.svg"
    //               />
    //               <b className={styles.approved}>Approved</b>
    //             </div>
    //           </button>
    //           <button className={styles.buttonbutton1}>
    //             <img
    //               className={styles.spantextLgIcon4}
    //               alt=""
    //               src="/spantextlg1.svg"
    //             />
    //             <div className={styles.reject2}>Reject</div>
    //           </button>
    //         </div>

    //         <div className={styles.div999}>
    //           <button className={styles.buttonbutton}>
    //             <div className={styles.spanflex}>
    //               <img
    //                 className={styles.spantextLgIcon}
    //                 alt=""
    //                 src="/spantextlg.svg"
    //               />
    //               <b className={styles.approved}>Approved</b>
    //             </div>
    //           </button>
    //           <button className={styles.buttonbutton1}>
    //             <img
    //               className={styles.spantextLgIcon4}
    //               alt=""
    //               src="/spantextlg1.svg"
    //             />
    //             <div className={styles.reject2}>Reject</div>
    //           </button>
    //         </div>

    //         <div className={styles.div100}>
    //           <button className={styles.buttonbutton}>
    //             <div className={styles.spanflex}>
    //               <img
    //                 className={styles.spantextLgIcon}
    //                 alt=""
    //                 src="/spantextlg.svg"
    //               />
    //               <b className={styles.approved}>Approved</b>
    //             </div>
    //           </button>
    //           <button className={styles.buttonbutton1}>
    //             <img
    //               className={styles.spantextLgIcon4}
    //               alt=""
    //               src="/spantextlg1.svg"
    //             />
    //             <div className={styles.reject2}>Reject</div>
    //           </button>
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
    //           <div className={styles.myGroup}>About campaign</div>
    //         </button>
    //       </div>
    //       <div className={styles.frameParent}>
    //         <button className={styles.rocketlaunchParent}>
    //           <img
    //             className={styles.growthIcon}
    //             alt=""
    //             src="/rocketlaunch1.svg"
    //           />
    //           <div className={styles.analytics}>Drivers information</div>
    //         </button>
    //         <div className={styles.frameChild3} />
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
    //       <img className={styles.ellipseIcon} alt="" src="/ellipse-1@2x.png" />
    //     </div>
    //   </div>
    // </div>
  );
};

export default DriverProfileDetail;
