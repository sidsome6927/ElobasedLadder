import "./Online.css"

const Online = ({user}) => {
    return(
        <li className="rightbarFriend">
                      <div className = "rightbarFriendContainer">
                        <img className="rightbarFriendProfileImg" src={user.profilePicture} alt = "b1t"/>
                        <span className="rightbarOnlineFriend">{user.username}</span>
                        <div className="rightbarOnlineGreen"></div>
                      </div>
                      
        </li>
    )
}

export default Online;