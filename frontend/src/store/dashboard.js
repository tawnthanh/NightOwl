import { fetch } from './csrf.js';


const DISPLAY_POSTS = 'posts/DISPLAY_POSTS';

const setAllPosts = (posts) => ({
  type: DISPLAY_POSTS,
  posts
});

//THUNK
export const displayAllPosts = () => async (dispatch) => {
  const res = await fetch('/api/dashboard/posts');
  const posts = res.data;
  dispatch(setAllPosts(posts));

}


const reducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_POSTS:
      return action.posts;
    default:
      return state;
  }
}

export default reducer;
