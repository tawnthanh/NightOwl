import { fetch } from './csrf.js';


const DISPLAY_POSTS = 'posts/DISPLAY_POSTS';

const setAllPosts = (posts) => ({
  type: DISPLAY_POSTS,
  posts
});

//THUNK
export const displayAllPosts = () => async (dispatch) => {
  const res = await fetch('/api/dashboard/posts');
  if (res.ok) {
    try {
      const posts = res.data;
      console.log(posts)
      dispatch(setAllPosts(posts));
    } catch {
      console.log("issue with the res.json")
      console.log(res);
    }
  }
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
