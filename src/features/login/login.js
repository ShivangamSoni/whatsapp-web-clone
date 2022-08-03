import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../../firebase/firebase";

const Login = () => {
  const signIn = () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={signIn}>Sign In using Google</button>
    </div>
  );
};

export default Login;
