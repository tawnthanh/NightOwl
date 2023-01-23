import { Link } from "react-router-dom";
import "./CreatePostNav.css";

const CreatePostNav = () => {

  return (
    <div className="create-a-post">
        <Link to="/create-post/text" className="text-nav">
          <i className="fas fa-text-height"></i>
          <div>Text</div>
        </Link>
        <Link to="/create-post/photo" className="photo-nav">
          <i className="fas fa-image"></i>
          <div>Photo</div>
        </Link>
        <Link to="/create-post/video" className="video-nav">
          <i className="fab fa-youtube"></i>
          <div>Video</div>
        </Link>    
        <Link to="/create-post/audio" className="audio-nav">
          <i className="fas fa-volume-up"></i>
          <div>Audio</div>
        </Link>
    </div>
  )
}

export default CreatePostNav;
