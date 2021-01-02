import profilePic from "../../img/profile-pic.png";
import ReblogLike from "../ReblogLike";

const VideoDisplay = ({post}) => {
    return (
      <div className="post-container ">
        <img src={profilePic} alt="profile-default" className="picture-box"/>
        <div className="posts video">
          { post.title && (
            <h1>{post.title}</h1>
          )}
          <iframe title={post.id} src={post.src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div>
            <h3>{post.username}:</h3>
            {post.description}
          </div>
          <div>
            <ReblogLike />
          </div>
        </div>
      </div>
    )
}

export default VideoDisplay;
