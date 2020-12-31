import PhotoDisplay from "../PhotoDisplay";
import TextDisplay from "../TextDisplay";
import AudioDisplay from "../AudioDisplay";
import VideoDisplay from "../VideoDisplay";

const displayPost = (post, idx) => {
  const type = post.postType[0];

  console.log(post)

  if (type === "text") return <TextDisplay key={idx} post={post} />;

  else if (type === "photo") return <PhotoDisplay key={idx} post={post}/>;

  else if (type === "audio") return <AudioDisplay key={idx} post={post}/>;

  else if (type === "video") return <VideoDisplay key={idx} post={post}/>;
};

export default displayPost;
