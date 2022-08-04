import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";

import styles from "./styles.module.css";

import { ReactComponent as GoogleIcon } from "../../assets/google_icon.svg";
import { ReactComponent as WhatsappLogo } from "../../assets/whatsapp_logo.svg";

const Login = () => {
  const signIn = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div className={styles.login}>
      <div className={styles.login__logo}>
        <WhatsappLogo width="inherit" height="inherit" />
      </div>
      <h1 className={styles.login__title}>Start Using WhatsApp Clone</h1>
      <button className={styles.login__btn} onClick={signIn}>
        <GoogleIcon /> <span>Sign in with Google</span>
      </button>
    </div>
  );
};

export default Login;
