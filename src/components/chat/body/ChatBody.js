import IconButton from "@mui/material/IconButton";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import styles from "./styles.module.css";

import ChatMessage from "../chatMessage/ChatMessage";

const ChatBody = () => {
  return (
    <main className={styles.body}>
      <div></div>
      <div className={styles.messages}>
        {[...Array(10).keys()].map((idx) => (
          <ChatMessage key={idx} isSend={idx % 2} />
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
