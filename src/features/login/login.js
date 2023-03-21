import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";

import { useDispatch } from "../../context/stateContext";
import { setUser } from "../../context/UserState/actions";

import styles from "./styles.module.css";

import { ReactComponent as GoogleIcon } from "../../assets/google_icon.svg";
import { ReactComponent as WhatsappLogo } from "../../assets/whatsapp_logo.svg";

const Login = () => {
    const dispatch = useDispatch();

    const signIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const {
                user: { displayName: name, photoURL: imageURL, uid: id },
            } = result;
            dispatch(setUser({ id, name, imageURL }));
        } catch (e) {
            console.log(e);
        }
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
