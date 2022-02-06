import "./Sidebar.css";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import SlowMotionVideoIcon from '@mui/icons-material/SlowMotionVideo';
import GroupIcon from '@mui/icons-material/Group';

const Sidebar = () => {
    return (
        <div className="sidebar">
          <div className="sidebarWrapper">
          <ul className="sidebarList">
              <li className="sidebarListItem">
              <SlowMotionVideoIcon className="sidebarListItemIcon"/>
              <span className="sidebarListItemText">Queue</span>
              </li>
              <li className="sidebarListItem">
              <ChatIcon className="sidebarListItemIcon"/>
              <span className="sidebarListItemText">Home</span>
              </li>
              <li className="sidebarListItem">
              <RssFeedIcon className="sidebarListItemIcon"/>
              <span className="sidebarListItemText">Timeline</span>
              </li>
              <li className="sidebarListItem">
              <GroupIcon className="sidebarListItemIcon"/>
              <span className="sidebarListItemText">Groups</span>
              </li>
          </ul>
          <hr className="sidebarHr"/>
          <ul className="sidebarFriendList">
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>
            <li className="sidebarFriend">
                <img className="sidebarFriendImage" src="/assets/download.jpg" alt=""/>
                <span className="sidebarFriendName">B1T</span>
            </li>

          </ul>
          </div>
        </div>
    )
}

export default Sidebar;