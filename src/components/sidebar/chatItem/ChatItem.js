import Avatar from "@mui/material/Avatar";
import { useEffect, useState } from "react";

import styles from "./styles.module.css";

const SidebarChatItem = () => {
  const [id, setId] = useState();
  useEffect(() => {
    setId(Math.floor(Math.random() * 99999));
  }, []);

  return (
    <li className={styles.chat}>
      <div className={styles.chat__avatar}>
        <Avatar
          src={`https://avatars.dicebear.com/api/bottts/${id}.svg?b=%23e9edef`}
        />
      </div>

      <div className={styles.chat__info}>
        <h2 className={styles.info__user}>Chat Name</h2>
        <p className={styles.info__message}>Last Message...</p>
      </div>
    </li>
  );
};

export default SidebarChatItem;
