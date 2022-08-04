import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import db from "../../../firebase/firebase";

import styles from "./styles.module.css";

import ChatHeader from "../header/ChatHeader";
import ChatFooter from "../footer/ChatFooter";
import ChatBody from "../body/ChatBody";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);
  const [roomName, setRoomName] = useState("Loading...");
  const { roomId } = useParams();

  useEffect(() => {
    if (roomId) {
      const roomUnsub = onSnapshot(doc(db, "chatrooms", roomId), (doc) => {
        setRoomName(doc.data().name);
      });

      const messagesQuery = query(
        collection(db, `chatrooms/${roomId}/messages`),
        orderBy("timestamp"),
      );

      const msgUnsub = onSnapshot(messagesQuery, (snapshot) => {
        snapshot.forEach((doc) => {
          const message = { id: doc.id, data: doc.data() };
          setMessages((prev) => {
            const copy = [...prev];

            const idx = copy.findIndex(({ id }) => id === message.id);
            if (idx === -1) {
              copy.push(message);
            } else {
              copy[idx] = message;
            }

            return copy;
          });
        });
      });

      return () => {
        roomUnsub();
        msgUnsub();
        setMessages([]);
        setRoomName("Loading...");
      };
    }
  }, [roomId]);

  return (
    <div className={styles.window}>
      <ChatHeader id={roomId} name={roomName} />
      <ChatBody messages={messages} />
      <ChatFooter />
    </div>
  );
};

export default ChatWindow;
