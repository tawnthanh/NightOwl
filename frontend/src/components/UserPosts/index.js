import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useEffect, useState } from "react";
import VideoDisplay from '../VideoDisplay';
import PhotoDisplay from '../PhotoDisplay';
import TextDisplay from '../TextDisplay';
import AudioDisplay from '../AudioDisplay';
import { displayAllPosts } from '../../store/dashboard'

const UserPosts = () => {
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(displayAllPosts()).then(() => setIsLoaded(true));
  }, [dispatch]);


  console.log(posts)
  if (!sessionUser) return <Redirect to="/" />;

  return (
    <div>
      { isLoaded && (
        <>
        <div className="spacer"></div>
        { posts.map((post, idx) => {
          if (sessionUser.id === post.userId && post.postType[0] === "audio") return <AudioDisplay post={post} />;
          if (sessionUser.id === post.userId && post.postType[0] === "video") return <VideoDisplay post={post} />;
          if (sessionUser.id === post.userId && post.postType[0] === "photo") return <PhotoDisplay post={post} />;
          if (sessionUser.id === post.userId && post.postType[0] === "text") return <TextDisplay post={post} />;
          else return null;
        })}
        </>
      )}

  </div>

  )
}

export default UserPosts;
