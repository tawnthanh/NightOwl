import "./CreatePost.css";

const CreatePostNav = () => {

  return (
    <div className="create-a-post">
      <div className="text-nav">
        < a href="/create-post/text">
          <i className="fas fa-text-height"></i>
          <div>Text</div>
        </a>
      </div>
      <div className="photo-nav">
        <a href="/create-post/photo">
          <i className="fas fa-image"></i>
          <div>Photo</div>
        </a>
      </div>
      <div className="video-nav">
        <a href="/create-post/video">
          <i className="fab fa-youtube"></i>
          <div>Video</div>
        </a>
      </div>
      <div className="audio-nav">
        <a href="/create-post/audio">
          <i className="fas fa-volume-up"></i>
          <div>Audio</div>
        </a>
      </div>
    </div>
  )
}

export default CreatePostNav;
