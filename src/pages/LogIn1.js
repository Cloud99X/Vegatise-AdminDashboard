import React, { useState, useCallback } from "react";
import { Form } from "react-bootstrap";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "./firebase"; // Import the initialized Firebase app
import styles from "./LogIn1.module.css";

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(firebaseApp); // Pass the initialized Firebase app to getAuth

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onCreateAccClick = useCallback(async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/coming-soon");
    } catch (error) {
      console.error("Error signing in:", error.message);
      window.alert("Wrong email or password. Please try again.");
    }
  }, [auth, email, password, navigate]);

  const onSignUpClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.Signup}>
      <div className={styles.section1}>
        <i className={styles.welcomeStartYourContainer}>
          <span className={styles.welcomeStartYourContainer1}>
            <p className={styles.welcomeText}>Welcome.</p>
            <p className={styles.welcomeText}>Start your</p>
            <p className={styles.welcomeText}>journey now with</p>
            <p className={styles.welcomeText}>our</p>
            <p className={styles.welcomeText}>management</p>
            <p className={styles.welcomeText}>system!</p>
          </span>
        </i>
      </div>
      <div className={styles.section2}>
        <img src="/asset-84x@2x.png" alt="" />
        <div className={styles.createAnAccountContainer}>
          <div>
            <p className={styles.welcomeBack}>Welcome back</p>
            <p className={styles.createAnAccount}>Login to your account</p>
          </div>
          <div className={styles.inputContainer}>
            <p className={styles.inputLabel}>Email</p>
            <TextField
              className={styles.input}
              color = "primary"
              placeholder="balamia@gmail.com"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                style: {
                  fontFamily: 'Poppins, sans-serif',
                },
              }}
            />
          </div>
          <div className={styles.inputContainer}>
            <div className={styles.labelContainer}>
              <p className={styles.inputLabel}>Password</p>
              <p className={styles.forgotLabel}>Forgot?</p>
            </div>
            <TextField
                className={styles.input}
                color="primary"
                placeholder="Enter your password"
                required={true}
                variant="outlined"
                type={showPassword ? "text" : "password"}
                InputProps={{
                  style: {
                    fontFamily: 'Poppins, sans-serif', // Apply Poppins font family
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={handleShowPasswordClick}
                        aria-label="toggle password visibility"
                      >
                        <Icon>
                          {showPassword ? "visibility" : "visibility_off"}
                        </Icon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
          </div>
          <button className={styles.buttonsParent} onClick={onCreateAccClick}>
            Login now
          </button>
          <p className={styles.haveAcc}>
            Don't Have An Account? <span onClick={onSignUpClick}>Sign Up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

// <a className={styles.logIn}>
//   <div className={styles.bg}>
//     <i className={styles.welcomeStartYourContainer}>
//     <span className={styles.welcomeStartYourContainer1}>
//         <p className={styles.welcome}>Welcome.</p>
//         <p className={styles.welcome}>
//           Start your
//         </p>
//         <p className={styles.welcome}>
//         journey now with
//         </p>
//         <p className={styles.welcome}>
//         our
//         </p>
//         <p className={styles.welcome}>
//         management
//         </p>
//         <p className={styles.welcome}>
//         system!
//         </p>
//       </span>
//     </i>
//   </div>
//   <div className={styles.bgLogin}>
//     <div className={styles.logo}>
//       <img
//         className={styles.asset84xIcon}
//         alt=""
//         src="/asset-84x11@2x.png"
//       />
//     </div>
//     <div className={styles.login}>
//       <div className={styles.welcomeBackParent}>
//         <div className={styles.welcomeBack}>Welcome back</div>
//         <div className={styles.loginToYour}>Login to your account</div>
//       </div>
//       <div className={styles.frameParent}>
//         <Form className={styles.emailParent}>
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="balamia@gmail.com"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </Form>
//         <div className={styles.frameGroup}>
//           <div className={styles.passwordParent}>
//             <div className={styles.password}>Password</div>
//             <a className={styles.forgot}>Forgot？</a>
//           </div>
//           <div className={styles.inputTextWrapper}>
//             <TextField
//               className={styles.emailParent}
//               color="primary"
//               placeholder="Enter your password"
//               variant="outlined"
//               type={showPassword ? "text" : "password"}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton
//                       onClick={handleShowPasswordClick}
//                       aria-label="toggle password visibility"
//                     >
//                       <Icon>
//                         {showPassword ? "visibility_off" : "visibility"}
//                       </Icon>
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//         </div>
//       </div>
//       <div className={styles.buttonsParent}>
//         <button className={styles.buttons} onClick={onButtonsClick}>
//           <div className={styles.loginNow}>Login now</div>
//         </button>
//         <div className={styles.dontHaveAnAccountParent}>
//           <div className={styles.dontHaveAn}>Don't have an account ?</div>
//           <a className={styles.signUp} onClick={onSignUpClick}>
//             Sign up
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// </a>
