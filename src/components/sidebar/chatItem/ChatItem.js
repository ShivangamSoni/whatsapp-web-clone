import { useNavigate, useMatch } from "react-router-dom";

import Avatar from "@mui/material/Avatar";

import styles from "./styles.module.css";

const SidebarChatItem = ({ id, data: { name } }) => {
  const navigate = useNavigate();
  const active = useMatch(`/rooms/${id}`);

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
        <p className={styles.info__message}>Last Message...</p>
      </div>
    </li>
  );
};

export default SidebarChatItem;
