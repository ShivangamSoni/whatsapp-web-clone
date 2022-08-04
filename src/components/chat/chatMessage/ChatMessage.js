import { useSelector } from "../../../context/stateContext";

import styles from "./styles.module.css";

import { ReactComponent as MessageTail } from "../../../assets/message-tail.svg";

const ChatMessage = ({ userId, name, message, timestamp }) => {
  const { id } = useSelector((state) => state.user);
  const isSend = userId === id;

  return (
    <div className={`${styles.row} ${isSend ? styles.sent : styles.received}`}>
      <div className={styles.message}>
        <div className={styles.message__tail}>
          <MessageTail />
        </div>
        <span className={styles.message__name}>{isSend ? "You" : name}</span>
        <div>
          <p className={styles.message__content}>{message}</p>
          <span className={styles.message__time}>
            {new Date(timestamp.toDate()).toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
