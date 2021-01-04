import "./LikesDisplay.css";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { displayAllLikes } from '../../store/dashboard';
import { useEffect } from "react";
import VideoDisplayLike from './VideoDisplayLike';
import PhotoDisplayLike from './PhotoDisplayLike';
import TextDisplayLike from './TextDisplayLike';
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
        if (sessionUser.id === post.User.id && post.postType[0] === "audio") return <AudioDisplayLike post={post} />;
        if (sessionUser.id === post.User.id && post.postType[0] === "video") return <VideoDisplayLike post={post} />;
        if (sessionUser.id === post.User.id && post.postType[0] === "photo") return <PhotoDisplayLike post={post} />;
        if (sessionUser.id === post.User.id && post.postType[0] === "text") return <TextDisplayLike post={post} />;
        else return null;
      })}
  </div>

  )
}

export default LikesDisplay;
