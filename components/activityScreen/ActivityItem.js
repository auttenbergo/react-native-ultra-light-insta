import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

export default function ActivityItem({activity}){
    
    let constructedText;
    switch(activity.type){
        case 'Like': constructedText = 'liked your post'; break;
        case 'Comment': constructedText = 'commented on your post'; break;
        case 'Follow': constructedText = 'started following you'; break;
    }

    return (
        <View style={styles.activityContainer}>
            <Image
                style={styles.userImage}
                source={{ uri: activity.userImageUri}}
            />
            <Text multiline style={styles.activityText}>
                {activity.username} {constructedText} <Text style={styles.activityAgo}>{activity.ago}</Text>
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
        marginVertical: 8
    },
    userImage: {
        width: 40,
        height: 40,
        objectFit: 'fill',
        borderRadius: 20,
        marginLeft: 30
    },
    activityText: {
        flex: 1,
        color: 'white',
        fontSize: 16,
        marginLeft: 15,
    },
    activityAgo: {
        color: 'gray',
        fontSize: 14
    }
})