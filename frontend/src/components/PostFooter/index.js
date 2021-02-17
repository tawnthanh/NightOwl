import "./PostFooter.css";
import { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setLike } from '../../store/dashboard';
import { destroyPost } from "../../store/post";

const PostFooter = ({ post, user }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [showDiv, setShowDiv] = useState(false);
  const [like, setLike] = useState(false);

  useEffect(() => {
    if(Object.values(post.Likes)[0]) setLike(true)
  })

  const openMenu = () => {
    if (showDiv) return;
    setShowDiv(true);
  };


  const deletePost = () => {
    dispatch(destroyPost(post))
    setTimeout(()=>{history.push('/')}, 500)
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
      { post.userId === user.id && (
        <>
          <button onClick={deletePost}>DELETE</button>
          <button onClick={openMenu}>EDIT</button>
        </>
      )

      }
      <button onClick={openMenu}>REBLOG</button>
      <button onClick={() => console.log(Object.values(post.Likes)[0].likeStatus)} className={like? "like": "noLike"}><i className="fas fa-heart" /></button>
      { showDiv && (
        <div className="like-dropdown">
          Coming Soon!
        </div>
      )}
    </div>
  )
}

export default PostFooter;
