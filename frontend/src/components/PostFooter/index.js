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
  const [like, setLikeButton] = useState(false);

  useEffect(() => {
    setLikeButton(post.likeStatus);
  }, [post]);

  useEffect(() => {
    dispatch(setLike({...post, "likeStatus": like}))
  }, [like]);

  const openMenu = () => {
    showDiv? setShowDiv(!showDiv): setShowDiv(true);
  };


  const deletePost = () => {
    dispatch(destroyPost(post))
    setTimeout(() => { history.push('/') }, 500)
  };

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
      <button onClick={() => setLikeButton(!like)} className={like? "like": "noLike"}><i className="fas fa-heart" /></button>
      { showDiv && (
        <div className="like-dropdown">
          Coming Soon!
        </div>
      )}
    </div>
  )
}

export default PostFooter;
