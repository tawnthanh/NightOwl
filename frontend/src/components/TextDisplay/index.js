import profilePic from "../../img/profile-pic.png";

const TextDisplay = ({post}) => {
  return (
    <div className="post-container">
      <img src={profilePic} alt="profile-default" className="picture-box"/>
      <div className="posts text">
        { post.title && (
            <h1>{post.title}</h1>
        )}
        <div>
          <h3>
            {post.username}:
          </h3>
          {post.description}
        </div>
      </div>
    </div>
  )
}


export default TextDisplay;
