import profilePic from "../../img/profile-pic.png";

const TextDisplay = ({post}) => {
  return (
    <div className="post-container">
      <img src={profilePic} alt="profile-default" className="picture-box"/>
      <div className="posts text">
        <h1>{post.title}</h1>
        <p>
          <h3>
            {post.username}:
          </h3>
          {post.description}
        </p>
      </div>
    </div>
  )
}


export default TextDisplay;
