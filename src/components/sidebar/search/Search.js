import { useRef, useState } from "react";

import IconButton from "@mui/material/IconButton";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import FilterListOutlinedIcon from "@mui/icons-material/FilterListOutlined";

import styles from "./styles.module.css";

const SidebarSearch = () => {
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const inputRef = useRef(null);

  const clear = () => {
    setSearch("");
  };

  const focusInput = () => {
    inputRef.current.focus();
  };

  const clearAndFocus = () => {
    clear();
    focusInput();
  };

  const hasValue = search.length > 0;

  return (
    <div className={styles.search}>
      <div className={styles.search__input}>
        {!focus && !hasValue ? (
          <IconButton onClick={focusInput}>
            <SearchOutlinedIcon />
          </IconButton>
        ) : (
          <IconButton onClick={clear} className={styles.input__back}>
            <ArrowDownwardOutlinedIcon />
          </IconButton>
        )}

        <div className={styles.input__group}>
          {!hasValue && !focus && (
            <span className={styles.placeholder}>Search or start new chat</span>
          )}
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            ref={inputRef}
            onFocus={() => setFocus(true)}
            onBlur={() => setFocus(false)}
          />
        </div>

        {hasValue && (
          <IconButton title="Clear" onClick={clearAndFocus}>
            <ClearOutlinedIcon />
          </IconButton>
        )}
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
