import profilePic from "../../img/profile-pic.png";
import PostFooter from "../PostFooter";

const VideoDisplay = ({post, user}) => {
    return (
      <div className="post-container " id={post.id}>
        <img src={profilePic} alt="profile-default" className="picture-box"/>
        <div className="posts video">
          { post.title && (
            <h1>{post.title}</h1>
          )}
          <iframe title={post.id} src={post.PostContents[0].src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div>
            <h3>{post.User.username}:</h3>
            {post.PostContents[0].description}
          </div>
          <div>
            <PostFooter post={post} user={user}/>
          </div>
        </div>
      </div>
    )
}

export default VideoDisplay;
