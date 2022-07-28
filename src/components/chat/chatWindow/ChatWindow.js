import styles from "./styles.module.css";

import ChatHeader from "../header/ChatHeader";
import ChatFooter from "../footer/ChatFooter";
import ChatBody from "../body/ChatBody";

const ChatWindow = () => {
  return (
    <div className={styles.window}>
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
};

export default ChatWindow;
