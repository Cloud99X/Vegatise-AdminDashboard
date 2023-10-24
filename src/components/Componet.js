import { useState } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import styles from "./Componet.module.css";

const Componet = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className={styles.componet}>
      <section className={styles.login}>
        <div className={styles.welcomeBackParent}>
          <div className={styles.welcomeBack}>Welcome back</div>
          <h2 className={styles.loginToYour}>Login to your account</h2>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.emailWrapper}>
              <div className={styles.email}>Email</div>
            </div>
            <div className={styles.inputTextWrapper}>
              <TextField
                className={styles.inputText}
                label="balamia@gmail.com"
                type="text"
              />
            </div>
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.emailWrapper}>
              <div className={styles.email}>Password</div>
              <a className={styles.forgot}>Forgot？</a>
            </div>
            <div className={styles.inputTextContainer}>
              <TextField
                className={styles.inputText1}
                color="primary"
                placeholder="Enter your password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowPasswordClick}
                        aria-label="toggle password visibility"
                      >
                        <Icon>
                          {showPassword ? "visibility_off" : "visibility"}
                        </Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.buttonsParent}>
          <button className={styles.buttons}>
            <div className={styles.loginNow}>Login now</div>
          </button>
          <div className={styles.dontHaveAnAccountParent}>
            <div className={styles.dontHaveAn}>Don't have an account?</div>
            <a className={styles.signUp}>Sign up</a>
          </div>
        </div>
      </section>
      <img className={styles.iconeye} alt="" src="/iconeye2.svg" />
      <img className={styles.iconeyeslash} alt="" src="/iconeyeslash.svg" />
      <section className={styles.property1defaultParent}>
        <TextField
          className={styles.property1default}
          color="primary"
          placeholder="Context"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={styles.property1filled}
          color="primary"
          defaultValue="Context"
          placeholder="Context"
          sx={{ width: 352 }}
          variant="outlined"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </section>
      <section className={styles.buttons1}>
        <button className={styles.property1secondary}>
          <div className={styles.loginNow}>Login now</div>
        </button>
        <button className={styles.property1secondary1}>
          <img
            className={styles.icongoogleOriginal}
            alt=""
            src="/icongoogle--original2.svg"
          />
          <div className={styles.loginNow2}>Login now</div>
        </button>
      </section>
      <img
        className={styles.icongoogleOriginal1}
        alt=""
        src="/icongoogle--original3.svg"
      />
      <section className={styles.signUp1}>
        <div className={styles.welcomeBackParent}>
          <div className={styles.welcomeBack1}>Welcome back</div>
          <h2 className={styles.loginToYour}>Create an account</h2>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.emailWrapper}>
              <div className={styles.email}>Email</div>
            </div>
            <input
              className={styles.frameChild}
              placeholder="balamia@gmail.com"
              type="text"
            />
          </div>
          <div className={styles.frameGroup}>
            <div className={styles.emailWrapper}>
              <div className={styles.email}>Password</div>
              <div className={styles.forgot1}>Forgot？</div>
            </div>
            <div className={styles.inputTextFrame}>
              <div className={styles.inputText2}>
                <div className={styles.context}>Enter your password</div>
                <div className={styles.iconeyeWrapper}>
                  <img className={styles.iconeye1} alt="" src="/iconeye1.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.buttonsGroup}>
          <button className={styles.buttons2}>
            <div className={styles.loginNow}>Create account</div>
          </button>
          <div className={styles.buttons3}>
            <img
              className={styles.icongoogleOriginal}
              alt=""
              src="/icongoogle--original4.svg"
            />
            <div className={styles.loginNow4}>Continue with Google</div>
          </div>
          <div className={styles.alreadyHaveAnAccountParent}>
            <div className={styles.dontHaveAn}>Already have an account ?</div>
            <div className={styles.logIn}>Log in</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Componet;
