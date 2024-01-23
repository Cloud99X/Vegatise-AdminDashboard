import React, { useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import firebaseApp from './firebase'; // Import the initialized Firebase app
import styles from "./LogIn1.module.css";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const auth = getAuth(firebaseApp); // Pass the initialized Firebase app to getAuth

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onButtonsClick = useCallback(async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/coming-soon");
    } catch (error) {
      console.error('Error signing in:', error.message);
      window.alert('Wrong email or password. Please try again.');
    }
  }, [auth, email, password, navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <a className={styles.logIn}>
      <div className={styles.bg}>
        <i className={styles.welcomeStartYourContainer}>
          <span className={styles.welcomeStartYourContainer1}>
            <p className={styles.welcome}>Welcome.</p>
            <p className={styles.welcome}>
              Start your journey now with our management system!
            </p>
          </span>
        </i>
      </div>
      <div className={styles.bgLogin}>
        <div className={styles.logo}>
          <img
            className={styles.asset84xIcon}
            alt=""
            src="/asset-84x11@2x.png"
          />
        </div>
        <div className={styles.login}>
          <div className={styles.welcomeBackParent}>
            <div className={styles.welcomeBack}>Welcome back</div>
            <div className={styles.loginToYour}>Login to your account</div>
          </div>
          <div className={styles.frameParent}>
            <Form className={styles.emailParent}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="balamia@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form>
            <div className={styles.frameGroup}>
              <div className={styles.passwordParent}>
                <div className={styles.password}>Password</div>
                <a className={styles.forgot}>Forgot？</a>
              </div>
              <div className={styles.inputTextWrapper}>
                <TextField
                  className={styles.emailParent}
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
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={styles.buttonsParent}>
            <button className={styles.buttons} onClick={onButtonsClick}>
              <div className={styles.loginNow}>Login now</div>
            </button>
            <div className={styles.dontHaveAnAccountParent}>
              <div className={styles.dontHaveAn}>Don't have an account ?</div>
              <a className={styles.signUp} onClick={onSignUpClick}>
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default LogIn;
