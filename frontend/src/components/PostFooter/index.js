import "./PostFooter.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch,  } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setLike } from '../../store/dashboard';
import { destroyPost } from "../../store/post";

const PostFooter = ({post}) => {
  const sessionUser = useSelector(state => state.session.user)
  const dispatch = useDispatch();
  const history = useHistory();

  const [showDiv, setShowDiv] = useState(false);
  const [secondLike, setSecondLike] = useState(false);

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

  const deletePost = () => {
    dispatch(destroyPost(post))
    setTimeout(()=>{history.push('/')}, 500)
  }

  // useEffect(() => {
  //   if (secondLike) return;
  // }, [secondLike]);

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
          <button onClick={deletePost}>DELETE</button>
          <button onClick={openMenu}>EDIT</button>
        </>
      )

      }
      <button onClick={openMenu}>REBLOG</button>
      { post.likedPost.map((likePost, idx) => {
        if (likePost.userId === sessionUser.id) {
          buttonCount++;
          return <button onClick={likeFeature} className={"like"+ " " + buttonCount} key={idx}><i className="fas fa-heart" /></button>
        } else if (likePost.user !== sessionUser.id && buttonCount > 1 ) {
          buttonCount++
          return <button onClick={likeFeature} className={"noLike"+ " " + buttonCount} key={idx}><i className="fas fa-heart" /></button>
        } else return null;
      })}
      { post.likedPost.length >= 1 && (
        post.likedPost.map((likePost, idx) => {
          if (likePost.userId !== sessionUser.id && buttonCount !== 1) {
            buttonCount++;
            return <button onClick={likeFeature} className={"noLike"+ " " + buttonCount} key={idx}><i className="fas fa-heart" /></button>
          }
          return null;
        })

        )}
      { !post.likedPost.length && (
        <button onClick={likeFeature} className={"noLike"+ " " + buttonCount}><i className="fas fa-heart" /></button>

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
