import IconButton from "@mui/material/IconButton";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import styles from "./styles.module.css";

import ChatMessage from "../chatMessage/ChatMessage";

const ChatBody = ({ messages }) => {
  return (
    <main className={styles.body}>
      <div></div>
      <div className={styles.messages}>
        {messages.map(({ id, data }) => (
          <ChatMessage key={id} {...data} />
        ))}

        <div className={styles.scroll}>
          <IconButton>
            <ExpandMoreOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </main>
  );
};

export default ChatBody;
