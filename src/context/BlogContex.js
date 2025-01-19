import { act } from "react";
import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

// used reducer here:::::::
const blogReducer = (state, action) => {
  switch (action.type) {
case 'get_blogposts':
  return action.payload;

  case "edit_blogpost":
    return state.map((blogPost)=>
    {
return blogPost.id === action.payload.id ? action.payload : blogPost;
//  if(blogPost.id === action.payload.id)
//       {
//         return action.payload;
//       }
//       else
//       {
//         return blogPost;
//       }
    });

    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999999),
          title: action.payload.title,
          content:action.payload.content
        },
      ];
    default:
      return state;
  }
};

const getBlogPosts =  dispatch =>
{
  return  async() =>
  {
 const response = await jsonServer.get('/blogposts');
 // response.data ===== [{}, {}, {}]

 dispatch({type: 'get_blogposts', payload:response.data })

  };
};

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({ type: "add_blogpost", payload: {title,content}});
   if(callback)
   {
    callback();
   }
  };
};

// calling state through dispatch
const deleteBlogPost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const editBlogPost = (dispatch) =>
{
return (id, title, content, callback) =>
{
  dispatch({type: 'edit_blogpost',
     payload:{id,title,content, callback}});
     if(callback)
      {
       callback();
      }
};
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
  []
  // [{title: 'TEST POST', content: 'TEST CONTENT', id: 1}]
);
