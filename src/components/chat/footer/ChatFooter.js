import { useState } from "react";

import IconButton from "@mui/material/IconButton";

import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import styles from "./styles.module.css";

const ChatFooter = () => {
  const [text, setText] = useState("");

  const hasValue = text.length > 0;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__actions}>
        <div className={styles.action}>
          <IconButton>
            <InsertEmoticonOutlinedIcon />
          </IconButton>
        </div>

        <div className={styles.action}>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
        </div>
      </div>

      <div className={styles.footer__input}>
        <div className={styles.input__group}>
          {!hasValue && (
            <span className={styles.input__placeholder}>Type a message</span>
          )}

          <div
            className={styles.input}
            onInput={(e) => setText(e.target.textContent)}
            contentEditable
            role="textbox"
          ></div>
        </div>

        <div className={styles.input__btn}>
          <IconButton>
            <SendOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </footer>
  );
};

export default ChatFooter;
