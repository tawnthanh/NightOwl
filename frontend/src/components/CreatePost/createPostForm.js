import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const CreatePostForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [src, setSrc] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);


  }
  const backToDashboard = (e) => {
    e.preventDefault();
    history.push("/dashboard");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
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
          <button onClick={backToDashboard}>CREATE POST</button>
        </div>
      </form>
      <h1>FORM</h1>
    </>

  )
}

export default CreatePostForm;
