import { useState } from "react";

import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";

import { collection, addDoc } from "firebase/firestore";
import db from "../../../firebase/firebase";

import { useSelector } from "../../../context/stateContext";

import styles from "./styles.module.css";

import Modal from "@mui/material/Modal";
import CreateRoomModal from "../createRoomModal/CreateRoomModal";

const SidebarHeader = () => {
    const [showRoomModal, setShowRoomModal] = useState(false);
    const { imageURL } = useSelector((state) => state.user);

    const createRoom = async (roomName) => {
        await addDoc(collection(db, "chatrooms"), { name: roomName });
        setShowRoomModal(false);
    };

    return (
        <header className={styles.header}>
            <div>
                <Avatar src={imageURL} />
            </div>

            <div className={styles.header__options}>
                <IconButton>
                    <DonutLargeIcon />
                </IconButton>

                <IconButton
                    title="Create New Chat Room"
                    onClick={() => setShowRoomModal(true)}
                >
                    <ChatIcon />
                </IconButton>

                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            </div>

            <Modal open={showRoomModal} onClose={() => setShowRoomModal(false)}>
                <CreateRoomModal onSubmit={createRoom} />
            </Modal>
        </header>
    );
};

export default SidebarHeader;
