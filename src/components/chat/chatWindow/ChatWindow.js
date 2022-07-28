import styles from "./styles.module.css";

import ChatHeader from "../header/ChatHeader";

const ChatWindow = () => {
  return (
    <div className={styles.window}>
      <ChatHeader />
    </div>
  );
};

export default ChatWindow;
