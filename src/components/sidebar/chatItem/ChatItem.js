import { useNavigate, useMatch } from "react-router-dom";

import Avatar from "@mui/material/Avatar";

import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import db from "../../../firebase/firebase";

const SidebarChatItem = ({ id, data: { name } }) => {
  const navigate = useNavigate();
  const active = useMatch(`/rooms/${id}`);
  const [lastMessage, setLastMessage] = useState("");

  useEffect(() => {
    const messagesQuery = query(
      collection(db, `chatrooms/${id}/messages`),
      orderBy("timestamp", "desc"),
      limit(1),
    );

    const msgUnsub = onSnapshot(messagesQuery, (snapshot) => {
      snapshot.forEach((doc) => setLastMessage(doc.data().message));
    });

    return () => {
      msgUnsub();
    };
  }, [id]);

  return (
    <li
      className={`${styles.chat} ${active ? styles.active : ""}`}
      onClick={() => navigate(`/rooms/${id}`)}
    >
      <div className={styles.chat__avatar}>
        <Avatar
          src={`https://avatars.dicebear.com/api/bottts/${id}.svg?b=%23e9edef`}
        />
      </div>

      <div className={styles.chat__info}>
        <h2 className={styles.info__user}>{name}</h2>
        <p className={styles.info__message}>
          {lastMessage.length > 10
            ? lastMessage.substring(0, 10) + "..."
            : lastMessage}
        </p>
      </div>
    </li>
  );
};

export default SidebarChatItem;
