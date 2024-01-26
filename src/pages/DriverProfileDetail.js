import { useCallback } from "react";
import { Input } from "@chakra-ui/react";

import styles from "./DriverProfileDetail.module.css";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { collection, getDoc, doc, onSnapshot, docSnapshot, } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import firebaseApp from './firebase'; 


const DriverProfileDetail = () => {
  const { documentId } = useParams();
  const navigate = useNavigate();
  const [driverInfo, setDriverInfo] = useState(null);



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



  useEffect(() => {
    const fetchDriverInfo = async () => {
      try {
        const db = getFirestore(firebaseApp);


        const personalInfoCollection = collection(db, 'PersonalInfomation');
        const personalInfoDocRef = doc(personalInfoCollection, documentId);
        const personalInfoDocSnapshot = await getDoc(personalInfoDocRef);


        const nicNumberCollection = collection(db, 'NIC Number');
        const nicNumberDocRef = doc(nicNumberCollection, documentId);
        const nicNumberDocSnapshot = await getDoc(nicNumberDocRef);

        if (personalInfoDocSnapshot.exists() && nicNumberDocSnapshot.exists()) {
          const personalInfoData = personalInfoDocSnapshot.data();
          const nicNumberData = nicNumberDocSnapshot.data();


          const mergedData = { ...personalInfoData, ...nicNumberData };

          setDriverInfo(mergedData);
        } else {
          console.error('Document not found for ID:', documentId);
          setDriverInfo(null); 
        }
      } catch (error) {
        console.error('Error fetching driver information for ID:', documentId, error);
      }
    };

    fetchDriverInfo();
  }, [documentId]);

  return (
    <div className={styles.driverProfileDetail}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.driverProfile}>Driver Profile</div>
        <div className={styles.profile}>
          <div className={styles.profileChild} />
          <div className={styles.profileInner}>
            <div className={styles.personalInfoParent}>
              <b className={styles.personalInfo}>personal info</b>
              <div className={styles.groupParent}>
                <div className={styles.fullNameParent}>
                  <div className={styles.fullName}>Full Name</div>
                  <div className={styles.charinduUdanthaEdirisuriya}>
                    {driverInfo && driverInfo.name}
                  </div>
                </div>
                <div className={styles.fullNameWithInitialsParent}>
                  <div className={styles.fullName}>Full Name with Initials</div>
                  <div className={styles.cuEdirisuriya}>{/*Need to Add */}</div>
                </div>
                <div className={styles.udantha15gmailcomParent}>
                  <div className={styles.udantha15gmailcom}>
                    {driverInfo && driverInfo.email}
                  </div>
                  <div className={styles.email}>Email</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.udantha15gmailcom}>{driverInfo && driverInfo.mobileNumber}</div>
                  <div className={styles.email}>Phone</div>
                </div>
                <div className={styles.group}>
                  <div className={styles.udantha15gmailcom}>{driverInfo && driverInfo.dateOfBirth}</div>
                  <div className={styles.email}>Date of birth</div>
                </div>
                <div className={styles.ageCategoryParent}>
                  <div className={styles.ageCategory}>age category</div>
                  <div className={styles.cuEdirisuriya}>{/*Need to Add */}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.routeInfoParent}>
              <b className={styles.personalInfo}>route info</b>
              <div className={styles.groupContainer}>
                <div className={styles.mainRoadAthidiyaDehiwalaParent}>
                  <div className={styles.mainRoadAthidiyaContainer}>
                    <p className={styles.mainRoadAthidiya}>
                      143, Main Road, Athidiya, Dehiwala,
                    </p>
                    <p className={styles.mainRoadAthidiya}>
                      Colombo, Western, 10350
                    </p>
                  </div>
                  <div className={styles.email}>Address line 1</div>
                </div>
                <div className={styles.mainRoadAthidiyaDehiwalaGroup}>
                  <div className={styles.udantha15gmailcom}>
                    143, Main Road, Athidiya, Dehiwala,
                  </div>
                  <div className={styles.email}>Address line 2</div>
                </div>
                <div className={styles.kmParent}>
                  <div className={styles.udantha15gmailcom}>
                    100,000 - 150,000 KM
                  </div>
                  <div className={styles.email}>
                    Average kilometers (KM) per day
                  </div>
                </div>
                <div className={styles.colomboParent}>
                  <div className={styles.colombo}>Colombo</div>
                  <div className={styles.email}>
                    on average which routes do you travel
                  </div>
                </div>
                <div className={styles.technologyParent}>
                  <div className={styles.colombo}>technology</div>
                  <div className={styles.email}>Occupation</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.groupParent2}>
            <div className={styles.educationLevelParent}>
              <div className={styles.ageCategory}>education level</div>
              <div className={styles.cuEdirisuriya}>{/*Need to Add */}</div>
            </div>
            <div className={styles.singleParent}>
              <div className={styles.colombo}>{/*Need to Add */}</div>
              <div className={styles.email}>Marital Status</div>
            </div>
            <div className={styles.container}>
              <div className={styles.udantha15gmailcom}>{driverInfo && driverInfo.NICNumber}</div>
              <div className={styles.email}>National Id Number</div>
            </div>
            <div className={styles.n455346Parent}>
              <div className={styles.udantha15gmailcom}>{/*Need to Add */}</div>
              <div className={styles.email}>Passport Number</div>
            </div>
            <div className={styles.lkParent}>
              <div className={styles.udantha15gmailcom}>{/*Need to Add */}</div>
              <div className={styles.email}>Nationality</div>
            </div>
            <div className={styles.mainRoadAthidiyaDehiwalaContainer}>
              <div className={styles.udantha15gmailcom}>
                <p className={styles.mainRoadAthidiya}>
                  143, Main Road, Athidiya, Dehiwala,
                </p>
                <p className={styles.mainRoadAthidiya}>
                  Colombo, Western, 10350
                </p>
              </div>
              <div className={styles.email}>Home Address</div>
            </div>
          </div>
          <b className={styles.vehicleInfo}>Vehicle info</b>
        </div>
        <div className={styles.dateCreated04032023}>
          Date created 04.03.2023
        </div>
        <a href="/about-campaign">
        <button className={styles.rectangleContainermap} onClick={onComponent11Click}>
        <div className={styles.mapgroupItem} />
        <div className={styles.map}>Map</div>
        </button>
        </a>
        

        <button className={styles.rectangleGroup}>
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
        <button className={styles.rectangleContainer}>
          <div className={styles.groupItem} />
          <div className={styles.saveChanges}>Save changes</div>
        </button>
        <div className={styles.rectangleParent1}>
          <div className={styles.groupInner} />
          <i className={styles.search}>Search</i>
          <img
            className={styles.iconsearchNormal}
            alt=""
            src="/iconsearchnormal.svg"
          />
          <div className={styles.avatar}>
            <img className={styles.image53Icon} alt="" src="/image-53@2x.png" />
            <img className={styles.image55Icon} alt="" src="/image-55@2x.png" />
            <img className={styles.image56Icon} alt="" src="/image-56@2x.png" />
          </div>
          <img
            className={styles.iconnotificationBing}
            alt=""
            src="/iconnotificationbing1.svg"
          />
          <img
            className={styles.iconmessages2}
            alt=""
            src="/iconmessages21.svg"
          />
          <Input className={styles.searchbar2Fig4} width="639px" w="639px" />
          <div className={styles.avatar1}>
            <img className={styles.image54Icon} alt="" src="/image-54@2x.png" />
            <img
              className={styles.image55Icon1}
              alt=""
              src="/image-551@2x.png"
            />
          </div>
        </div>
        <div className={styles.attachedDocuments}>Attached Documents</div>
        <div className={styles.activityLog}>Activity Log</div>
        <div className={styles.frameDiv}>
          <div className={styles.frameItem} />
          <div className={styles.d}>
            <div className={styles.checklistDesignChallengeV2} />
          </div>
          <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
          <div className={styles.drivingLisence}>Driving lisence</div>
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameItem} />
          <div className={styles.d}>
            <div className={styles.checklistDesignChallengeV2} />
          </div>
          <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
          <div className={styles.drivingLisence}>Insurance lisence</div>
          <div className={styles.spanbadgeWrapper} />
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.frameItem} />
          <div className={styles.d}>
            <div className={styles.checklistDesignChallengeV2} />
          </div>
          <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
          <div className={styles.nic}>NIC</div>
        </div>
        <div className={styles.rectangleParent4}>
          <div className={styles.frameItem} />
          <div className={styles.d}>
            <div className={styles.checklistDesignChallengeV2} />
          </div>
          <img className={styles.iconstar} alt="" src="/svgjsline10698.svg" />
          <div className={styles.vehicleImage}>Vehicle image</div>
          <div className={styles.spanbadgeWrapperParent}>
            <div className={styles.spanbadgeWrapper1}>
              <img
                className={styles.spanavatarIcon}
                alt=""
                src="/spanavatar1.svg"
              />
              <div className={styles.spanbadge}>
                <div className={styles.open}>Open</div>
              </div>
            </div>
            <div className={styles.spanbadgeWrapper2}>
              <img
                className={styles.spanavatarIcon}
                alt=""
                src="/spanavatar1.svg"
              />
              <div className={styles.spanbadge}>
                <div className={styles.open}>Open</div>
              </div>
            </div>
            <div className={styles.spanbadgeWrapper3}>
              <img
                className={styles.spanavatarIcon}
                alt=""
                src="/spanavatar1.svg"
              />
              <div className={styles.spanbadge}>
                <div className={styles.open}>Open</div>
              </div>
            </div>
            <div className={styles.spanbadgeWrapper4}>
              <img
                className={styles.spanavatarIcon}
                alt=""
                src="/spanavatar1.svg"
              />
              <div className={styles.spanbadge}>
                <div className={styles.open}>Open</div>
              </div>
            </div>
          </div>
          <div className={styles.divParent}>
            <div className={styles.div4}>
              <button className={styles.buttonbutton}>
                <div className={styles.spanflex}>
                  <img
                    className={styles.spantextLgIcon}
                    alt=""
                    src="/spantextlg.svg"
                  />
                  <b className={styles.approved}>Approved</b>
                </div>
              </button>
              <button className={styles.buttonbutton1}>
                <div className={styles.spanflex1}>
                  <img
                    className={styles.spantextLgIcon1}
                    alt=""
                    src="/spantextlg1.svg"
                  />
                  <div className={styles.reject}>Reject</div>
                  <img
                    className={styles.spantextLgIcon1}
                    alt=""
                    src="/spantextlg1.svg"
                  />
                  <div className={styles.reject}>Reject</div>
                </div>
              </button>
            </div>
            <div className={styles.div5}>
              <button className={styles.buttonbutton}>
                <div className={styles.spanflex}>
                  <img
                    className={styles.spantextLgIcon}
                    alt=""
                    src="/spantextlg.svg"
                  />
                  <b className={styles.approved}>Approved</b>
                </div>
              </button>
              <button className={styles.buttonbutton1}>
                <div className={styles.spanflex3} />
                <img
                  className={styles.spantextLgIcon4}
                  alt=""
                  src="/spantextlg1.svg"
                />
                <div className={styles.reject2}>Reject</div>
              </button>
            </div>
            <div className={styles.div6}>
              <button className={styles.buttonbutton}>
                <div className={styles.spanflex}>
                  <img
                    className={styles.spantextLgIcon}
                    alt=""
                    src="/spantextlg.svg"
                  />
                  <b className={styles.approved}>Approved</b>
                </div>
              </button>
              <button className={styles.buttonbutton1}>
                <img
                  className={styles.spantextLgIcon4}
                  alt=""
                  src="/spantextlg1.svg"
                />
                <div className={styles.reject2}>Reject</div>
              </button>
            </div>
            <div className={styles.div7}>
              <button className={styles.buttonbutton}>
                <div className={styles.spanflex}>
                  <img
                    className={styles.spantextLgIcon}
                    alt=""
                    src="/spantextlg.svg"
                  />
                  <b className={styles.approved}>Approved</b>
                </div>
              </button>
              <button className={styles.buttonbutton1}>
                <img
                  className={styles.spantextLgIcon4}
                  alt=""
                  src="/spantextlg1.svg"
                />
                <div className={styles.reject2}>Reject</div>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.documentType}>Document Type</div>
        <div className={styles.document}>Document</div>
        <div className={styles.status}>Status</div>
        <div className={styles.frameChild2} />
        
      </div>
      <div className={styles.navbar}>
        <div className={styles.divlogo}>
          <div className={styles.logo}>
            <img
              className={styles.asset84xIcon}
              alt=""
              src="/asset-84x@2x.png"
            />
          </div>
        </div>
        <div className={styles.menuItem}>
          <div className={styles.component1Wrapper}>
            <button className={styles.component1} onClick={onComponent1Click}>
              <img className={styles.growthIcon} alt="" src="/growth1.svg" />
              <div className={styles.myGroup}>Analytics</div>
            </button>
          </div>
          <div className={styles.component1Wrapper}>
            <button className={styles.component1} onClick={onComponent11Click}>
              <img className={styles.growthIcon} alt="" src="/carprofile.svg" />
              <div className={styles.myGroup}>About campaign</div>
            </button>
          </div>
          <div className={styles.frameParent}>
            <button className={styles.rocketlaunchParent}>
              <img
                className={styles.growthIcon}
                alt=""
                src="/rocketlaunch1.svg"
              />
              <div className={styles.analytics}>Drivers information</div>
            </button>
            <div className={styles.frameChild3} />
          </div>
          <div className={styles.component1Wrapper}>
            <button className={styles.component1} onClick={onComponent12Click}>
              <img
                className={styles.growthIcon}
                alt=""
                src="/arrowscounterclockwise.svg"
              />
              <div className={styles.myGroup}>Retargeting</div>
            </button>
          </div>
          <div className={styles.component1Wrapper}>
            <button className={styles.component1} onClick={onComponent13Click}>
              <img
                className={styles.growthIcon}
                alt=""
                src="/dollar-coin.svg"
              />
              <div className={styles.myGroup}>Billing</div>
            </button>
          </div>
          <div className={styles.component1Wrapper}>
            <button className={styles.component1} onClick={onComponent14Click}>
              <img className={styles.growthIcon} alt="" src="/setting.svg" />
              <div className={styles.myGroup}>Settings</div>
            </button>
          </div>
        </div>
        <div className={styles.logoutParent}>
          <div className={styles.logout}>
            <div className={styles.theresaMillyParent}>
              <div className={styles.theresaMilly}>popeyes</div>
              <div className={styles.influencer}>Brand</div>
            </div>
            <button
              className={styles.logoutGroup}
              onClick={onFrameButton1Click}
            >
              <img className={styles.growthIcon} alt="" src="/logout.svg" />
              <div className={styles.logout1}>Logout</div>
            </button>
          </div>
          <img className={styles.ellipseIcon} alt="" src="/ellipse-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default DriverProfileDetail;
