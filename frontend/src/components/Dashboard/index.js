import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect ,  Route } from "react-router-dom";
import './Dashboard.css';
import { displayAllPosts } from '../../store/dashboard'
import PhotoDisplay from "../PhotoDisplay";
import TextDisplay from "../TextDisplay";
import AudioDisplay from "../AudioDisplay";
import VideoDisplay from "../VideoDisplay";
import LikesDisplay from "../LikesDisplay";
import UserPosts from "../UserPosts";

function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);
  const posts = useSelector((state) => state.dashboard.allPosts);
  const allLikedPosts = useSelector(state => state.dashboard.likedPosts)
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(displayAllPosts(sessionUser.id));
    setIsLoaded(true);
  }, [dispatch, sessionUser.id]);

  if (!sessionUser) return <Redirect to="/" />;
  else return (
  <>
    { isLoaded && (
      <>
        <div className="spacer"></div>
        { Object.values(posts).map((post, idx) => {
          if (post.PostType.type === "text") return <TextDisplay key={idx} post={post} user={sessionUser} />;

          else if (post.PostType.type === "photo") return <PhotoDisplay key={idx} post={post} user={sessionUser}/>;

          else if (post.PostType.type === "audio") return <AudioDisplay key={idx} post={post} user={sessionUser}/>;

          else if (post.PostType.type === "video") return <VideoDisplay key={idx} post={post} user={sessionUser}/>;

          return;
        })}
      </>
    )}
</>
)
}

export default Dashboard;
