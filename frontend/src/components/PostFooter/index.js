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
  const [heart1, setHeart1] = useState(true);
  const [heart2, setHeart2] = useState(false);
  const [heart3, setHeart3] = useState(false);
  const [heart4, setHeart4] = useState(false);

  let buttonCount = 0;

  const openMenu = () => {
    if (showDiv) return;
    setShowDiv(true);
  };

  const likeFeature1 = () => {
    const postObj = {
      postId: post.postId,
      userId: sessionUser.id
    }
    dispatch(setLike(postObj))
    setHeart1(!heart1)

  };

  const likeFeature2 = () => {
    const postObj = {
      postId: post.postId,
      userId: sessionUser.id
    }
    dispatch(setLike(postObj))
    setHeart2(!heart2)
  }

  const likeFeature3 = () => {
    const postObj = {
      postId: post.postId,
      userId: sessionUser.id
    }
    dispatch(setLike(postObj))
    setHeart3(!heart3)
  }

  const likeFeature4 = () => {
    const postObj = {
      postId: post.postId,
      userId: sessionUser.id
    }
    dispatch(setLike(postObj))
    setHeart4(!heart4)
  }

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
          return <button onClick={likeFeature1} className={heart1? "like": "noLike"} key={idx}><i className="fas fa-heart" /></button>
        } else if (likePost.user !== sessionUser.id && buttonCount > 1 ) {
          buttonCount++
          return <button onClick={likeFeature2} className={heart2? "like": "noLike"} key={idx}><i className="fas fa-heart" /></button>
        } else return null;
      })}
      { post.likedPost.length >= 1 && (
        post.likedPost.map((likePost, idx) => {
          if (likePost.userId !== sessionUser.id && buttonCount !== 1) {
            buttonCount++;
            return <button onClick={likeFeature3} className={heart3? "like": "noLike"} key={idx}><i className="fas fa-heart" /></button>
          }
          return null;
        })

        )}
      { !post.likedPost.length && (
        <button onClick={likeFeature4} className={heart4? "like": "noLike"}><i className="fas fa-heart" /></button>

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
