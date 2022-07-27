import IconButton from "@mui/material/IconButton";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

import styles from "./styles.module.css";

const SidebarSearch = () => {
  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        <IconButton>
          <SearchOutlinedIcon />
          {/* <ArrowBackOutlinedIcon /> */}
        </IconButton>

        <div className={styles.input__group}>
          <span className={styles.placeholder}>Search or start new chat</span>
          <input type="search" />
        </div>

        <IconButton>
          <ClearOutlinedIcon />
        </IconButton>
      </div>

      <div className={styles.search__filter}>
        <IconButton
          title="Unread chats filter"
          // sx={{
          //   backgroundColor: "green",
          // }}
        >
          <FilterListOutlinedIcon
          //   sx={{
          //     color: "#fff",
          //   }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default SidebarSearch;
