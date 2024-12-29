import React, {useContext} from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from "react-native";
import { Context} from "../context/BlogContex";
import Feather from '@expo/vector-icons/Feather';


const IndexScreen = ({navigation})  =>{
const {state, addBlogPost, deleteBlogPost} = useContext(Context);

return (
<TouchableOpacity onPress={() => navigation.navigate('Show', {id: item.id})} >
<View>
<Button title="Add Post" onPress={() => addBlogPost()} />
<FlatList
data={state}
keyExtractor={blogPost => blogPost.title}
renderItem={({item}) =>{
    return <View style={styles.row}>
        <Text style={styles.title}>{item.title} - {item.id} </Text> 
   <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
    <Feather style={styles.icon} name="trash"/>
    </TouchableOpacity>
    </View>
}}
/>
</View>
</TouchableOpacity>
);
};

const styles = StyleSheet.create({
row:
{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey'
},
title:
{
    fontSize: 18,  
},
icon:
{
  fontSize: 24  
}

});

export default IndexScreen;