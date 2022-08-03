import { Routes, Route } from "react-router-dom";

import styles from "./styles.module.css";

import ChatWelcome from "../../components/chat/welcome/Welcome";
import ChatWindow from "../../components/chat/chatWindow/ChatWindow";

const Chat = () => {
  return (
    <div className={styles.chat}>
      <Routes>
        <Route path="/" element={<ChatWelcome />} />
        <Route path="/rooms/:roomId" element={<ChatWindow />} />
      </Routes>
    </div>
  );
};

export default Chat;
