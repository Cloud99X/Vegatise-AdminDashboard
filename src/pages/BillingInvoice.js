import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BillingInvoice.module.css";

const BillingInvoice = () => {
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
    navigate("/retargetting");
  }, [navigate]);

  const onFrameButtonClick = useCallback(() => {
    navigate("/billing");
  }, [navigate]);

  const onComponent14Click = useCallback(() => {
    navigate("/setting");
  }, [navigate]);

  const onFrameButton1Click = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  return (
    <div className={styles.billingInvoice}>
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
                src="/spanavatar4.svg"
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
        <div className={styles.divcard}>
          <div className={styles.divcardBody}>
            <div className={styles.divflex}>
              <div className={styles.div1}>
                <div className={styles.divlogo}>
                  <div className={styles.logo}>
                    <img
                      className={styles.asset84xIcon}
                      alt=""
                      src="/asset-84x2@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.div2}>
                  <div className={styles.abbr}>
                    <div className={styles.phone}>Phone:</div>
                  </div>
                  <div className={styles.div3}>(94) 76-901-6271</div>
                  <div className={styles.dehiwallaColombo}>
                    Dehiwalla, Colombo - 06, Sri Lanka 00600
                  </div>
                  <div className={styles.balapokunaRoad}>
                    12/5 Balapokuna Road
                  </div>
                  <div className={styles.vegatisePvt}>Vegatise, Pvt.</div>
                </div>
              </div>
              <div className={styles.div4}>
                <div className={styles.div5}>
                  <div className={styles.h4}>
                    <div className={styles.invoice}>Invoice #</div>
                    <div className={styles.div6}>36223</div>
                  </div>
                  <div className={styles.span}>
                    <div className={styles.date}>Date:</div>
                    <div className={styles.friday04May}>
                      Friday, 04 May, 2023
                    </div>
                  </div>
                </div>
                <div className={styles.div7}>
                  <img className={styles.svgIcon1} alt="" src="/svg1.svg" />
                  <div className={styles.div8}>
                    <div className={styles.div9}>
                      <div className={styles.balapokunaRoadDehiwala}>
                        12/5 Balapokuna Road, Dehiwala
                      </div>
                    </div>
                    <div className={styles.div10}>
                      <div className={styles.balapokunaRoadDehiwala}>
                        Colombo - 06, Sri Lanka
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.div11}>
                  <img className={styles.svgIcon1} alt="" src="/svg2.svg" />
                  <div className={styles.div12}>
                    <div className={styles.balapokunaRoadDehiwala}>
                      (94) 76-901-6271
                    </div>
                  </div>
                </div>
                <div className={styles.abdurrahmanIthisham}>
                  Abdurrahman Ithisham
                </div>
              </div>
            </div>
            <div className={styles.tabletableDefault}>
              <div className={styles.thead}>
                <div className={styles.tr}>
                  <div className={styles.th}>
                    <div className={styles.product}>PRODUCT</div>
                  </div>
                  <div className={styles.th1}>
                    <div className={styles.price}>PRICE</div>
                  </div>
                  <div className={styles.th2}>
                    <div className={styles.quantity}>QUANTITY</div>
                  </div>
                  <div className={styles.th3}>
                    <div className={styles.total}>TOTAL</div>
                  </div>
                </div>
              </div>
              <div className={styles.tbody}>
                <div className={styles.tr1}>
                  <div className={styles.td}>
                    <div className={styles.div14}>
                      <div className={styles.div15}>
                        <div className={styles.spancapitalize}>
                          <div className={styles.month}>Month</div>
                          <div className={styles.div16}>:</div>
                        </div>
                        <div className={styles.months}>3 months</div>
                      </div>
                      <div className={styles.div17} />
                      <div className={styles.fullWrapCampaign}>
                        Full wrap campaign
                      </div>
                    </div>
                  </div>
                  <div className={styles.td1}>
                    <div className={styles.div18}>$252.00</div>
                  </div>
                  <div className={styles.td2}>
                    <div className={styles.div19}>2</div>
                  </div>
                  <div className={styles.td3}>
                    <div className={styles.div20}>$252.00</div>
                  </div>
                </div>
                <div className={styles.tr2}>
                  <div className={styles.td}>
                    <div className={styles.div21}>
                      <div className={styles.div22}>
                        <div className={styles.spancapitalize}>
                          <div className={styles.month1}>Month</div>
                          <div className={styles.div23}>:</div>
                        </div>
                        <div className={styles.months1}>3 months</div>
                      </div>
                      <div className={styles.fullWrapCampaign}>
                        Lite wrap campaign
                      </div>
                    </div>
                  </div>
                  <div className={styles.td1}>
                    <div className={styles.div24}>$389.00</div>
                  </div>
                  <div className={styles.td2}>
                    <div className={styles.div25}>1</div>
                  </div>
                  <div className={styles.td3}>
                    <div className={styles.div24}>$389.00</div>
                  </div>
                </div>
                <div className={styles.tr3}>
                  <div className={styles.td8}>
                    <div className={styles.div27}>
                      <div className={styles.digitalWebAttribution}>
                        Digital web attribution and social media campaign
                      </div>
                      <div className={styles.div28}>
                        <div className={styles.spancapitalize}>
                          <div className={styles.month1}>Month</div>
                          <div className={styles.div23}>:</div>
                        </div>
                        <div className={styles.months1}>3 months</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.td9}>
                    <div className={styles.div30}>$869.00</div>
                  </div>
                  <div className={styles.td10}>
                    <div className={styles.div31}>1</div>
                  </div>
                  <div className={styles.td11}>
                    <div className={styles.div30}>$869.00</div>
                  </div>
                </div>
              </div>
              <div className={styles.tfoot}>
                <div className={styles.tr4}>
                  <div className={styles.td12} />
                  <div className={styles.tdfontSemibold}>
                    <div className={styles.subtotal}>Subtotal</div>
                  </div>
                  <div className={styles.td13}>
                    <div className={styles.div33}>$1,762.00</div>
                  </div>
                </div>
                <div className={styles.tr5}>
                  <div className={styles.td14} />
                  <div className={styles.tdfontSemibold1}>
                    <div className={styles.handlingFee}>Handling fee</div>
                  </div>
                  <div className={styles.td15}>
                    <div className={styles.div34}>$15.00</div>
                  </div>
                </div>
                <div className={styles.tr6}>
                  <div className={styles.td12} />
                  <div className={styles.tdfontSemibold}>
                    <div className={styles.tax6}>Tax(6%)</div>
                  </div>
                  <div className={styles.td13}>
                    <div className={styles.div35}>$105.72</div>
                  </div>
                </div>
                <div className={styles.tr7}>
                  <div className={styles.td18} />
                  <div className={styles.tdfontSemibold3}>
                    <div className={styles.grandTotal}>Grand Total</div>
                  </div>
                  <div className={styles.tdfontSemibold4}>
                    <div className={styles.div36}>$1,870.72</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.div37}>
              <button className={styles.buttonbutton}>
                <div className={styles.print}>Print</div>
              </button>
            </div>
          </div>
          <div className={styles.invoiceWasCreated}>
            Invoice was created on a computer and is valid without the signature
            and seal.
          </div>
        </div>
        <b className={styles.invoice1}>Invoice</b>
      </div>
      <div className={styles.navbar}>
        <div className={styles.divlogo1}>
          <div className={styles.logo1}>
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
              <img className={styles.growthIcon} alt="" src="/growth2.svg" />
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
                src="/rocketlaunch2.svg"
              />
              <div className={styles.myGroup}>Attribution</div>
            </button>
          </div>
          <div className={styles.component1Wrapper}>
            <button className={styles.component1} onClick={onComponent13Click}>
              <img
                className={styles.growthIcon}
                alt=""
                src="/arrowscounterclockwise.svg"
              />
              <div className={styles.myGroup}>Retargeting</div>
            </button>
          </div>
          <div className={styles.frameParent}>
            <button
              className={styles.dollarCoinParent}
              onClick={onFrameButtonClick}
            >
              <img
                className={styles.growthIcon}
                alt=""
                src="/dollar-coin1.svg"
              />
              <div className={styles.analytics1}>Billing</div>
            </button>
            <div className={styles.frameChild} />
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

export default BillingInvoice;
