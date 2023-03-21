import { useEffect, useRef } from "react";

import IconButton from "@mui/material/IconButton";

import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";

import styles from "./styles.module.css";

import ChatMessage from "../chatMessage/ChatMessage";

const ChatBody = ({ messages }) => {
    const messagesContainer = useRef(null);

    useEffect(() => {
        scrollToLatest();
    }, [messages]);

    const scrollToLatest = () =>
        (messagesContainer.current.scrollTop =
            messagesContainer.current.scrollHeight);

    return (
        <main className={styles.body} ref={messagesContainer}>
            <div></div>
            <div className={styles.messages}>
                {messages.map(({ id, data }) => (
                    <ChatMessage key={id} {...data} />
                ))}
            </div>

            <div className={styles.scroll}>
                <IconButton
                    title="Goto Latest Message"
                    onClick={scrollToLatest}
                >
                    <ExpandMoreOutlinedIcon />
                </IconButton>
            </div>
        </main>
    );
};

export default ChatBody;
