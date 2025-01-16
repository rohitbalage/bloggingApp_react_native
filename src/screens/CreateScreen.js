import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContex";
import BlogPostForm from "../Components/BlogPostForm";

const CreateScreen = ({ navigation }) => {
  const {addBlogPost } =  useContext(Context);

  return <BlogPostForm/>
  
};

const styles = StyleSheet.create({

});

export default CreateScreen;
