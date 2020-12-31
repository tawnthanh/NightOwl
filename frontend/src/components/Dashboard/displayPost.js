import PhotoDisplay from "../PhotoDisplay";
import TextDisplay from "../TextDisplay";
import AudioDisplay from "../AudioDisplay";
import VideoDisplay from "../VideoDisplay";

const displayPost = (post) => {
  const type = post.postType[0];

  console.log(post)

  if (type === "text") return <TextDisplay post={post} />;

  else if (type === "photo") return <PhotoDisplay post={post}/>;

  else if (type === "audio") return <AudioDisplay post={post}/>;

  else if (type === "video") return <VideoDisplay post={post}/>;
};

export default displayPost;
