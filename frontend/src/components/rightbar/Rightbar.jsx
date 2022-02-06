import "./Rightbar.css";
import {Users} from "../dummyData"
import Online from "../online/Online"

const Rightbar = () => {
    return (
        <div className="rightbar">
          <div className="rightbarWrapper">
              <div className="rightbarOnline">
                <h4 className="rightbarText">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=>(
                      <Online key={u.id} user={u}/>
                    ))}
                    
                  </ul>

              </div>
          </div>
        </div>
    )
}


export default Rightbar;