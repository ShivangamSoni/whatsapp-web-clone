import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

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
        auth.onAuthStateChanged((user) => {
            if (user) {
                const { displayName: name, photoURL: imageURL, uid: id } = user;
                dispatch(setUser({ id, name, imageURL }));
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
