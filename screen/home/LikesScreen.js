import React from "react";
import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import LikeItem from "../../components/likesScreen/LikeItem";

export default function LikesScreen({route}){
    const likes = route.params;
    console.log({likes})
    return (
        <View style={styles.likesContainer}>
            <FlatList 
                style={{backgroundColor: 'black',}}
                data={likes}
                keyExtractor={item => item.id}
                renderItem={({item}) => <LikeItem like={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    likesContainer: {
        flex: 1,
        backgroundColor: 'black'
    }
})