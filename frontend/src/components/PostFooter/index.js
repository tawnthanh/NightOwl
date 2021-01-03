import "./PostFooter.css";
import { useState, useEffect } from "react";
import {setLike} from "../../store/dashboard"
import { useSelector, useDispatch } from 'react-redux';

const PostFooter = ({post}) => {
  const [showDiv, setShowDiv] = useState(false);
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  const openMenu = () => {
    if (showDiv) return;
    setShowDiv(true);
  };

  const likeFeature = () => {
    const postObj = {
      postId: post.postId,
      userId: sessionUser.id
    };

   dispatch(setLike(postObj))
  }
  useEffect(() => {
    if (!showDiv) return;

    const closeMenu = () => {
      setShowDiv(false);
    };

    document.addEventListener('click', closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showDiv]);

  return (
    <div className="footer">
      <button onClick={openMenu}>DELETE</button>
      <button onClick={openMenu}>EDIT</button>
      <button onClick={openMenu}>REBLOG</button>
      <button onClick={likeFeature}><i className={"fas fa-heart"} /></button>
      { showDiv && (
        <div className="like-dropdown">
          Coming Soon!
        </div>
      )}
    </div>
  )
}

export default PostFooter;
