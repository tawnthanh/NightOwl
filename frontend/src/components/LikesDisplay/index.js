import "./LikesDisplay.css";
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { displayAllLikes } from '../../store/dashboard';
import { useEffect, useState } from "react";
import PhotoDisplay from "../PhotoDisplay";
import TextDisplay from "../TextDisplay";
import AudioDisplay from "../AudioDisplay";
import VideoDisplay from "../VideoDisplay";

const LikesDisplay = () => {
  const sessionUser = useSelector(state => state.session.user);
  const posts = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(displayAllLikes(sessionUser.id)).then(() => setIsLoaded(true));
  }, [dispatch]);


  if (!sessionUser) return <Redirect to="/" />;
  else return (
    <div>
      { isLoaded && (
        <>
        <div className="spacer"></div>
        { posts.map((post, idx) => {
          if (post.PostType.type === "audio") return <AudioDisplay key={idx} post={post} user={sessionUser}/>;
          if (post.PostType.type === "video") return <VideoDisplay key={idx} post={post} user={sessionUser}/>;
          if (post.PostType.type === "photo") return <PhotoDisplay key={idx} post={post} user={sessionUser}/>;
          if (post.PostType.type === "text") return <TextDisplay key={idx} post={post} user={sessionUser}/>;
          else return null;
        })}
        </>
      )}

  </div>

  )
}

export default LikesDisplay;
