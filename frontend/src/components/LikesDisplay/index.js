import "./LikesDisplay.css";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { displayAllLikes } from '../../store/dashboard';
import { useEffect } from "react";
import AudioDisplayLike from './AudioDisplayLike';

const LikesDisplay = () => {
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(displayAllLikes());
  }, [dispatch]);


  console.log(posts)
  if (!sessionUser) return <Redirect to="/" />;

  return (
    <div>
      <div className="spacer"></div>
      { posts.map((post, idx) => {
        if ( sessionUser.id === post.userId && post.postType[0] === "video") return <AudioDisplayLike post={post} />
        if( sessionUser.id === post.userId && post.postType[0] === "audio") return <div key={idx} className={"likes-post" +" "+ post.id}>hi Audio</div>
      })}
  </div>

  )
}

export default LikesDisplay;
