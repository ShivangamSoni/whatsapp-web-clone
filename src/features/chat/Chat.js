import styles from "./styles.module.css";

import ChatWelcome from "../../components/chat/welcome/Welcome";
import ChatWindow from "../../components/chat/chatWindow/ChatWindow";

const Chat = () => {
  return (
    <div className={styles.chat}>
      {/* <ChatWelcome /> */}
      <ChatWindow />
    </div>
  );
};

export default Chat;
