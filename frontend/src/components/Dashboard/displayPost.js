import PhotoDisplay from "../PhotoDisplay";
import TextDisplay from "../TextDisplay";
import AudioDisplay from "../AudioDisplay";
import VideoDisplay from "../VideoDisplay";

const displayPost = (postType) => {
  let src;

  if (postType === "text") return <TextDisplay />;

  if (postType === "photo") return <PhotoDisplay />;

  if (postType === "audio") return <AudioDisplay />;

  if (postType === "video") return <VideoDisplay />;
};

export default displayPost;
