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
export const displayAllPosts = () => async (dispatch) => {
  const res = await fetch('/api/dashboard/posts');
  const posts = res.data;
  dispatch(setAllPosts(posts));
}

export const displayAllLikes = () => async (dispatch) => {
  const allPostRes = await fetch('/api/dashboard/posts');
  const posts = allPostRes.data;

  const allLikesRes = await fetch('/api/dashboard/posts/like');
  const likes = allLikesRes.data;

  let likePost = [];

  for (let i = 0; i < likes.length; i++){
    for (let j = 0; j < posts.length; j++){
      if (likes[i].postId === posts[j].id) {
        likePost.push({
          ...likes[i],
          postType: posts[j].postType,
          title: posts[j].title,
          description: posts[j].description,
          src: posts[j].src,
          originalUser: posts[j].username,
        })
      }
    }
  }

  return dispatch(setAllLikes([...likePost]));
}

export const setLike = (post) => async (dispatch) => {
await fetch('/api/dashboard/posts/like', {
    method: 'POST',
    body: JSON.stringify(post)
  })
  dispatch(toggleLike(post))
}

//REDUCER
const reducer = (state = [], action) => {
  switch (action.type) {
    case DISPLAY_POSTS:
      return action.posts;
    case DISPLAY_LIKES:
      return action.posts;
    case TOGGLE_LIKE:
      return action;
    default:
      return state;
  }
}

export default reducer;
