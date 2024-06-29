import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function LikeItem({like}){
    return (
        <View style={styles.likeContainer}>
            <Image
                style={styles.userImage}
                source={{uri: like.userImageUri}}
            />
            <Text style={styles.username}>{like.username}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    likeContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        marginLeft: 15
    },
    userImage: {
        width: 40,
        height: 40,
        objectFit: 'cover',
        borderRadius: 20,
    },
    username: {
        color: 'white',
        fontSize: 20,
        marginLeft: 15
    }
})