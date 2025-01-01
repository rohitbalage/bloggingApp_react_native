import React, {useContext}  from "react";
import {View, Text, StyleSheet} from 'react-native'
import {Context} from '../context/BlogContex'

const ShowScreen =({navigation}) =>

{
 console.log(navigation.getParam('id'));

return (
    <View>
        <Text> ShowScreen </Text>
    </View>
);
};

const styles = StyleSheet.create({});

export default ShowScreen;