import  owl  from "../../img/owl2.PNG";
import profilePic from "../../img/profile-pic.png";

const displayPost = (postType) => {
  let src;

  if (postType === "text") {

    return (
      <div className="post-container">
        <img src={profilePic} alt="profile-default" className="picture-box"/>
        <div className="posts text">
          <h1>Title</h1>
          <p>Description</p>
        </div>
      </div>
    )
  };

  if (postType === "photo") {

    return (
      <div className="post-container ">
        <img src={profilePic} alt="profile-default" className="picture-box"/>
        <div className="posts photo">
          <h1>Photo</h1>
          <img src={owl} alt="owl" />
          <p> Description</p>
        </div>
      </div>
    )
  };

  if (postType === "audio") {
    src = "https://open.spotify.com/embed-podcast/show/2DZwvzn6Z3xCFZrwZGDrbj"
    if (src.includes("spotify")) {
      return (
        <div className="post-container ">
        <img src={profilePic} alt="profile-default" className="picture-box"/>
          <div className="posts audio">
            <h1>Audio</h1>
            <iframe src={src} width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            <p> Description</p>
          </div>
        </div>
      )
    } else {
      return null;
    }
  };

  if (postType === "video") {
    src = "https://www.youtube.com/embed/uh_E2AbINE0"
    if (src.includes("youtube")) {

      return (
        <div className="post-container ">
          <img src={profilePic} alt="profile-default" className="picture-box"/>
          <div className="posts video">
            <h1>Video</h1>
            <iframe width="100%" height="315" src={src} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p> Description</p>
          </div>
        </div>
      )
    }
  }
};

export default displayPost;
