import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect , } from "react-router-dom";
import './Dashboard.css';
import { displayAllPosts } from '../../store/dashboard'
import PhotoDisplay from "../PhotoDisplay";
import TextDisplay from "../TextDisplay";
import AudioDisplay from "../AudioDisplay";
import VideoDisplay from "../VideoDisplay";

function Dashboard() {
  const sessionUser = useSelector((state) => state.session.user);
  const posts = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(displayAllPosts(sessionUser.id));
    setIsLoaded(true);
  }, [dispatch]);

  if (!sessionUser) return <Redirect to="/" />;
  else return (
  <>
    { isLoaded && (
      <>
        <div className="spacer"></div>
        { posts.map((post, idx) => {
          if (post.PostType.type === "text") return <TextDisplay key={idx} post={post} user={sessionUser} />;

          else if (post.PostType.type === "photo") return <PhotoDisplay key={idx} post={post} user={sessionUser}/>;

          else if (post.PostType.type === "audio") return <AudioDisplay key={idx} post={post} user={sessionUser}/>;

          else if (post.PostType.type === "video") return <VideoDisplay key={idx} post={post} user={sessionUser}/>;
        })}
      </>
    )}
</>
)
}

export default Dashboard;
