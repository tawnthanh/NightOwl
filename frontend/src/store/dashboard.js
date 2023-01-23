import { fetch } from './csrf.js';


const DISPLAY_POSTS = 'posts/DISPLAY_POSTS';
const TOGGLE_LIKE = 'posts/TOGGLE_LIKE';
const DISPLAY_LIKES = 'posts/DISPLAY_LIKES';

const setAllPosts = (posts) => ({
  type: DISPLAY_POSTS,
  posts
});

const setAllLikes = (posts) => ({
  type: DISPLAY_LIKES,
  posts
});

const toggleLike = (singlePost) => ({
  type: TOGGLE_LIKE,
  singlePost
});

//THUNK
export const displayAllPosts = (userId) => async (dispatch) => {
  const res = await fetch(`/api/dashboard/posts/${userId}`);
  const posts = await res.data;
  console.log("hit thunk for all posts")
  dispatch(setAllPosts(posts));
}

export const displayAllLikes = (userId) => async (dispatch) => {
  const res = await fetch(`/api/dashboard/posts/like/${userId}`);
  const posts = await res.data;
  console.log("I hit the thunk", posts)
  return dispatch(setAllLikes(posts));
}

export const setLike = (post) => async (dispatch) => {
  await fetch('/api/dashboard/posts/like', {
    method: 'POST',
    body: JSON.stringify(post)
  });
  dispatch(toggleLike(post));
}

const initialState = { 
 allPosts: {},
 likedPosts: {}
}
//REDUCER
const reducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case DISPLAY_POSTS:
      newState = { ...state};
      Object.values(action.posts).map(post => {
        newState.allPosts[post.id] = {...post, likeStatus: post.Likes.length? true: false};
        return;
      });

      return newState;
    case DISPLAY_LIKES:
      newState = { ...state};
      Object.values(action.posts).map(post => {
        if(post.Likes.length > 0){
          newState.likedPosts[post.id] = {...post};
        };
        return;
      });
      return newState;
    case TOGGLE_LIKE:
      return state;
    default:
      return state;
  }
}

export default reducer;
