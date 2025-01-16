import React, { useContext} from "react";
import { StyleSheet} from 'react-native'
import { Context } from "../context/BlogContex";
import BlogPostForm from "../Components/BlogPostForm";

const EditScreen = ({navigation}) =>{
const {state } = useContext(Context);
 blogPost = state.find(blogPost => blogPost.id == navigation.getParam('id'));

return <BlogPostForm/>
};

const styles = StyleSheet.create({});

export default EditScreen;