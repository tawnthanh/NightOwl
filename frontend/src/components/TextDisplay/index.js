import profilePic from "../../img/profile-pic.png";
import PostFooter from "../PostFooter";

const TextDisplay = ({post, user}) => {
  return (
    <div className="post-container" id={post.id}>
      <img src={profilePic} alt="profile-default" className="picture-box"/>
      <div className="posts text">
        { post.title && (
            <h1>{post.title}</h1>
        )}
        <div className="details">
          <h3>
            {post.User.username}:
          </h3>
          {post.PostContents[0].description}
        </div>
        <div>
          <PostFooter post={post} user={user}/>
        </div>
      </div>
    </div>
  )
}


export default TextDisplay;
