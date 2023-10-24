import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Retargetting.module.css";

const Retargetting = () => {
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
    navigate("/billing");
  }, [navigate]);

  const onComponent14Click = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.retargetting}>
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
                src="/spanavatar6.svg"
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
        <b className={styles.thisFeatureIn}>
          This feature in under research and development
        </b>
        <img
          className={styles.imageVectorIcon}
          alt=""
          src="/image-vector.svg"
        />
        <div className={styles.getExclusiveEarlyAccessToParent}>
          <div className={styles.getExclusiveEarly}>
            Get exclusive early access to our upcoming features! Join the beta
            test now and share your feedback to shape the future of our product.
          </div>
          <a className={styles.requestAccess}>Request Access</a>
          <img
            className={styles.image7AdobeExpress1}
            alt=""
            src="/image-7-adobe-express-11.svg"
          />
        </div>
        <div className={styles.cantWait}>Can’t wait ?</div>
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
          <div className={styles.component1Wrapper}>
            <button className={styles.component1} onClick={onComponent12Click}>
              <img
                className={styles.growthIcon}
                alt=""
                src="/rocketlaunch.svg"
              />
              <div className={styles.myGroup}>Attribution</div>
            </button>
          </div>
          <div className={styles.frameParent}>
            <button className={styles.arrowscounterclockwiseParent}>
              <img
                className={styles.growthIcon}
                alt=""
                src="/arrowscounterclockwise1.svg"
              />
              <div className={styles.analytics}>Retargeting</div>
            </button>
            <div className={styles.frameChild} />
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

export default Retargetting;
