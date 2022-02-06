import "./Share.css";
import PermMediaIcon from '@mui/icons-material/PermMedia';
import { AuthContext } from "../../context/AuthContext";
import { useContext,useRef, useState } from "react";
import axios from "axios";

const Share = () => {
  const {user} = useContext(AuthContext);
  const desc = useRef();
  const[file,setFile] = useState(null);
  const submitHandler = async (e) => {
    e.preventDefault()
    const newPost = {
      userId:user._id,
      desc:desc.current.value
    }
    try{
      await axios.post("/posts",newPost);
    }
    catch(err){
      console.log(err);
    }
  }
    return (
        <div className="share">
            <div className="shareWrapper">
              <div className="shareTop">
                <img className="shareProfileImage" src={user.profilePicture ? user.profilePicture : "/assets/default/defaultprofile.jpg"} alt="s1mple"/>
                <input placeholder="Post your Clips" ref={desc} className="shareInput"/>
              </div>
              <hr className="shareHr"/>
              <form className="shareBottom" onSubmit={submitHandler}>
                <div className="shareOption">
                  <label htmlFor="file" className="shareSubOption">
                  <PermMediaIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                    <input style={{display:"none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=>setFile(e.target.files[0])}/>
                  </label>
          
                </div>
                <button type="submit" className="shareButton">Share</button>
              </form>
            </div>
        </div>
    )
}

export default Share;