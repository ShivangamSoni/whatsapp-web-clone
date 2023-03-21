import { forwardRef, useState } from "react";

import styles from "./style.module.css";

const CreateRoomModal = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() === "") {
            setError("Name Can't be Empty");
            return;
        }

        onSubmit(name.trim());
    };

    return (
        <div className={styles.container}>
            <h3>Create New Chat Room</h3>
            <form className={styles.form} onSubmit={handleSubmit}>
                {error.length !== 0 && (
                    <span className={styles.error}>{error}</span>
                )}
                <label className={styles.field}>
                    <span>Chat Room Name</span>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <button className={styles.btn} type="submit">
                    Create
                </button>
            </form>
        </div>
    );
};

export default forwardRef(CreateRoomModal);
