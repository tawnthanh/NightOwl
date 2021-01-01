import "./CreatePost.css";

const CreatePostNav = () => {

  return (
    <div className="create-a-post">
      <div>
        <a href="/create-post/text">
          <i className="fas fa-text-height"></i>
        </a>
      </div>
      <div>
        <a href="/create-post/photo">
          <i className="fas fa-image"></i>
        </a>
      </div>
      <div>
        <a href="/create-post/video">
          <i className="fas fa-video"></i>
        </a>
      </div>
      <div>
        <a href="/create-post/audio">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  )
}

export default CreatePostNav;
