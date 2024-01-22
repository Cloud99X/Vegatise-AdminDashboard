import { useCallback } from "react";
import { Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styles from "./DriverProfileDetail.module.css";

const DriverProfileDetail = () => {
  const navigate = useNavigate();

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
                    Charindu Udantha Edirisuriya
                  </div>
                </div>
                <div className={styles.fullNameWithInitialsParent}>
                  <div className={styles.fullName}>Full Name with Initials</div>
                  <div className={styles.cuEdirisuriya}>C.U Edirisuriya</div>
                </div>
                <div className={styles.udantha15gmailcomParent}>
                  <div className={styles.udantha15gmailcom}>
                    udantha15@gmail.com
                  </div>
                  <div className={styles.email}>Email</div>
                </div>
                <div className={styles.parent}>
                  <div className={styles.udantha15gmailcom}>+94775248346</div>
                  <div className={styles.email}>Phone</div>
                </div>
                <div className={styles.group}>
                  <div className={styles.udantha15gmailcom}>1999-08-14</div>
                  <div className={styles.email}>Date of birth</div>
                </div>
                <div className={styles.ageCategoryParent}>
                  <div className={styles.ageCategory}>age category</div>
                  <div className={styles.cuEdirisuriya}>20 - 25</div>
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
              <div className={styles.cuEdirisuriya}>Diploma</div>
            </div>
            <div className={styles.singleParent}>
              <div className={styles.colombo}>single</div>
              <div className={styles.email}>Marital Status</div>
            </div>
            <div className={styles.container}>
              <div className={styles.udantha15gmailcom}>199922810193</div>
              <div className={styles.email}>National Id Number</div>
            </div>
            <div className={styles.n455346Parent}>
              <div className={styles.udantha15gmailcom}>N455346</div>
              <div className={styles.email}>Passport Number</div>
            </div>
            <div className={styles.lkParent}>
              <div className={styles.udantha15gmailcom}>LK</div>
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
        <div className={styles.div8}>
          <div className={styles.div9}>
            <div className={styles.div10}>
              <div className={styles.div11}>
                <div className={styles.sunday06March}>SUNDAY, 06 MARCH</div>
              </div>
              <div className={styles.ultimeline}>
                <div className={styles.divtimelineItemWrapper}>
                  <div className={styles.divtimelineItemMedia}>
                    <div className={styles.spanavatar}>
                      <div className={styles.cp}>CP</div>
                    </div>
                    <div className={styles.divtimelineConnect} />
                  </div>
                  <div className={styles.p}>
                    <div className={styles.spanbadgeDot} />
                    <div className={styles.pm}>08:50 PM</div>
                    <div className={styles.approved4}>Approved</div>
                    <div className={styles.statusTo}>status to</div>
                    <div className={styles.passport}>Passport</div>
                    <div className={styles.hasChange}>has change</div>
                    <div className={styles.carolynPerkins}>Carolyn Perkins</div>
                  </div>
                </div>
                <div className={styles.divtimelineItemWrapper1}>
                  <div className={styles.divtimelineItemMedia1}>
                    <div className={styles.spanavatar1}>
                      <img
                        className={styles.imgavatarImgIcon}
                        alt=""
                        src="/imgavatarimg@2x.png"
                      />
                      <img
                        className={styles.imgavatarImgIcon1}
                        alt=""
                        src="/imgavatarimg1@2x.png"
                      />
                      <img
                        className={styles.imgavatarImgIcon}
                        alt=""
                        src="/imgavatarimg2@2x.png"
                      />
                    </div>
                    <div className={styles.divtimelineConnect1} />
                  </div>
                  <div className={styles.div12}>
                    <div className={styles.p1}>
                      <div className={styles.pm1}>08:23 PM</div>
                      <div className={styles.post}>Post</div>
                      <div className={styles.commentOnYour}>
                        comment on your
                      </div>
                      <div className={styles.ronVargas}>Ron Vargas</div>
                    </div>
                    <div className={styles.divcard}>
                      <div className={styles.divcardBody}>
                        <div className={styles.fineJavaMightContainer}>
                          <span className={styles.fineJavaMightContainer1}>
                            <p className={styles.mainRoadAthidiya}>
                              Fine, Java MIGHT be a good example of what a
                              programming language should be like. But Java
                            </p>
                            <p className={styles.mainRoadAthidiya}>
                              applications are good examples of what
                              applications SHOULDN'T be like.
                            </p>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divtimelineItemWrapper2}>
                  <div className={styles.divtimelineItemMedia}>
                    <img
                      className={styles.spanavatarIcon4}
                      alt=""
                      src="/spanavatar2.svg"
                    />
                    <div className={styles.divtimelineConnect2} />
                  </div>
                  <div className={styles.divflex}>
                    <div className={styles.spanfontSemibold}>
                      <div className={styles.joyceFreeman}>Joyce Freeman</div>
                    </div>
                    <div className={styles.divtag}>
                      <div className={styles.spantagAffix} />
                      <div className={styles.liveIssue}>Live Issue</div>
                    </div>
                    <div className={styles.divtag1}>
                      <div className={styles.spantagAffix1} />
                      <div className={styles.backend}>Backend</div>
                    </div>
                    <div className={styles.pm2}>07:10 PM</div>
                    <div className={styles.addedTags}>added tags</div>
                  </div>
                </div>
                <div className={styles.divtimelineItemWrapper3}>
                  <div className={styles.divtimelineItemMedia}>
                    <img
                      className={styles.spanavatarIcon4}
                      alt=""
                      src="/spanavatar3.svg"
                    />
                    <div className={styles.divtimelineConnect2} />
                  </div>
                  <div className={styles.divflex1}>
                    <div className={styles.spanfontSemibold1}>
                      <div className={styles.lukeCook}>Luke Cook</div>
                    </div>
                    <div className={styles.spanfontSemibold2}>
                      <div className={styles.pd1092}>PD-1092</div>
                    </div>
                    <div className={styles.pm3}>05:48 PM</div>
                    <div className={styles.toTicket}>to ticket</div>
                    <div className={styles.documentcsv}>document.csv</div>
                    <div className={styles.added}>added</div>
                  </div>
                </div>
                <div className={styles.divtimelineItemWrapper4}>
                  <div className={styles.divtimelineItemMedia1}>
                    <div className={styles.spanavatar1}>
                      <img
                        className={styles.imgavatarImgIcon}
                        alt=""
                        src="/imgavatarimg3@2x.png"
                      />
                    </div>
                    <div className={styles.divtimelineConnect1} />
                  </div>
                  <div className={styles.div12}>
                    <div className={styles.p1}>
                      <div className={styles.pm4}>04:47 PM</div>
                      <div className={styles.post1}>Post</div>
                      <div className={styles.mentionedYouIn}>
                        mentioned you in a comment
                      </div>
                      <div className={styles.taraFletcher}>Tara Fletcher</div>
                    </div>
                    <div className={styles.divcard}>
                      <div className={styles.divcardBody}>
                        <div className={styles.oneOfThe}>
                          One of the main causes of the fall of the Roman Empire
                          was that-lacking zero-they
                        </div>
                        <div className={styles.hadNoWay}>
                          had no way to indicate successful termination of their
                          C programs.
                        </div>
                        <b className={styles.carolyn}>@Carolyn</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.divtimelineItemWrapper5}>
                  <div className={styles.spanavatar3}>
                    <div className={styles.lw}>LW</div>
                  </div>
                  <div className={styles.divflex2}>
                    <div className={styles.spanfontSemibold3}>
                      <div className={styles.leeWheeler}>Lee Wheeler</div>
                    </div>
                    <div className={styles.spanfontSemibold4}>
                      <div className={styles.gailBarnes}>Gail Barnes</div>
                    </div>
                    <div className={styles.pm5}>01:43 PM</div>
                    <div className={styles.to}>to</div>
                    <div className={styles.pd10921}>PD-1092</div>
                    <div className={styles.assignedTicket}>assigned ticket</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.buttonbutton8}>
              <div className={styles.loadMore}>Load More</div>
            </div>
          </div>
        </div>
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
