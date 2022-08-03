import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";

import { collection, addDoc } from "firebase/firestore";
import db from "../../../firebase/firebase";

import styles from "./styles.module.css";
import useUser from "../../../context/user";

const SidebarHeader = () => {
  const {
    user: { imageURL },
  } = useUser();

  const createRoom = async () => {
    // TODO: Modal
    const roomName = prompt("Enter a Name for the Chat Room:");

    if (roomName) {
      await addDoc(collection(db, "chatrooms"), { name: roomName });
    }
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

        <IconButton title="Create New Chat Room" onClick={createRoom}>
          <ChatIcon />
        </IconButton>

        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default SidebarHeader;
