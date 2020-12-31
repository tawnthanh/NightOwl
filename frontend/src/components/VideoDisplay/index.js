import profilePic from "../../img/profile-pic.png";


const VideoDisplay = ({post}) => {
  console.log("video display: ", post)
  // if (post.src[0].includes("youtube")) {
    return (
      <div className="post-container ">
        <img src={profilePic} alt="profile-default" className="picture-box"/>
        <div className="posts video">
          <h1>{post.title}</h1>
          <iframe title={post.id} width="100%" height="315" src={post.src} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div>
            <h3>{post.username}:</h3>
            {post.description}
          </div>
        </div>
      </div>
    )
  // }
}

export default VideoDisplay;
