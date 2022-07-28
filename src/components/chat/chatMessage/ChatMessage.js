import styles from "./styles.module.css";

import { ReactComponent as MessageTail } from "../../../assets/message-tail.svg";

const ChatMessage = ({ isSend }) => {
  return (
    <div className={`${styles.row} ${isSend ? styles.sent : styles.received}`}>
      <div className={styles.message}>
        <div className={styles.message__tail}>
          <MessageTail />
        </div>
        <p className={styles.message__content}>Message</p>
        <span className={styles.message__time}>time </span>
      </div>
    </div>
  );
};

export default ChatMessage;
