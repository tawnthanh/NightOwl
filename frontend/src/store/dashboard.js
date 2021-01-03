import { fetch } from './csrf.js';


const DISPLAY_POSTS = 'posts/DISPLAY_POSTS';
const TOGGLE_LIKE = 'posts/TOGGLE_LIKE';

const setAllPosts = (posts) => ({
  type: DISPLAY_POSTS,
  posts
});

const toggleLike = (singlePost) => ({
  type: TOGGLE_LIKE,
  singlePost
});

//THUNK
export const displayAllPosts = () => async (dispatch) => {
  const res = await fetch('/api/dashboard/posts');
  const posts = res.data;
  dispatch(setAllPosts(posts));

}

export const setLike = (post) => async (dispatch) => {
await fetch('/api/dashboard/posts/like', {
    method: 'POST',
    body: JSON.stringify(post)
  })
  dispatch(toggleLike(post))
  console.log('I made it to the thunk', post)
  console.log('toggleLike', dispatch(toggleLike(post)))
}

//REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_POSTS:
      return action.posts;
    case TOGGLE_LIKE:
      return action;
    default:
      return state;
  }
}

export default reducer;
