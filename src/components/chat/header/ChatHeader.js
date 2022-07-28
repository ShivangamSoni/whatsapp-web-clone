import { IconButton } from "@mui/material";
import Avatar from "@mui/material/Avatar";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

import styles from "./styles.module.css";

const ChatHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_info}>
        <div className={styles.info__avatar}>
          <Avatar />
        </div>

        <div>
          <h2 className={styles.info__user}>Name</h2>
          <span className={styles.info__status}>Status</span>
        </div>
      </div>

      <div className={styles.header__actions}>
        <IconButton>
          <SearchOutlinedIcon />
        </IconButton>

        <IconButton>
          <MoreVertOutlinedIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default ChatHeader;
