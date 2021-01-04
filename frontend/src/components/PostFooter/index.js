import "./PostFooter.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setLike } from '../../store/dashboard';

const PostFooter = ({post}) => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  const [showDiv, setShowDiv] = useState(false);
  let buttonCount = 0;
  const openMenu = () => {
    if (showDiv) return;
    setShowDiv(true);
  };

  const likeFeature = () => {
    const postObj = {
      postId: post.postId,
      userId: sessionUser.id
    }
    dispatch(setLike(postObj));

  };



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
      { post.userId === sessionUser.id && (
        <>
          <button onClick={openMenu}>DELETE</button>
          <button onClick={openMenu}>EDIT</button>
        </>
      )

      }
      <button onClick={openMenu}>REBLOG</button>
      { post.likedPost.map((likePost, idx) => {
        if (likePost.userId === sessionUser.id) {
          buttonCount++;
          return <button onClick={likeFeature} className="like" key={idx}><i className="fas fa-heart" /></button>
        } else if (likePost.user !== sessionUser.id && buttonCount === 1 ) {
          return <button onClick={likeFeature} className="noLike" key={idx}><i className="fas fa-heart" /></button>
        } else return null;
      })}
      { post.likedPost.length === 1 && (
        post.likedPost.map((likePost, idx) => {
          if (likePost.userId !== sessionUser.id) {
            return <button onClick={likeFeature} className="noLike" key={idx}><i className="fas fa-heart" /></button>
          }
          return null;
        })

        )}
      { !post.likedPost.length && (
        <button onClick={likeFeature} className="noLike"><i className="fas fa-heart" /></button>

      )}
      { showDiv && (
        <div className="like-dropdown">
          Coming Soon!
        </div>
      )}
    </div>
  )
}

export default PostFooter;
