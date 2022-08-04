import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { getRedirectResult } from "firebase/auth";
import { auth } from "./firebase/firebase";

import { useDispatch, useSelector } from "./context/stateContext";
import { setUser } from "./context/UserState/actions";

import styles from "./styles.module.css";

import Sidebar from "./features/sidebar/Sidebar";
import Chat from "./features/chat/Chat";
import Login from "./features/login/login";

const App = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result) {
        const {
          user: { displayName, photoURL, uid },
        } = result;

        const user = { id: uid, name: displayName, imageURL: photoURL };

        dispatch(setUser(user));
      }
    });
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <BrowserRouter>
        {user ? (
          <div className={styles.app__body}>
            <Sidebar />
            <Chat />
          </div>
        ) : (
          <Login />
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
