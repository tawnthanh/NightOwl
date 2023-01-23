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
  const likedPosts = useSelector((state) => state.dashboard.likedPosts);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("useEffect", likedPosts);
    dispatch(displayAllLikes(sessionUser.id)).then(() => setIsLoaded(true));
  }, [dispatch, sessionUser.id]);


  if (!sessionUser) return <Redirect to="/" />;
  else return (
    <div>
      { isLoaded && (
        <>
        <div className="spacer"></div>
        { Object.values(likedPosts).map((post, idx) => {
          if (post.PostType.type === "audio") return <AudioDisplay key={idx} post={post} user={sessionUser}/>;
          if (post.PostType.type === "video") return <VideoDisplay key={idx} post={post} user={sessionUser}/>;
          if (post.PostType.type === "photo") return <PhotoDisplay key={idx} post={post} user={sessionUser}/>;
          if (post.PostType.type === "text") return <TextDisplay key={idx} post={post} user={sessionUser}/>;

        })}
        </>
      )}

  </div>

  )
}

export default LikesDisplay;
