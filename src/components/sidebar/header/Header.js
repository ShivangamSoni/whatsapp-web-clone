import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import ChatIcon from "@mui/icons-material/Chat";

import styles from "./styles.module.css";

const SidebarHeader = () => {
  return (
    <header className={styles.header}>
      <div>
        <Avatar />
      </div>

      <div className={styles.header__options}>
        <IconButton>
          <DonutLargeIcon />
        </IconButton>

        <IconButton>
          <ChatIcon />
        </IconButton>

        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </header>
  );
};

export default SidebarHeader;
