import VidAudForm from './VidAudForm';
import TextForm from './TextForm';
import PhotoForm from './PhotoForm';

const CreatePostForm = () => {
  const pathArray = window.location.pathname.split("/");
  const postType = pathArray[pathArray.length - 1];

  return (
    <>
      { postType === "text" && (
        <TextForm />
        )
      }
      { postType === "photo" && (
        <PhotoForm />
        )
      }
      { (postType === "audio" || postType === "video") && (
        <VidAudForm />
        )
      }
    </>

  )
}

export default CreatePostForm;
