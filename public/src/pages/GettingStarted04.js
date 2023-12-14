import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./GettingStarted04.module.css";

const GettingStarted04 = () => {
  const navigate = useNavigate();

  const onIconlyClick = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  return (
    <div className={styles.gettingStarted04}>
      <img
        className={styles.iphoneXOrNewer}
        alt=""
        src="/iphone-x-or-newer.svg"
      />
      <button className={styles.iconly} onClick={onIconlyClick}>
        <button className={styles.iconlytwoTonearrowLeft2}>
          <img
            className={styles.iconlytwoTonearrowLeft21}
            alt=""
            src="/iconlytwotonearrow--left-22.svg"
          />
        </button>
      </button>
      <div className={styles.frameParent}>
        <div className={styles.requiredStepsParent}>
          <b className={styles.requiredSteps}>required steps</b>
          <div className={styles.heresWhatYou}>
            Heres what you need to do to set up your account
          </div>
        </div>
        <div className={styles.instanceParent}>
          <button className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-47.svg"
                />
                <div className={styles.personalInformation}>
                  personal information
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft1.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameGroup}>
            <div className={styles.frameDiv}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-47.svg"
                />
                <div className={styles.personalInformation}>
                  vehicle information
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft1.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameGroup}>
            <div className={styles.frameParent2}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-47.svg"
                />
                <div className={styles.personalInformation}>
                  address and routes
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft1.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameGroup}>
            <div className={styles.frameParent4}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-471.svg"
                />
                <div className={styles.personalInformation}>
                  driving license
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft1.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameGroup}>
            <div className={styles.frameParent6}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-471.svg"
                />
                <div className={styles.personalInformation}>
                  NIC Information
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft1.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameGroup}>
            <div className={styles.frameParent8}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-471.svg"
                />
                <div className={styles.personalInformation}>Vehicle image</div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft1.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameGroup}>
            <div className={styles.frameParent10}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-471.svg"
                />
                <div className={styles.personalInformation}>
                  vehicle registration document
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft1.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameGroup}>
            <div className={styles.frameParent12}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-471.svg"
                />
                <div className={styles.personalInformation}>
                  vehicle insurance
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft1.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
          <button className={styles.frameGroup}>
            <div className={styles.frameParent14}>
              <div className={styles.component47Parent}>
                <img
                  className={styles.component47Icon}
                  alt=""
                  src="/component-472.svg"
                />
                <div className={styles.personalInformation}>
                  billing proof (optional)
                </div>
              </div>
              <img
                className={styles.arrowLeftIcon}
                alt=""
                src="/arrowleft1.svg"
              />
            </div>
            <div className={styles.approvedParent}>
              <div className={styles.approved}>approved</div>
              <div className={styles.frameChild} />
            </div>
          </button>
        </div>
      </div>
      <div className={styles.homeindicator}>
        <div className={styles.homeindicator1}>
          <div className={styles.homeIndicator} />
        </div>
      </div>
    </div>
  );
};

export default GettingStarted04;
