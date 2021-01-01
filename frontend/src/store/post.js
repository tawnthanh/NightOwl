import { fetch } from './csrf.js';

const CREATE_POST = "post/CREATE_POST";
// const DELETE_POST = "post/DELETE_POST";
// const EDIT_POST = "post/EDIT_POST";

const setPost = (post) => ({
  type: CREATE_POST,
  post
})


export const createPost = ( post ) => async (dispatch) => {
  const res = await fetch(`/api/create-post/${post.postType}`, {
    method: 'POST',
    body: JSON.stringify(post)
  })

  dispatch(setPost(post));
  return res;
}

function reducer(state = [], action) {
  switch (action.type) {
    case CREATE_POST:
      return action.post;
    default:
      return state;
  }
}

export default reducer;
