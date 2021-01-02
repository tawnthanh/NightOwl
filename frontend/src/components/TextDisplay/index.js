import profilePic from "../../img/profile-pic.png";
import ReblogLike from "../ReblogLike";

const TextDisplay = ({post}) => {
  return (
    <div className="post-container">
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
        <ReblogLike />
      </div>
    </div>
  )
}


export default TextDisplay;
