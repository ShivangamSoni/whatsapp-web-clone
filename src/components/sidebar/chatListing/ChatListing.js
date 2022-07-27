import SidebarChatItem from "../chatItem/ChatItem";
import styles from "./styles.module.css";

const SidebarChatListing = () => {
  return (
    <ul className={styles.list}>
      <SidebarChatItem />
      <SidebarChatItem />
      <SidebarChatItem />
      <SidebarChatItem />
    </ul>
  );
};
<li>Listing</li>;

export default SidebarChatListing;
