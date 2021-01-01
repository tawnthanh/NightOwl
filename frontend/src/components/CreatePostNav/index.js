import "./CreatePost.css";
import { NavLink } from 'react-router-dom';

const CreatePostNav = () => {
  return (
    <div className="create-a-post">
      <div>
        <a href="/create-post/text" >
          <i className="fas fa-text-height"></i>
        </a>
      </div>
      <div>
        <NavLink to="/create-post/photo">
          <i className="fas fa-image"></i>
        </NavLink>
      </div>
      <div>
        <NavLink to="/create-post/video">
          <i className="fas fa-video"></i>
        </NavLink>
      </div>
      <div>
        <NavLink to="/create-post/audio">
          <i className="fab fa-youtube"></i>
        </NavLink>
      </div>
    </div>
  )
}

export default CreatePostNav;
