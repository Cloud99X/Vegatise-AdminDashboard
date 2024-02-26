import React, { useState, useEffect, useCallback } from "react";
import "antd/dist/antd.min.css";
import styles from "./newCampaign.module.css"
import PageLayout from "../components/page-layout/page-layout";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";

const NewCampaign = () => {

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
        <div>
          <div className={styles.topic}><b>Add New campaign</b></div>
          <div>
            <span className={styles.label}><b>Company Name</b></span>
            <div className={styles.inputContainer}>
            <InputGroup width="405px">
              <Input
                variant="outline"
                placeholder="Eg - Vegatise"
                size="sm"
              />
            </InputGroup>
          </div>
          <span className={styles.label}  style={{top: '100px'}}><b>Campaign Duration</b></span>
            <div className={styles.inputContainer}>
            <InputGroup width="405px"  top='20px'>
              <Input
                variant="outline"
                placeholder="Eg - 3 months"
                size="sm"
                style={{textAlign: "left"}}
              />
            </InputGroup>
          </div>
          <span className={styles.label}  style={{top: '120px'}}><b>Design type</b></span>
            <div className={styles.inputContainer}>
            <InputGroup width="405px"  top='40px'>
              <Input
                variant="outline"
                placeholder="Partial Wrap"
                size="sm"
                style={{textAlign: "left"}}
              />
            </InputGroup>
          </div>
          <span className={styles.label}  style={{top: '140px'}}><b>Kms required</b></span>
            <div className={styles.inputContainer}>
            <InputGroup width="405px"  top='60px'>
              <Input
                variant="outline"
                placeholder="300 km"
                size="sm"
                style={{textAlign: "left"}}
              />
            </InputGroup>
          </div>
          <span className={styles.label}  style={{top: '160px'}}><b>Route preffered</b></span>
            <div className={styles.inputContainer}>
            <InputGroup width="405px"  top='80px'>
              <Input
                variant="outline"
                placeholder="colombo galle road"
                size="sm"
                style={{textAlign: "left"}}
              />
            </InputGroup>
          </div>
          <span className={styles.label}  style={{top: '180px'}}><b>Reward</b></span>
            <div className={styles.inputContainer}>
            <InputGroup width="405px"  top='100px'>
              <Input
                variant="outline"
                placeholder="15,000 /="
                size="sm"
                style={{textAlign: "left"}}
              />
            </InputGroup>
          </div>
          <span className={styles.label}  style={{top: '210px'}}><b>vegatise rewards</b></span>
            <div className={styles.inputContainer}>
            <InputGroup width="405px"  top='120px'>
              <Input
                variant="outline"
                placeholder="Air fresher Vegatise phone holder, etc..."
                size="sm"
                style={{textAlign: "left"}}
              />
            </InputGroup>
          </div>
          <span className={styles.label}  style={{top: '230px'}}><b>Bonus</b></span>
            <div className={styles.inputContainer}>
            <InputGroup width="405px"  top='140px'>
              <Input
                variant="outline"
                placeholder="Earn additional rewards by driving to selected hotspots"
                size="sm"
                style={{textAlign: "left"}}
              />
            </InputGroup>
          </div>
          <span className={styles.label}  style={{top: '260px'}}><b>Description</b></span>
            <div className={styles.inputContainer} style={{width: '834px'}}>
            <div className={styles.descCont}></div>
            <InputGroup width="834px"  top='160px' overflowWrap='break-word'>
              <Input 
                variant="outline"
                placeholder="Daraz is an online e com store celebration there 11th consecutive anniversary....daraz ia an online e com store celebration there 11th consecutive anniversary....daraz ia an online e com store celebration there 11th consecutive anniversary....daraz ia an online e com store celebration there 11th consecutive anniversary....daraz ia an online e com store celebration there 11th consecutive anniversary....daraz ia an online e com store celebration there 11th consecutive anniversary....daraz ia an online e com store celebration there 11th consecutive anniversary...."
                size="sm"
                style={{textAlign: "center", top: '13px', height:"122px", width: '100%', overflowWrap: 'break-word'}}
              />
            </InputGroup>
          </div>
          </div>
          <div>
            <span className={styles.cmpLogo}><b>Company Logo</b></span>
            <div className={styles.logoFrame}>
              <div className={styles.white}>
              <img alt="" src="/pic1.png" className={styles.nopic} />
              <img alt="" src="/add.png" className={styles.add} />
              </div>
            </div>
            <span className={styles.ImgTitle}><b>Vehicle Image</b></span>
            <div className={styles.imgFrame}>
              <div>
                <span className={styles.frnt}><b>Front View</b></span>
                <img alt="" src="/add.png" className={styles.add1} />
                <img alt="" src="/frontView.png" className={styles.v1} />
              </div>
              <div>
                <span className={styles.back}><b>Back View</b></span>
                <img alt="" src="/add.png" className={styles.add2} />
                <img alt="" src="/backView.png" className={styles.v2} />
              </div>
              <div>
                <span className={styles.left}><b>Side View(left)</b></span>
                <img alt="" src="/add.png" className={styles.add3} />
                <img alt="" src="/leftView.png" className={styles.v3} />
              </div>
              <div>
                <span className={styles.right}><b>Side View(right)</b></span>
                <img alt="" src="/add.png" className={styles.add4} />
                <img alt="" src="/rightView.png" className={styles.v4} />
              </div>
              <div style={{position: 'relative',left: '65%', bottom: '10%'}}>
                <button className={styles.cancel}>
                  <span>cancel</span>
                </button> 
                <button className={styles.confirm}>
                  <span >Confirm</span>
                </button>  
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default NewCampaign;