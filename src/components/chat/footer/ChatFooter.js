import { useRef, useState } from "react";

import { useParams } from "react-router-dom";

import IconButton from "@mui/material/IconButton";

// import InsertEmoticonOutlinedIcon from "@mui/icons-material/InsertEmoticonOutlined";
// import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";

import {
    addDoc,
    collection,
    serverTimestamp,
    updateDoc,
} from "firebase/firestore";
import db from "../../../firebase/firebase";

import { useSelector } from "../../../context/stateContext";

import styles from "./styles.module.css";

const ChatFooter = () => {
    const { roomId } = useParams();
    const { name, id } = useSelector((state) => state.user);
    const [text, setText] = useState("");
    const inputRef = useRef(null);

    const handleSubmit = async () => {
        const message = {
            userId: id,
            name,
            message: text,
        };

        const docRef = await addDoc(
            collection(db, `chatrooms/${roomId}/messages`),
            message,
        );
        await updateDoc(docRef, {
            timestamp: serverTimestamp(),
        });

        setText("");
        inputRef.current.textContent = "";
    };

    const hasValue = text.length > 0;

    return (
        <footer className={styles.footer}>
            {/* <div className={styles.footer__actions}>
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
            </div> */}

            <div className={styles.footer__input}>
                <div className={styles.input__group}>
                    {!hasValue && (
                        <span className={styles.input__placeholder}>
                            Type a message
                        </span>
                    )}

                    <div
                        ref={inputRef}
                        className={styles.input}
                        onInput={(e) => setText(e.target.textContent)}
                        contentEditable
                        role="textbox"
                    ></div>
                </div>

                <div className={styles.input__btn}>
                    <IconButton onClick={handleSubmit}>
                        <SendOutlinedIcon />
                    </IconButton>
                </div>
            </div>
        </footer>
    );
};

export default ChatFooter;
