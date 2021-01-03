import profilePic from "../../img/profile-pic.png";
import PostFooter from "../PostFooter";

const PhotoDisplay = ({post}) => {

  return (
    <div className="post-container " id={post.id}>
      <img src={profilePic} alt="profile-default" className="picture-box" />
      <div className="posts photo">
        { post.title && (
            <h1>{post.title}</h1>
        )}
        <img src={post.src} alt={post.title} />
        <div className="details">
          <h3>{post.username}: </h3>
          {post.description}
        </div>
        <div>
          <PostFooter post={post}/>
        </div>
      </div>
    </div>
  );
}

export default PhotoDisplay;
