import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function CommentItem({comment}){
    return (
        <View style={styles.commentContainer}>
            <Image 
                style={styles.userImage}
                source={{uri: comment.userImageUri}}
            />
            <Text style={styles.commentText}>{comment.content}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    commentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        borderBottomWidth: 1,
        paddingBottom: 8,
        borderBottomColor: 'gray'
    },
    commentText: {
        flex: 1,
        color: 'white',
        marginLeft: 15
    },
    userImage: {
        alignSelf: 'flex-start',
        width: 40,
        height: 40,
        objectFit: 'fill',
        borderRadius: 20
    }
})