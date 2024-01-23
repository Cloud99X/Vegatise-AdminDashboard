import { useCallback } from "react";
import "antd/dist/antd.min.css";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import styles from "./ComingSoon.module.css";
import { useState, useEffect } from "react";

import { collection, getDocs } from 'firebase/firestore';
import firebaseApp from './firebase'; // Adjust the path based on your file structure
import { getFirestore } from "firebase/firestore";


const ComingSoon = () => {
  const navigate = useNavigate();
  const [personalInfo, setPersonalInfo] = useState(null);

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

  useEffect(() => {
    const fetchPersonalInfo = async () => {
      try {
        const db = getFirestore(firebaseApp)
        const personalInfoCollection = collection(db, 'PersonalInfomation');
        const querySnapshot = await getDocs(personalInfoCollection);
        // Assuming there is only one document, use .docs[0] to get it
        const doc = querySnapshot.docs[0];
        if (doc.exists()) {
          // Extract data from the document
          const data = doc.data();
          setPersonalInfo(data);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching personal information:', error);
      }
    };

    fetchPersonalInfo();
  }, []);

  return (
    <div className={styles.comingSoon}>
      <div className={styles.headerheaderParent}>
        <div className={styles.headerheader}>
          <img
            className={styles.divheaderWrapperIcon}
            alt=""
            src="/divheaderwrapper.svg"
          />
          <div className={styles.divheaderAction}>
            <div className={styles.divheaderActionItem} />
            <div className={styles.divheaderActionItem}>
              <div className={styles.spanbadgeWrapper}>
                <img className={styles.svgIcon} alt="" src="/svg.svg" />
                <div className={styles.spanbadgeDot} />
              </div>
            </div>
            <img className={styles.divIcon} alt="" src="/div.svg" />
            <div className={styles.divheaderActionItem1}>
              <img
                className={styles.spanavatarIcon}
                alt=""
                src="/spanavatar9.svg"
              />
              <div className={styles.divhidden}>
                <div className={styles.divtextXs}>
                  <div className={styles.admin}>Admin</div>
                </div>
                <div className={styles.divfontBold}>
                  <b className={styles.abdurrahman}>Abdurrahman</b>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.driverList}>Driver List</div>
        <div
          className={styles.manageYourDrivers}
        >{`Manage your Driver’s list easily and safely `}</div>
        <InputGroup className={styles.searchbar2Fig4} width="250px" w="250px">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input variant="outline" placeholder="Search" size="sm" />
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
            {`Filter `}
            <DownOutlined />
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
            {`View all leads `}
            <DownOutlined />
          </Button>
        </Dropdown>
        <button
          className={styles.frameChild}
          onClick={onRectangleButtonClick}
        />
        <div> <a  onClick={() => navigate("/driver-profile-detail")}><div  className={styles.frameItem} /></a></div> 
        <div className={styles.rectangleParent}>
          <div className={styles.frameInner}><a  onClick={() => navigate("/driver-profile-detail")}><div className={styles.rectangleDiv} /></a></div> 
          <img className={styles.vectorIcon} alt="" src="/vector53@2x.png" />
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner}><a  onClick={() => navigate("/driver-profile-detail")}><div className={styles.rectangleDiv} /></a></div> 
          <img className={styles.vectorIcon} alt="" src="/vector54@2x.png" />
        </div>
        <div className={styles.rectangleContainer}>
          <div className={styles.frameInner}><a  onClick={() => navigate("/driver-profile-detail")}><div className={styles.rectangleDiv} /></a></div> 
          <img className={styles.vectorIcon} alt="" src="/vector55@2x.png" />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.frameInner}><a  onClick={() => navigate("/driver-profile-detail")}><div className={styles.rectangleDiv} /></a></div> 
          <img className={styles.vectorIcon} alt="" src="/vector56@2x.png" />
        </div>
        <div className={styles.rectangleParent1}>
          <div className={styles.frameInner}><a  onClick={() => navigate("/driver-profile-detail")}><div className={styles.rectangleDiv} /></a></div> 
          <img className={styles.vectorIcon} alt="" src="/vector57@2x.png" />
        </div>
        <div className={styles.rectangleParent2}>
          <div className={styles.frameInner}><a  onClick={() => navigate("/driver-profile-detail")}><div className={styles.rectangleDiv} /></a></div> 
          <img className={styles.vectorIcon} alt="" src="/vector53@2x.png" />
        </div>
        <div className={styles.rectangleParent3}>
          <div className={styles.frameInner}><a  onClick={() => navigate("/driver-profile-detail")}><div className={styles.rectangleDiv} /></a></div> 
          <img className={styles.vectorIcon} alt="" src="/vector58@2x.png" />
        </div>
       
        <table >
         

          
         <thead>
          <tr className={styles.name}>
           <th></th>
           <th className={styles.nameParent}>Name</th>
           <th className={styles.jacksongrahamexamplecomParent}>Email</th>
           <th className={styles.parent}>Phone number</th>
           <th className={styles.inProgressParent}>Status</th>
           <th className={styles.nov5202043543Parent}>Date modified</th>
          </tr>
         </thead>
         <tbody>
            {personalInfo && (
          <tr>
           <td>
            <div className={styles.nameParent}>
                  <div className={styles.jacobJones} >{personalInfo.name}</div>
            </div>
           </td>
              <td className={styles.jacksongrahamexamplecomParent}> <div className={styles.jacksongrahamexamplecom}>{personalInfo.email}</div>
           </td>
           <td className={styles.parent}><div className={styles.inProgress}>(225) 555-0118</div></td>
           <td className={styles.inProgressParent}><div className={styles.inProgress}>In Progress</div></td>
           <td className={styles.nov5202043543Parent}><div className={styles.inProgress}>Nov 5, 2020, 4:35:43</div></td>
          </tr> 
            )}
          
         </tbody>
        </table>  
        
          
          
         
          
          
          
          
          
          
        
        <img className={styles.vectorIcon7} alt="" src="/vector58@2x.png" />
        

        <img className={styles.groupIcon} alt="" src="/group-1898.svg" />
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
              <img className={styles.growthIcon} alt="" src="/growth3.svg" />
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
                src="/rocketlaunch3.svg"
              />
              <div className={styles.analytics}>Drivers information</div>
            </button>
            <div className={styles.frameChild13} />
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
          <img className={styles.groupChild} alt="" src="/ellipse-1@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
