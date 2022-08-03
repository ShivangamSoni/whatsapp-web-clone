import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { doc, onSnapshot } from "firebase/firestore";
import db from "../../../firebase/firebase";

import styles from "./styles.module.css";

import ChatHeader from "../header/ChatHeader";
import ChatFooter from "../footer/ChatFooter";
import ChatBody from "../body/ChatBody";

const ChatWindow = () => {
  const [roomData, setRoomData] = useState({});
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      const unsubscribe = onSnapshot(doc(db, "chatrooms", roomId), (doc) => {
        setRoomData(doc.data());
      });

      return () => unsubscribe();
    }
  }, [roomId]);

  const { name } = roomData;

  return (
    <div className={styles.window}>
      <ChatHeader id={roomId} name={name} />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default ChatWindow;
