import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { getRedirectResult } from "firebase/auth";
import { auth } from "./firebase/firebase";

import "./assets/global.css";
import "./app.css";

import Sidebar from "./features/sidebar/Sidebar";
import Chat from "./features/chat/Chat";
import Login from "./features/login/login";
import useUser from "./context/user";

const App = () => {
  const { user, setUser } = useUser();

  useEffect(() => {
    getRedirectResult(auth).then((result) => {
      if (result) {
        const {
          user: { displayName, photoURL, uid },
        } = result;

        const user = { id: uid, name: displayName, imageURL: photoURL };

        setUser(user);
      }
    });
  }, [setUser]);

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
