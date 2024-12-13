import React, {useState} from "react";

const BlogContext =React.createContext();

export const BlogProvider =  ({ children })  => {

   const [blogPost, setBlogPosts] = useState([]);


   const addBlogPost = () => 
   {
    //create a new array and add blogPost inside of it.
    setBlogPosts([ ...blogPost, {title:`Blog post #${blogPost.length +1}`
    } ]);
   }

    return (
    <BlogContext.Provider value={{data: blogPost, addBlogPost: addBlogPost}}>{ children}</BlogContext.Provider>
    );
};

export default BlogContext;