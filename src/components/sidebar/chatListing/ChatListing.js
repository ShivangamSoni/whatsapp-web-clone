import { useEffect, useState } from "react";

import { collection, query, onSnapshot } from "firebase/firestore";
import db from "../../../firebase/firebase";

import styles from "./styles.module.css";

import SidebarChatItem from "../chatItem/ChatItem";

const SidebarChatListing = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "chatrooms"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      snapshot.forEach((doc) => {
        const room = { id: doc.id, data: doc.data() };
        setRooms((prev) => {
          const copy = [...prev];

          const idx = copy.findIndex(({ id }) => id === room.id);
          if (idx === -1) {
            copy.push(room);
          } else {
            copy[idx] = room;
          }

          return copy;
        });
      });
    });

    return () => unsubscribe();
  }, []);

  return (
    <ul className={styles.list}>
      {rooms.map((room) => (
        <SidebarChatItem key={room.id} {...room} />
      ))}
    </ul>
  );
};

export default SidebarChatListing;
