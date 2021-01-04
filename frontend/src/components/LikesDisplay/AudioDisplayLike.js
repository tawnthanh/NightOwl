import profilePic from "../../img/profile-pic.png";
import PostFooter from "../PostFooter";

const AudioDisplay = ({post}) => {
    return (
      <div className="post-container" id={post.id}>
      <img src={profilePic} alt="profile-default" className="picture-box"/>
        <div className="posts audio">
          { post.title && (
            <h1>{post.title}</h1>
          )}
          <iframe title={post.id} src={post.src} width="100%" height="232" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <div>
            <h3>{post.originalUser}:</h3>
            {post.description}
          </div>
          <div>
            <PostFooter post={post}/>
          </div>
        </div>
      </div>
    )
}

export default AudioDisplay;
