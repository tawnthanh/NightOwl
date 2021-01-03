import profilePic from "../../img/profile-pic.png";
import PostFooter from "../PostFooter";

const TextDisplay = ({post}) => {
  return (
    <div className="post-container" id={post.id}>
      <img src={profilePic} alt="profile-default" className="picture-box"/>
      <div className="posts text">
        { post.title && (
            <h1>{post.title}</h1>
        )}
        <div className="details">
          <h3>
            {post.username}:
          </h3>
          {post.description}
        </div>
        <div>
          <PostFooter post={post}/>
        </div>
      </div>
    </div>
  )
}


export default TextDisplay;
