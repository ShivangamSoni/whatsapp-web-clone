import styles from "./styles.module.css";

import ChatMessage from "../chatMessage/ChatMessage";

const ChatBody = () => {
  return (
    <main className={styles.body}>
      <div></div>
      <div className={styles.messages}>
        {[...Array(100).keys()].map((idx) => (
          <ChatMessage key={idx} isSend={idx % 2} />
        ))}
      </div>
    </main>
  );
};

export default ChatBody;
