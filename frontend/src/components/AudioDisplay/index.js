import profilePic from "../../img/profile-pic.png";

const AudioDisplay = ({post}) => {
  // if (post.src[0].includes("spotify")) {
    return (
      <div className="post-container ">
      <img src={profilePic} alt="profile-default" className="picture-box"/>
        <div className="posts audio">
          <h1>{post.title}</h1>
          <iframe src={post.src} width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
          <div>
            <h3>{post.username}:</h3>
            {post.description}
          </div>
        </div>
      </div>
    )
  // } else {
  //   return null;
  // }
}

export default AudioDisplay;
