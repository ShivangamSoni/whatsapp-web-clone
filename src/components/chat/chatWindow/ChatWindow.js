import styles from "./styles.module.css";

import ChatHeader from "../header/ChatHeader";
import ChatFooter from "../footer/ChatFooter";

const ChatWindow = () => {
  return (
    <div className={styles.window}>
      <ChatHeader />
      <main></main>
      <ChatFooter />
    </div>
  );
};

export default ChatWindow;
