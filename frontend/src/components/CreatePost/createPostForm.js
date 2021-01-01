import { useHistory, Redirect } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../../store/post';

const CreatePostForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [src, setSrc] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const sessionUser = useSelector((state) => state.session.user);

  const pathArray = window.location.pathname.split("/");
  const postType = pathArray[pathArray.length - 1];

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const post = {
      title,
      postType,
      description,
      src,
      userId: sessionUser.id
    };

    dispatch(createPost(post));
    history.push("/dashboard");

  }

  return (
    <>
      <form className="form-posts" onSubmit={handleSubmit}>
        {errors.map((error, idx) => (
          <p className="post-error" key={idx}>{error}</p>
        ))}
        <div>
          <label>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              />
          </label>
        </div>
        <div>
          <label>
            <input
              type="text"
              placeholder="embedded URL"
              value={src}
              onChange={(e)=>setSrc(e.target.value)}
              />
          </label>
          </div>
        <div>
          <label>
            <textarea
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              />
          </label>
        </div>
        <div>
          <button type="submit">CREATE POST</button>
        </div>
      </form>
      <h1>FORM</h1>
    </>

  )
}

export default CreatePostForm;
