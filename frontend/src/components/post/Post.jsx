import "./Post.css";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState,useEffect,useContext } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Post = ({post}) => {
  const [like,setLike] = useState(post.likes.length);
  const [isLike,setIsLike] = useState(false);
  const [user,setUser] = useState({});
  const {currentUser} = useContext(AuthContext);

  useEffect ( () => {
    setIsLike(post.likes.includes(currentUser._id))
  },[currentUser._id,post.likes]);
  
  useEffect( () => {
    const fetchUser = async () => {
      const res =await axios.get(`/users/${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  },[post.userId]);
  const likeHandler = () => {
    try{
      axios.put("/posts/"+post._id+"/like",{userId:currentUser._id})
    }catch(err)
    {

    }
    setLike((isLike)? like-1 : like+1)
    setIsLike(!isLike)
  }
    return(
        <div className="post">
            <div className="postWrapper">
              <div className="postTop">
                <div className="postTopLeft">
                <Link to={`/profile/${user.username}`}>
                <img  src={user.profilePicture ? user.profilePicture : "/assets/default/defaultprofile.jpg"} alt="s1mple aana chahiye" className="postProfileImage"/>
                </Link>
                
                <span className="postUsername">{user.username}</span>
                <span className="postDate">{post.createdAt}</span>
                </div>
                <div className="postTopRight">
                  <MoreVertIcon className="postTopRightIcon"/>
                </div>
                
              </div>
              
              <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.img} alt="" className="postImg"/>
              </div>
              <div className="postBottom">
                <div className="postBottomLeft">
                  <ThumbUpIcon className="postBottomLike" onClick={likeHandler}/>
                  <span className="postLikeCount">{like} likes</span>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Post;