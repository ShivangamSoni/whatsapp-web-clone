import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import AddChatIcon from "@mui/icons-material/AddComment";
import LogoutIcon from "@mui/icons-material/Logout";

import { collection, addDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import db, { auth } from "../../../firebase/firebase";

import { useDispatch, useSelector } from "../../../context/stateContext";
import { setUser } from "../../../context/UserState/actions";

import styles from "./styles.module.css";

import Modal from "@mui/material/Modal";
import CreateRoomModal from "../createRoomModal/CreateRoomModal";

const SidebarHeader = () => {
    const dispatch = useDispatch();
    const { imageURL } = useSelector((state) => state.user);

    const [showRoomModal, setShowRoomModal] = useState(false);

    const createRoom = async (roomName) => {
        await addDoc(collection(db, "chatrooms"), { name: roomName });
        setShowRoomModal(false);
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            dispatch(setUser(null));
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <header className={styles.header}>
            <div>
                <Avatar src={imageURL} />
            </div>

            <div className={styles.header__options}>
                <IconButton
                    title="Create New Chat Room"
                    onClick={() => setShowRoomModal(true)}
                >
                    <AddChatIcon />
                </IconButton>

                <IconButton title="LogOut" onClick={handleSignOut}>
                    <LogoutIcon />
                </IconButton>
            </div>

            <Modal open={showRoomModal} onClose={() => setShowRoomModal(false)}>
                <CreateRoomModal onSubmit={createRoom} />
            </Modal>
        </header>
    );
};

export default SidebarHeader;
