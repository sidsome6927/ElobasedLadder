import "./Topbar.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import {AuthContext} from "../../context/AuthContext";
import { useContext } from "react";
import {Link} from "react-router-dom";


const Topbar = () => {


const {user} = useContext(AuthContext);
const elo = user.elo;
var path;
if(elo>=0 && elo<=800)
path="/assets/faceitlevels/level1.png";
if(elo>=801 && elo<=950)
path="/assets/faceitlevels/level2.png";
if(elo>=951 && elo<=1100)
path="/assets/faceitlevels/level3.png";
if(elo>=1101 && elo<=800)
path="/assets/faceitlevels/level4.png";
if(elo>=851 && elo<=1250)
path="/assets/faceitlevels/level5.png";
if(elo>=1251 && elo<=1400)
path="/assets/faceitlevels/level6.png";
if(elo>=1401 && elo<=1550)
path="/assets/faceitlevels/level7.png";
if(elo>=1551 && elo<=1700)
path="/assets/faceitlevels/level8.png";
if(elo>=1701 && elo<=2000)
path="/assets/faceitlevels/level9.png";
if(elo>=2001 && elo<=1000000)
path="/assets/faceitlevels/level10.png";
    return(
      <div>
        <div className="topbarcontainer">
        <div className="topbarleft">
        <span className="logo">
        FACEIT
        <KeyboardArrowDownIcon/>
        </span>
        </div>
        <div className="topbarcenter">
        <SearchIcon className="searchicon"/>
        <input placeholder="Search for friends" className="searchinput"/>
        </div>
        <div className="topbarright">
        <div className="topbarLevel">
          <img src={path} alt=""  className="topbarLevelImage"/>
        </div>
          <div className="topbarIcon">
            <div className="topbarIconItem">
            <NotificationsActiveIcon/>
            <span className="topbarIconBadge">
              1
            </span>
            </div>
          </div>
          <Link to={`/profile/${user.username}`}>
          <img src={user.profilePicture ? user.profilePicture :"/assets/default/defaultprofile.png"} alt="S1mple aana chahiye lavde" className="topbarImg"/>
          </Link>
        
        </div>

        </div>
      </div>
    )
}

export default Topbar;