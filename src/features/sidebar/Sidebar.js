import styles from "./styles.module.css";

import SidebarHeader from "../../components/sidebar/header/Header";
// import SidebarSearch from "../../components/sidebar/search/Search";
import SidebarChatListing from "../../components/sidebar/chatListing/ChatListing";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <SidebarHeader />

            {/* <SidebarSearch /> */}

            <SidebarChatListing />
        </div>
    );
};

export default Sidebar;
