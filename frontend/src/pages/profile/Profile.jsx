import "./Profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import { useEffect,useState } from "react";
import {useParams} from "react-router";
import axios from "axios";

const Profile = () => {

  const [user,setUser] = useState({});
  var [elo,setElo] = useState();
  const params = useParams();
  const username = useParams().username;

useEffect( () => {
  const fetchUser = async () => {
    const res =await axios.get(`/users?username=${username}`);
    setUser(res.data);
    setElo(res.data.elo);
  };
  fetchUser();
},[username]);
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

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user.profilePicture || "/assets/default/defaultcover.jpg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user.coverPicture || "/assets/default/defaultprofile.png"}
                alt=""
              />
              <div className="profileLevel">
          <img src={path} alt=""  className="profileLevelImage"/>
        </div>
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={user.username} />
            <Rightbar user={user}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;