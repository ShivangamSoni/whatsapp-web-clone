import styles from "./styles.module.css";

import { ReactComponent as PanelImage } from "../../../assets/chat-panel.svg";

const ChatWelcome = () => {
  return (
    <div className={styles.welcome}>
      <div>
        <PanelImage />
        <div className={styles.welcome__info}>
          <h1>WhatsApp Web</h1>
          <p>
            This Chatting Web App created to Look like Whats App.
            <br />
            It doesn't have any relation to WhatsApp or Meta
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatWelcome;
