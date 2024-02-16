import { useCallback } from "react";
import { Input } from "@chakra-ui/react";
import styles from "./DriverProfileDetail.module.css";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { collection, getDoc, doc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "./firebase";
import { getStorage, ref, listAll, getDownloadURL, uploadBytes, deleteObject } from "firebase/storage";
import PageLayout from "../components/page-layout/page-layout";
import documentSVG from "../../src/icons/documentSVG.svg";
import CaretCircleDown from "../../src/icons/CaretCircleDown.svg";
import CloseIcon from "../../src/icons/span_text-lg.svg";
import uplo from "../../src/icons/1.png";
import 'firebase/firestore';



const DriverProfileDetail = () => {
  const { documentId } = useParams();
  const navigate = useNavigate();
  const [driverInfo, setDriverInfo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDriverInfo, setEditedDriverInfo] = useState(null);

  //
  const [PIStatus, setPIStatus] = useState("Pending");
  const [VIStatus, setVIStatus] = useState("Pending");
  const [ARStatus, setARStatus] = useState("Pending");

  const [ILStatus, setILStatus] = useState("Pending");
  const [NICStatus, setNICStatus] = useState("Pending");
  const [vehicleImageStatus, setVehicleImageStatus] = useState("Pending");
  const [currentTab, setCurrentTab] = useState("Personal Info");
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  //billing info accounts//
  const [selectedAccount, setSelectedAccount] = useState("account1");

  const [vehicleImageDropdown, setVehicleImageDropdown] = useState(false);
  const [drivingLicenseDropdown, setDrivingLicenseDropdown] = useState(false);
  const [nicDropdown, setNicImageDropdown] = useState(false);
  const [revenueLicenseDropdown, setRevenueLicenseDropdown] = useState(false);
  const [vehicleInsuranceDropdown, setVehicleInsuranceDropdown] =
    useState(false);
  const [billingDocDropdown, setBillingDocDropdown] = useState(false);

  const handleAccountClick = (account) => {
    setSelectedAccount(account);
  };

  //
  const changeCurrentTab = (tab) => {
    setCurrentTab(tab);
  };
  const handlePIStatusChange = (newStatus) => {
    setPIStatus(newStatus);
  };
  const handleVIStatusChange = (newStatus) => {
    setVIStatus(newStatus);
  };
  const handleARStatusChange = (newStatus) => {
    setARStatus(newStatus);
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
        return "approved"; // Use the appropriate component number for the 'Approved' status
      case "Rejected":
        return "rejected"; // Use the appropriate component number for the 'Rejected' status
      case "In Review":
        return "inReview"; // Use the appropriate component number for the 'In Review' status
      case "Pending":
        return "pending"; // Use the appropriate component number for the 'In Review' status
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

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const names = fullName.split(" ");
    const firstNameInitial = names[0].charAt(0).toUpperCase();
    const lastName = names.length > 1 ? names[names.length - 1] : "";
    return `${firstNameInitial}.${lastName}`;
  };

  const uploadImageToFirestore = async (file, documentId, fetchImageUrl) => {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, `${documentId}/Profile Photo/${file.name}`);
      const existingImageRef = ref(storage, `${documentId}/Profile Photo`);
      const existingImageSnapshot = await listAll(existingImageRef);
      existingImageSnapshot.items.forEach(async (item) => {
        await deleteObject(item);
      });
      await uploadBytes(storageRef, file);
      fetchImageUrl();
    } catch (error) {
      console.error("Error uploading image to Firestore:", error);
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      await uploadImageToFirestore(file, documentId, fetchImageUrl);
    }
  };

  const fetchImageUrl = async () => {
    try {
      const storage = getStorage();
      const userImagesFolder = `${documentId}/Profile Photo`;
      const folderRef = ref(storage, userImagesFolder);
      const items = await listAll(folderRef);
      if (items && items.items.length > 0) {
        const firstItem = items.items[0];
        const firstItemUrl = await getDownloadURL(firstItem);
        setImageUrl(firstItemUrl);
      } else {
        console.error("No items found in the folder.");
      }
    } catch (error) {
      console.error("Error retrieving images:", error);
    }
  };

  useEffect(() => {
    fetchImageUrl();
  }, [documentId]);

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

        const VehicleInformationCollection = collection(
          db,
          "VehicleInformation"
        );
        const VehicleInformationDocRef = doc(
          VehicleInformationCollection,
          documentId
        );
        const VehicleInformationDocSnapshot = await getDoc(
          VehicleInformationDocRef
        );

        const utilityCollection = collection(db, "Utility Bill");
        const utilityDocRef = doc(utilityCollection, documentId);
        const utilityDocSnapshot = await getDoc(utilityDocRef);

        if (
          personalInfoDocSnapshot.exists() &&
          nicNumberDocSnapshot.exists() &&
          addressAndRoutesDocSnapshot.exists() &&
          VehicleInformationDocSnapshot.exists()
          //utilityDocSnapshot.exists()
        ) {
          const personalInfoData = personalInfoDocSnapshot.data();
          const nicNumberData = nicNumberDocSnapshot.data();
          const addressAndRoutesData = addressAndRoutesDocSnapshot.data();
          const VehicleInformationData = VehicleInformationDocSnapshot.data();
          const utilityData = utilityDocSnapshot.data();

          const mergedData = {
            ...personalInfoData,
            ...nicNumberData,
            ...addressAndRoutesData,
            ...VehicleInformationData,
            //...utilityData,
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

      const VehicleInformationCollection = collection(db, "VehicleInformation");
      const VehicleInformationDocRef = doc(
        VehicleInformationCollection,
        documentId
      );

      await updateDoc(personalInfoDocRef, {
        name: editedDriverInfo.name,
        email: editedDriverInfo.email,
        mobileNumber: editedDriverInfo.mobileNumber,
        gender: editedDriverInfo.gender,
        dateOfBirth: editedDriverInfo.dateOfBirth,
        timestamp: timestamp,
      });

      await updateDoc(nicNumberDocRef, {
        NICNumber: editedDriverInfo.NICNumber,
      });

      await updateDoc(addressAndRoutesDocRef, {
        Add1: editedDriverInfo.Add1,
        Add2: editedDriverInfo.Add2,
        City: editedDriverInfo.City,
        Province: editedDriverInfo.Province,
        AvgKM: editedDriverInfo.AvgKM,
        AvgTravelRoute: editedDriverInfo.AvgTravelRoute,
        WorkAddress: editedDriverInfo.WorkAddress,
      });

      await updateDoc(VehicleInformationDocRef, {
        carType: editedDriverInfo.carType,
        carBrand: editedDriverInfo.carBrand,
        carModel: editedDriverInfo.carModel,
        carNumberPlate: editedDriverInfo.carNumberPlate,
        yearOfMaking: editedDriverInfo.yearOfMaking,
        carColor: editedDriverInfo.carColor,
        identity: editedDriverInfo.identity,
        carUsage: editedDriverInfo.carUsage,
      });

      setDriverInfo(editedDriverInfo);

      setIsEditing(false);
      window.alert("Changes saved successfully!");
    } catch (error) {
      console.error("Error saving changes:", error);
      window.alert("Error saving changes. Please try again.");
    }
  };


  const handleApprovePersonalInfo = async (keysToUpdate) => {
    try {
      const db = getFirestore(firebaseApp);
      const userDocumentPath = `/DocumentsStatus/${documentId}`;
      const docRef = doc(db, userDocumentPath);

      const updateData = {};
      keysToUpdate.forEach(key => {
        updateData[key] = 'Approved';
      });

      await updateDoc(docRef, updateData);

      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  }


  const handleRejectpersonalinfo = async (keysToUpdate) => {
    try {
      const db = getFirestore(firebaseApp);
      const userDocumentPath = `/DocumentsStatus/${documentId}`;
      const docRef = doc(db, userDocumentPath);

      const updateData = {};
      keysToUpdate.forEach(key => {
        updateData[key] = 'Rejected';
      });

      await updateDoc(docRef, updateData);

      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document: ', error);
    }
  }

  
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

  const handleDropdownClick = (section) => {
    if (section === "DrivingLicense") {
      setDrivingLicenseDropdown(!drivingLicenseDropdown);
    } else if (section === "NIC") {
      setNicImageDropdown(!nicDropdown);
    } else if (section === "VehicleImage") {
      setVehicleImageDropdown(!vehicleImageDropdown);
    } else if (section === "Revenue License") {
      setRevenueLicenseDropdown(!revenueLicenseDropdown);
    } else if (section === "Vehicle Insurance") {
      setVehicleInsuranceDropdown(!vehicleInsuranceDropdown);
    } else if (section === "Billing Documents") {
      setBillingDocDropdown(!billingDocDropdown);
    }
  };

  

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  //
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
              <img alt="" src="/logo.png" className={styles.headerImage1}/>
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
                  currentTab === "Vehicle Info"
                    ? styles.activeTab
                    : styles.notActiveTab
                }
                onClick={() => changeCurrentTab("Vehicle Info")}
              >
                <span>Vehicle Info</span>
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
            </div>
          </div>

          {/* tab containers */}
          {currentTab === "Personal Info" && (
            <div className={styles.renderContent}>
              <p className={styles.contentTitle}>Personal info</p>
              <div className={styles.ContentV}>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Full Name</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.name}
                        onChange={(e) =>
                          handleEditChange("name", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.name
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Date of birth</div>
                  <div className={styles.dob}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.dateOfBirth}
                        onChange={(e) =>
                          handleEditChange("dateOfBirth", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.dateOfBirth
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Email </div>
                  <div className={styles.mailInput}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.email}
                        onChange={(e) =>
                          handleEditChange("email", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.email
                    )}
                  </div>
                </div>

                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>National Id Number</div>
                  <div className={styles.nic}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.NICNumber}
                        onChange={(e) =>
                          handleEditChange("NICNumber", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.NICNumber
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.ContentV}>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Full Name with Initials</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.name}
                        onChange={(e) =>
                          handleEditChange("name", e.target.value)
                        }
                      />
                    ) : (
                      <span>{getInitials(driverInfo && driverInfo.name)}</span>
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Gender</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.gender}
                        onChange={(e) =>
                          handleEditChange("gender", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.gender
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Phone</div>
                  <div className={styles.phno}>
                    {isEditing ? (
                      <Input
                        value={
                          editedDriverInfo && editedDriverInfo.mobileNumber
                        }
                        onChange={(e) =>
                          handleEditChange("mobileNumber", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.mobileNumber
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Age category</div>
                  <div className={styles.ContentB}>20 - 25</div>
                </div>
              </div>
            </div>
          )}
          {currentTab === "Vehicle Info" && (
            <div className={styles.renderContent}>
              <p className={styles.contentTitle}>Vehicle Info</p>
              <div className={styles.ContentV}>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Car Type</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.carType}
                        onChange={(e) =>
                          handleEditChange("carType", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.carType
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Car Model</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.carModel}
                        onChange={(e) =>
                          handleEditChange("carModel", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.carModel
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Year Of Making Car</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={
                          editedDriverInfo && editedDriverInfo.yearOfMaking
                        }
                        onChange={(e) =>
                          handleEditChange("yearOfMaking", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.yearOfMaking
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Identity</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.identity}
                        onChange={(e) =>
                          handleEditChange("identity", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.identity
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.ContentV}>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Car Brand</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.carBrand}
                        onChange={(e) =>
                          handleEditChange("carBrand", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.carBrand
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Car Number Plate</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={
                          editedDriverInfo && editedDriverInfo.carNumberPlate
                        }
                        onChange={(e) =>
                          handleEditChange("carNumberPlate", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.carNumberPlate
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Car Color</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.carColor}
                        onChange={(e) =>
                          handleEditChange("carColor", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.carColor
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Car Usage</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.carUsage}
                        onChange={(e) =>
                          handleEditChange("carUsage", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.carUsage
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentTab === "Address & Routes" && (
            <div className={styles.renderContent}>
              <p className={styles.contentTitle}>ADDRESS & ROUTES INFO</p>
              <div className={styles.ContentV}>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Address line 1</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.Add1}
                        onChange={(e) =>
                          handleEditChange("Add1", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.Add1
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Work address</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.WorkAddress}
                        onChange={(e) =>
                          handleEditChange("WorkAddress", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.WorkAddress
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Province</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.Province}
                        onChange={(e) =>
                          handleEditChange("Province", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.Province
                    )}
                  </div>
                </div>
                <div className={styles.ContentOne}>
                  <div className={styles.ContentG}>Avg travel route</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={
                          editedDriverInfo && editedDriverInfo.AvgTravelRoute
                        }
                        onChange={(e) =>
                          handleEditChange("AvgTravelRoute", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.AvgTravelRoute
                    )}
                  </div>
                </div>
              </div>
              <div className={styles.ContentV}>
                <div className={styles.Content0}>
                  <div className={styles.ContentG}>Address line 2</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.Add2}
                        onChange={(e) =>
                          handleEditChange("Add2", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.Add2
                    )}
                  </div>
                </div>
                <div className={styles.Contenttwo}>
                  <div className={styles.ContentG}>City</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.City}
                        onChange={(e) =>
                          handleEditChange("City", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.City
                    )}
                  </div>
                </div>
                <div className={styles.Contentthree}>
                  <div className={styles.ContentG}>Avg Drive KM</div>
                  <div className={styles.name}>
                    {isEditing ? (
                      <Input
                        value={editedDriverInfo && editedDriverInfo.AvgKM}
                        onChange={(e) =>
                          handleEditChange("AvgKM", e.target.value)
                        }
                      />
                    ) : (
                      driverInfo && driverInfo.AvgKM
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}

          {currentTab === "Billing Info" && (
            <div className={styles.renderContent}>
              <p className={styles.contentTitle}>Billing info</p>
              <div className={styles.ContentV}>
                <button
                  className={
                    selectedAccount === "account1"
                      ? styles.activeAccount
                      : styles.inactiveAccount
                  }
                  onClick={() => handleAccountClick("account1")}
                >
                  Account 1
                </button>
                <button
                  className={
                    selectedAccount === "account2"
                      ? styles.activeAccount
                      : styles.inactiveAccount
                  }
                  onClick={() => handleAccountClick("account2")}
                >
                  Account 2
                </button>
              </div>
              {selectedAccount === "account1" && (
                <div className={styles.renderContent1}>
                  <p className={styles.contentTitle}>
                    Billing info (Account 1)
                  </p>
                  <div className={styles.ContentV}>
                    <div className={styles.ContentOne}>
                      <div className={styles.ContentG}>Account Holder Name</div>
                      <div className={styles.ContentB}></div>
                    </div>
                    <div className={styles.ContentOne}>
                      <div className={styles.ContentG}>Bank</div>
                      <div className={styles.ContentB}></div>
                    </div>
                  </div>
                  <div className={styles.ContentV}>
                    <div className={styles.ContentOne}>
                      <div className={styles.ContentG}>Account Number</div>
                      <div className={styles.ContentB}></div>
                    </div>
                    <div className={styles.ContentOne}>
                      <div className={styles.ContentG}>Branch</div>
                      <div className={styles.ContentB}></div>
                    </div>
                  </div>
                </div>
              )}
              {selectedAccount === "account2" && (
                <div className={styles.renderContent1}>
                  <p className={styles.contentTitle}>
                    Billing info (Account 2)
                  </p>

                  {/* ... (billing d etails for account 2) */}
                </div>
              )}
            </div>
          )}
        </div>
        <button className={styles.rectangleGroup} onClick={toggleEdit}>
          <div className={styles.groupChild} />
          <div className={styles.editParent}>
            <div className={styles.edit}>Edit</div>
            <img
              className={styles.notepencilIcon}
              alt=""
              src="/notepencil.svg"
            />
          </div>
        </button>
        <button className={styles.rectangleContainer} onClick={saveChanges}>
          <div className={styles.groupItem} />
          <div className={styles.saveChanges}>Save changes</div>
        </button>

{/* ... (test) */}

        <div className={styles.attachedDocumentContainer}>
          <p className={styles.attachedDocument}>Information</p>
          <div className={styles.headers}>
            <p>Document Type</p>
            <p>Status</p>
          </div>
          <div className={styles.documentsContainerParent}>
            <div className={styles.documentContainer}>
              <div className={styles.documentContainer1}>
                <div className={styles.document1stContainer}>
                  <div className={styles.spanbadgeWrapper1}> 
                    <img
                       className={styles.spanavatarIcon}
                       alt=""
                       src={`/${getIconForStatus(PIStatus)}.svg`}  
                    />
                  </div> 
                  <p className={styles.docTitle}>Personal Information</p>
                </div>

                <div className={styles.document3rdContainer}>
                  <>
                    {PIStatus === "Pending" && (
                      <>
                        <button
                        className={styles.approveButton}
                        onClick={() => {
                          handlePIStatusChange("Approved");
                          handleApprovePersonalInfo(['PersonalInfo.status']); 
                        }}
                        >
                        Approve
                        </button>

                        <button
                        className={styles.rejectButton}
                        onClick={() =>{
                          handlePIStatusChange("Rejected");
                          handleRejectpersonalinfo(['PersonalInfo.status']);
                        }}
                        >
                        <img src={CloseIcon} alt="Icon" />
                        Reject
                        </button>
                      </>
                    )}

                    {PIStatus === "Approved" && (
                      <>
                        <button className={styles.approvedButton}>
                        <img src={CloseIcon} alt="Icon" />
                        Approved
                        </button>
      
                        <button
                        className={styles.rejectButton}
                        onClick={() =>{
                          handlePIStatusChange("Rejected");
                          handleRejectpersonalinfo(['PersonalInfo.status']);
                        }}
                        >
                        <img src={CloseIcon} alt="Icon" />
                        Reject
                        </button>
                      </>
                    )}

                    {PIStatus === "Rejected" && (
                      <>
                        <button
                        className={styles.approveButton}
                        onClick={() => {
                          handlePIStatusChange("Approved");
                          handleApprovePersonalInfo(['PersonalInfo.status']); 
                        }}
                        >
                        Approve
                        </button>
                        <button className={styles.rejectedButton}>
                        <img src={CloseIcon} alt="Icon" />
                        Rejected
                        </button>
                      </>
                    )}
                  </>
                </div>
              </div>

            </div>

            <div className={styles.documentContainer}>
              <div className={styles.documentContainer1}>
                <div className={styles.document1stContainer}>
                  <div className={styles.spanbadgeWrapper1}> 
                    <img
                       className={styles.spanavatarIcon}
                       alt=""
                       src={`/${getIconForStatus(VIStatus)}.svg`}  
                    />
                  </div> 
                  <p className={styles.docTitle}>Vehicle Information</p>
                </div>

                <div className={styles.document3rdContainer}>
                  <>
                    {PIStatus === "Pending" && (
                      <>
                        <button
                        className={styles.approveButton}
                        onClick={() => {
                          handleVIStatusChange("Approved");
                          handleApprovePersonalInfo(['vehicleInfo.status']);
                        }}
                        >
                        Approve
                        </button>

                        <button
                        className={styles.rejectButton}
                        onClick={() =>{
                          handleVIStatusChange("Rejected");
                          handleRejectpersonalinfo(['vehicleInfo.status']);
                        }}
                        >
                        <img src={CloseIcon} alt="Icon" />
                        Reject
                        </button>
                      </>
                    )}

                    {PIStatus === "Approved" && (
                      <>
                        <button className={styles.approvedButton}>
                        <img src={CloseIcon} alt="Icon" />
                        Approved
                        </button>
      
                        <button
                        className={styles.rejectButton}
                        onClick={() =>{
                          handleVIStatusChange("Rejected");
                          handleRejectpersonalinfo(['vehicleInfo.status']);
                        }}
                        >
                        <img src={CloseIcon} alt="Icon" />
                        Reject
                        </button>
                      </>
                    )}

                    {PIStatus === "Rejected" && (
                      <>
                        <button
                        className={styles.approveButton}
                        onClick={() => {
                          handlePIStatusChange("Approved");
                          handleApprovePersonalInfo(['vehicleInfo.status']);
                        }}
                        >
                        Approve
                        </button>
                        <button className={styles.rejectedButton}>
                        <img src={CloseIcon} alt="Icon" />
                        Rejected
                        </button>
                      </>
                    )}
                  </>
                </div>
              </div>

            </div>






            <div className={styles.documentContainer}>
              <div className={styles.documentContainer1}>
                <div className={styles.document1stContainer}>
                  <div className={styles.spanbadgeWrapper1}> 
                    <img
                       className={styles.spanavatarIcon}
                       alt=""
                       src={`/${getIconForStatus(ARStatus)}.svg`}  
                    />
                  </div> 
                  <p className={styles.docTitle}>Address and Routes</p>
                </div>

                <div className={styles.document3rdContainer}>
                  <>
                    {PIStatus === "Pending" && (
                      <>
                        <button
                        className={styles.approveButton}
                        onClick={() => {
                          handleARStatusChange("Approved");
                          handleApprovePersonalInfo(['AddressAndRoutes.status']);
                        }}
                        >
                        Approve
                        </button>

                        <button
                        className={styles.rejectButton}
                        onClick={() =>{
                          handleARStatusChange("Rejected");
                          handleRejectpersonalinfo(['AddressAndRoutes.status']);
                        }}
                        >
                        <img src={CloseIcon} alt="Icon" />
                        Reject
                        </button>
                      </>
                    )}

                    {PIStatus === "Approved" && (
                      <>
                        <button className={styles.approvedButton}>
                        <img src={CloseIcon} alt="Icon" />
                        Approved
                        </button>
      
                        <button
                        className={styles.rejectButton}
                        onClick={() =>{
                          handleARStatusChange("Rejected");
                          handleRejectpersonalinfo(['AddressAndRoutes.status']);
                        }}
                        >
                        <img src={CloseIcon} alt="Icon" />
                        Reject
                        </button>
                      </>
                    )}

                    {PIStatus === "Rejected" && (
                      <>
                        <button
                        className={styles.approveButton}
                        onClick={() => {
                          handleARStatusChange("Approved");
                          handleApprovePersonalInfo(['AddressAndRoutes.status']);
                        }}
                        >
                        Approve
                        </button>
                        <button className={styles.rejectedButton}>
                        <img src={CloseIcon} alt="Icon" />
                        Rejected
                        </button>
                      </>
                    )}
                  </>
                </div>
              </div>

            </div>
          </div>

        </div>

{/* ... (test) */}

        <div className={styles.attachedDocumentContainer}>
          <p className={styles.attachedDocument}>Attached Documents</p>
          
          <div className={styles.outerContainer}>
              <div className={styles.headers}>
                 <p>Document Type</p>
                 <p>Document</p>
                 <p>Status</p>
              </div>
          </div>

          <div className={styles.documentsContainerParent}>
            <div className={styles.documentContainer}>
              <div className={styles.documentContainer1}>
                <div className={styles.document1stContainer}>
                  {/* Icon */}
                  <p className={styles.docTitle}>Driving License</p>
                </div>
                <div className={styles.document2ndContainer}>
                  <img src={documentSVG} />
                  {/* <div className={styles.two}>2/2</div> */}
                  <img
                    src={CaretCircleDown}
                    alt="dropdown icon"
                    onClick={() => handleDropdownClick("DrivingLicense")}
                  />
                </div>
                <div className={styles.document3rdContainer}>
                  <button className={styles.approveButton} onClick={() => handleApprovePersonalInfo(['DrivingLicense.status'])}>Approve</button>
                  <button className={styles.rejectButton} onClick={() => handleRejectpersonalinfo(['DrivingLicense.status'])}>
                    <img src={CloseIcon} alt="Icon" />
                    Reject
                  </button>
                </div>
              </div>
              {drivingLicenseDropdown && (
                <div className={styles.dropdownContainer}>
                  <div className={styles.dropdown}>
                    <p className={styles.info}>
                      Driving License Number Plate -{" "}
                      <span className={styles.blueText}>2000235300851</span>
                    </p>
                    <p className={styles.info}>
                      Expiration Date -{" "}
                      <span className={styles.blueText}>12/08/2028</span>
                    </p>
                    <div className={styles.dropdownCaption}>
                      <div className={styles.greyText}>
                        My License Doesn't Have An Expiration Date (For Older
                        License)
                      </div>
                      <button className={styles.box}></button>
                    </div>
                    <div className={styles.dropdownContent}>
                      {/* Dropdown options */}
                      <div className={styles.miniDropdownContainer}>
                        <div className={styles.viewsTag}>Front View</div>
                        <div className={styles.uploadButtonContainer}>
                          <button className={styles.nameTag}>View</button>
                          <button className={styles.uploadBtn}>
                            <b className={styles.upld}>Upload</b>
                            <img alt="" src={uplo} />
                          </button>
                        </div>
                      </div>
                      <div className={styles.miniDropdownContainer}>
                        <div className={styles.viewsTag}>Back View</div>
                        <div className={styles.uploadButtonContainer}>
                          <button className={styles.nameTag}>View</button>
                          <button className={styles.uploadBtn}>
                            <b className={styles.upld}>Upload</b>
                            <img alt="" src={uplo} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.documentContainer}>
              <div className={styles.documentContainer1}>
                <div className={styles.docTitle}>
                  Nation Identity card (NIC)
                </div>
                <div className={styles.img}>
                  <img alt="" src={documentSVG} />

                  {/*<div className={styles.three}>2/2</div>  */}

                  <img
                    alt=""
                    onClick={() => handleDropdownClick("NIC")}
                    src={CaretCircleDown}
                  />
                </div>
                <div className={styles.document3rdContainer}>
                  <button className={styles.approveButton} onClick={() => handleApprovePersonalInfo(['NIC.status'])}>Approve</button>
                  <button className={styles.rejectButton} onClick={() => handleRejectpersonalinfo(['NIC.status'])}>
                    <img src={CloseIcon} alt="Icon" />
                    Reject
                  </button>
                </div>
              </div>
              {nicDropdown && (
                <div className={styles.drpdwn}>
                  <div className={styles.nictxt}>
                    <div className={styles.nicnum}>
                      <span>{`NIC number - `}</span>
                      <span className={styles.span}>
                        {driverInfo && driverInfo.NICNumber}
                      </span>
                    </div>
                  </div>
                  <div className={styles.frnt}>
                    <div className={styles.frntViw}>Front view</div>
                    <div className={styles.div}>
                      <button className={styles.viw}>View</button>
                      <button className={styles.but}>
                        <b className={styles.upld}>Upload</b>
                        <img alt="" src={uplo} />
                      </button>
                    </div>
                  </div>
                  <div className={styles.frnt}>
                    <div className={styles.frntViw}>Back view</div>
                    <div className={styles.div}>
                      <button className={styles.viw}>View</button>
                      <button className={styles.but}>
                        <b className={styles.upld}>Upload</b>
                        <img alt="" src={uplo} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>





            <div className={styles.documentContainer}>
              <div className={styles.documentContainer1}>
                <div className={styles.document1stContainer}>
                  {/*<div className={styles.spanbadgeWrapper1}>
                  <img className={styles.spanavatarIcon} 
                    alt="" src="/component-471.svg" />

                 </div> */}
                  <p className={styles.docTitle}>Vehicle Image</p>
                </div>
                <div className={styles.document2ndContainer}>
                  <img src={documentSVG} />
                  {/*<div className={styles.two}>2/2</div>  */}
                  <img
                    src={CaretCircleDown}
                    alt="dropdown icon"
                    onClick={() => handleDropdownClick("VehicleImage")}
                  />
                </div>
                <div className={styles.document3rdContainer}>
                  <button className={styles.approveButton} onClick={() => handleApprovePersonalInfo(['VehicleImage.status'])}>Approve</button>
                  <button className={styles.rejectButton} onClick={() => handleRejectpersonalinfo(['VehicleImage.status'])}>
                    <img src={CloseIcon} alt="Icon" />
                    Reject
                  </button>
                </div>
              </div>
              {vehicleImageDropdown && (
                <div className={styles.dropdownContainer}>
                  <div className={styles.dropdown}>
                    <p className={styles.info}>
                      Vehicle Condition -{" "}
                      <span className={styles.blueText}>Very good</span>
                    </p>

                    <div className={styles.dropdownContent}>
                      {/* Dropdown options */}
                      <div className={styles.miniDropdownContainer}>
                        <div className={styles.viewsTag}>Front View</div>
                        <div className={styles.uploadButtonContainer}>
                          <button className={styles.nameTag}>View</button>
                          <button className={styles.uploadBtn}>
                            <b className={styles.upld}>Upload</b>
                            <img alt="" src={uplo} />
                          </button>
                        </div>
                      </div>
                      <div className={styles.miniDropdownContainer}>
                        <div className={styles.viewsTag}>Back View</div>
                        <div className={styles.uploadButtonContainer}>
                          <button className={styles.nameTag}>View</button>
                          <button className={styles.uploadBtn}>
                            <b className={styles.upld}>Upload</b>
                            <img alt="" src={uplo} />
                          </button>
                        </div>
                      </div>
                      <div className={styles.miniDropdownContainer}>
                        <div className={styles.viewsTag}>Side View</div>
                        <div className={styles.uploadButtonContainer}>
                          <button className={styles.nameTag}>View</button>
                          <button className={styles.uploadBtn}>
                            <b className={styles.upld}>Upload</b>
                            <img alt="" src={uplo} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className={styles.documentContainer}>
              <div className={styles.documentContainer1}>
                <div className={styles.document1stContainer}>
                  {/* Icon */}
                  <p className={styles.docTitle}>Revenue License</p>
                </div>
                <div className={styles.document2ndContainer}>
                  <img src={documentSVG} />
                   {/*<div className={styles.two}>2/2</div>*/}
                  <img
                    src={CaretCircleDown}
                    alt="dropdown icon"
                    onClick={() => handleDropdownClick("Revenue License")}
                  />
                </div>
                <div className={styles.document3rdContainer}>
                  <button className={styles.approveButton} onClick={() => handleApprovePersonalInfo(['RevenueLicense.status'])}>Approve</button>
                  <button className={styles.rejectButton} onClick={() => handleRejectpersonalinfo(['RevenueLicense.status'])}>
                    <img src={CloseIcon} alt="Icon" />
                    Reject
                  </button>
                </div>
              </div>
              {revenueLicenseDropdown && (
                <div className={styles.drpdwn}>
                <p className={styles.info} style={{ left: "20px", position: "relative"}}>
                  Revenue License number -{" "}
                  <span className={styles.blueText}>1234567890</span>
                </p>
                  <div className={styles.frnt}>
                    <div className={styles.frntViw}>Front view</div>
                    <div className={styles.div}>
                      <button className={styles.viw}>View</button>
                      <button className={styles.but}>
                        <label htmlFor="fileInput" className={styles.upld}>
                          <b>Upload</b>
                        </label>
                        <input
                          style={{ display: "none" }}
                        />
                        <img alt="" src={uplo} />
                      </button>
                    </div>
                  </div>
                  <div className={styles.frnt}>
                    <div className={styles.frntViw}>Back view</div>
                    <div className={styles.div}>
                      <button className={styles.viw}>View</button>
                      <button className={styles.but}>
                          <label htmlFor="fileInput" className={styles.upld}>
                              <b>Upload</b>
                            </label>
                            <input

                              style={{ display: "none" }}

                            />
                            <img alt="" src={uplo} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className={styles.documentContainer}>
              <div className={styles.documentContainer1}>
                <div className={styles.document1stContainer}>
                  {/* Icon */}
                  <p className={styles.docTitle}>Vehicle Insurance</p>
                </div>
                <div className={styles.document2ndContainer}>
                  <img src={documentSVG} />
                  {/*<div className={styles.two}>2/2</div>  */}
                  <img
                    src={CaretCircleDown}
                    alt="dropdown icon"
                    onClick={() => handleDropdownClick("Vehicle Insurance")}
                  />
                </div>
                <div className={styles.document3rdContainer}>
                  <button className={styles.approveButton} onClick={() => handleApprovePersonalInfo(['VehicleInsuarance.status'])}>Approve</button>
                  <button className={styles.rejectButton} onClick={() => handleRejectpersonalinfo(['VehicleInsuarance.status'])}>
                    <img src={CloseIcon} alt="Icon" />
                    Reject
                  </button>
                </div>
              </div>
              {vehicleInsuranceDropdown && (
                <div className={styles.drpdwn}>
                  <div className={styles.frnt}>
                    <div className={styles.frntViw}>Image1</div>
                    <div className={styles.div}>
                      <button className={styles.viw}>View</button>
                      <button className={styles.but}>
                        <b className={styles.upld}>Upload</b>
                        <img alt="" src={uplo} />
                      </button>
                    </div>
                  </div>
                  <div className={styles.frnt}>
                    <div className={styles.frntViw}>Image2</div>
                    <div className={styles.div}>
                      <button className={styles.viw}>View</button>
                      <button className={styles.but}>
                        <b className={styles.upld}>Upload</b>
                        <img alt="" src={uplo} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className={styles.documentContainer}>
              <div className={styles.documentContainer1}>
                <div className={styles.document1stContainer}>
                  {/* Icon */}
                  <p className={styles.docTitle}>Billing Documents</p>
                </div>
                <div className={styles.document2ndContainer}>
                  <img src={documentSVG} />
                  {/*<div className={styles.two}>2/2</div>  */}
                  <img
                    src={CaretCircleDown}
                    alt="dropdown icon"
                    onClick={() => handleDropdownClick("Billing Documents")}
                  />
                </div>
                <div className={styles.document3rdContainer}>
                  <button className={styles.approveButton} onClick={() => handleApprovePersonalInfo(['BillingDocuments.status'])}>Approve</button>
                  <button className={styles.rejectButton} onClick={() => handleRejectpersonalinfo(['BillingDocuments.status'])}>
                    <img src={CloseIcon} alt="Icon" />
                    Reject
                  </button>
                </div>
              </div>
              {billingDocDropdown && (
                <div className={styles.drpdwn}>
                  <div className={styles.frnt}>
                    <div className={styles.frntViw}>Image1</div>
                    <div className={styles.div}>
                      <button className={styles.viw}>View</button>
                      <button className={styles.but}>
                        <b className={styles.upld}>Upload</b>
                        <img alt="" src={uplo} />
                      </button>
                    </div>
                  </div>
                  <div className={styles.frnt}>
                    <div className={styles.frntViw}>Image2</div>
                    <div className={styles.div}>
                      <button className={styles.viw}>View</button>
                      <button className={styles.but}>
                        <b className={styles.upld}>Upload</b>
                        <img alt="" src={uplo} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            
              
          </div>
            
        </div>
      </section>
      <div className={styles.prof}>
        <img className={styles.Icon} alt="" src={imageUrl} />
        <label htmlFor="file-upload">
          <img className={styles.Icon2} alt="" src="/notepencil.svg" />
        </label>
        <input id="file-upload" type="file" onChange={handleImageUpload} style={{ display: 'none' }} />
        <div className={styles.headtext}>
          <div className={styles.b}>{driverInfo && driverInfo.name}</div>
          {/*<div className={styles.a}>#100485A</div>  */}
        </div>
      </div>
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
