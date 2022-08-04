import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { getRedirectResult } from "firebase/auth";
import { auth } from "./firebase/firebase";

import useState from "./context/stateContext";
import { setUser } from "./context/UserState/actions";

import "./assets/global.css";
import "./app.css";

import Sidebar from "./features/sidebar/Sidebar";
import Chat from "./features/chat/Chat";
import Login from "./features/login/login";

const App = () => {
  const {
    state: { user },
    dispatch,
  } = useState();

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
    <div className="app">
      <BrowserRouter>
        {user ? (
          <div className="app__body">
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
