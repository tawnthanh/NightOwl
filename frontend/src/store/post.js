import { fetch } from './csrf.js';

const CREATE_POST = "post/CREATE_POST";
const DELETE_POST = "post/DELETE_POST";
// const EDIT_POST = "post/EDIT_POST";

const setPost = (post) => ({
  type: CREATE_POST,
  post
})

const deletePost = (post) => ({
  type: DELETE_POST,
  post
})

//THUNK

export const createPost = ( post ) => async (dispatch) => {
  const res = await fetch(`/api/post/create/${post.postType}`, {
    method: 'POST',
    body: JSON.stringify(post)
  })

  dispatch(setPost(post));
  return res;
}

export const destroyPost = (post) => async (dispatch) => {
  const res = await fetch(`/api/post/delete-post/${post.postId}`, {
    method: 'DELETE',
    body: JSON.stringify(post)
  })
  dispatch(deletePost(post));
  return res;
}

//REDUCER
function reducer(state = [], action) {
  switch (action.type) {
    case CREATE_POST:
      return action.post;
    case DELETE_POST:
      return action.post;
    default:
      return state;
  }
}

export default reducer;
