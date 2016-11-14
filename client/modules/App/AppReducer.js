// Import Actions
import { SELECT_APP_MODEL, TOGGLE_ADD_POST } from './AppActions';
import AppModel from './components/AppModel/AppModel';

// Initial State
const initialState = Object.assign(
  {showAddPost: false},
  {currentAppId: 1},
  {appModel: AppModel()},
);

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ADD_POST:
      console.log("Step B: AppReducer: TOGGLE_ADD_POST");
      return {
        showAddPost: !state.showAddPost,
      };
    case SELECT_APP_MODEL:
      console.log("Step B: AppReducer: SELECT_APP_MODEL state=" + JSON.stringify(state) + "   action=" + JSON.stringify(action));
      return {
        currentAppId: action.currentAppId,
      };

    default:
      return state;
  }
};

/* Selectors */

// Get showAddPost
export const getShowAddPost = state => state.app.showAddPost;

// Get currentAppId
export const getCurrentAppId = state => state.app.currentAppId;

// // Get all posts
// export const getPosts = state => state.posts.data;
//
// // Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];

// Export Reducer
export default AppReducer;



// examples
// import { ADD_POST, ADD_POSTS, DELETE_POST } from './PostActions';
//
// // Initial State
// const initialState = { data: [] };
//
// const PostReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_POST :
//       return {
//         data: [action.post, ...state.data],
//       };
//
//     case ADD_POSTS :
//       return {
//         data: action.posts,
//       };
//
//     case DELETE_POST :
//       return {
//         data: state.data.filter(post => post.cuid !== action.cuid),
//       };
//
//     default:
//       return state;
//   }
// };
//
// /* Selectors */
//
// // Get all posts
// export const getPosts = state => state.posts.data;
//
// // Get post by cuid
// export const getPost = (state, cuid) => state.posts.data.filter(post => post.cuid === cuid)[0];
//
// // Export Reducer
// export default PostReducer;
