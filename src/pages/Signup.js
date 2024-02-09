import React, { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import firebaseApp from "./firebase"; // Import the initialized Firebase app
import styles from "./Signup.module.css";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth(firebaseApp);
  const googleProvider = new GoogleAuthProvider();

  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const onCreateAccClick = useCallback(async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigate("/coming-soon");
      } catch (error) {
        console.error("Error signing up:", error.message);
      }
    }
  }, [auth, email, password, navigate]);

  const onGoogleSignInClick = useCallback(async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      navigate("/coming-soon");
    } catch (error) {
      console.error("Error signing in with Google:", error.message);
    }
  }, [auth, googleProvider, navigate]);

  const onLogInClick = useCallback(() => {
    navigate("/log-in");
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
        <div className={styles.section2Container}>
          <img src="/asset-84x@2x.png" alt="" />
          <div className={styles.createAnAccountContainer}>
            <p className={styles.createAnAccount}>Create an account</p>
            <div className={styles.inputContainer}>
              <p className={styles.inputLabel}>Email</p>
              <TextField
                className={styles.input}
                color="primary"
                placeholder="balamia@gmail.com"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.inputContainer}>
              <p className={styles.inputLabel}>Password</p>
              <TextField
                className={styles.input}
                color="primary"
                placeholder="Enter your password"
                required={true}
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
              Create account
            </button>
            <button
              className={styles.googleButton}
              onClick={onGoogleSignInClick}
            >
              <img alt="" src="/icongoogle--original2.svg" />
              <div>Continue with Google</div>
            </button>
            <p className={styles.haveAcc}>
              Already Have An Account?{" "}
              <span onClick={onLogInClick}>Log In</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// <div className={styles.signup}>
//   <div className={styles.bg}>
//     <i className={styles.welcomeStartYourContainer}>
//     <span className={styles.welcomeStartYourContainer1}>
// <p className={styles.welcome}>Welcome.</p>
// <p className={styles.welcome}>
//   Start your
// </p>
// <p className={styles.welcome}>
// journey now with
// </p>
// <p className={styles.welcome}>
// our
// </p>
// <p className={styles.welcome}>
// management
// </p>
// <p className={styles.welcome}>
// system!
// </p>
//       </span>
//     </i>
//   </div>
//   <div className={styles.bgLogin}>
//     <div className={styles.signUpWrapper}>
//       <section className={styles.signUp}>
//         <div className={styles.welcomeBackParent}>
//           <div className={styles.welcomeBack}>Welcome back</div>
//           <h2 className={styles.createAnAccount}>Create an account</h2>
//         </div>
//         <div className={styles.frameParent}>
// <div className={styles.frameGroup}>
//   <div className={styles.emailWrapper}>
//     <div className={styles.email}>Email</div>
//   </div>
// <TextField
//   className={styles.frameChild}
//   color="primary"
//   placeholder="balamia@gmail.com"
//   variant="outlined"
//   value={email}
//   onChange={(e) => setEmail(e.target.value)}
// />
// </div>
//           <div className={styles.frameGroup}>
//             <div className={styles.emailWrapper}>
//               <div className={styles.email}>Password</div>
//               <div className={styles.forgot}>Forgot？</div>
//             </div>
// <TextField
//   className={styles.frameChild}
//   color="primary"
//   placeholder="Enter your password"
//   required={true}
//   variant="outlined"
//   type={showPassword ? "text" : "password"}
//   InputProps={{
//     endAdornment: (
//       <InputAdornment position="end">
//         <IconButton
//           onClick={handleShowPasswordClick}
//           aria-label="toggle password visibility"
//         >
//           <Icon>
//             {showPassword ? "visibility_off" : "visibility"}
//           </Icon>
//         </IconButton>
//       </InputAdornment>
//     ),
//   }}
//   value={password}
//   onChange={(e) => setPassword(e.target.value)}
// />
//           </div>
//         </div>
// <div className={styles.buttonsParent}>
//   <button className={styles.buttons} onClick={onButtonsClick}>
//     <div className={styles.loginNow}>Create account</div>
//   </button>
// <button className={styles.buttons1} onClick={onGoogleSignInClick}>
//   <img
//     className={styles.icongoogleOriginal}
//     alt=""
//     src="/icongoogle--original2.svg"
//   />
//   <div className={styles.loginNow1}>Continue with Google</div>
// </button>
//           <div className={styles.alreadyHaveAnAccountParent}>
//             <div className={styles.alreadyHaveAn}>
//               Already have an account ?
//             </div>
//             <a className={styles.logIn} onClick={onLogInClick}>
//               Log in
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//     <img className={styles.asset84xIcon} alt="" src="/asset-84x1@2x.png" />
//   </div>
// </div>
