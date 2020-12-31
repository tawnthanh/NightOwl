import  owl  from "../../img/owl2.PNG";
import profilePic from "../../img/profile-pic.png";

const PhotoDisplay = ({post}) => {

  return (
    <div className="post-container ">
      <img src={profilePic} alt="profile-default" className="picture-box" />
      <div className="posts photo">
        <h1>{post.title}</h1>
        <img src={post.src} alt={post.title} />
        <p>
          <h3>{post.username}</h3>
          {post.description}
        </p>
      </div>
    </div>
  );
}

export default PhotoDisplay;
