import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function StoryComponent({story}){
    let imageWrapperStyle = [styles.imageWrapper];
    if(!story.seen){
        imageWrapperStyle= [...imageWrapperStyle, styles.imageWrapperNotSeen]
    }
    return (
        <View style={styles.storyContainer}>
            <View style={imageWrapperStyle}>
                <Image 
                    style={styles.storyImage}
                    source={{
                        uri: story.imageUri
                    }} 
                />
                
            </View>
            <Text 
                style={styles.storyUsername}
                numberOfLines={1}
                ellipsizeMode="trail"
            >
                {story.username}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    storyContainer: {
      width: 80,
      justifyContent: "center",
      alignItems: "center",
      height: "100%",
      borderWidth: 1,
      borderColor: "black",
      marginHorizontal: 5,
      rowGap: 5
    },
    imageWrapper: {
      width: 70,
      height: 70,
      borderWidth: 2,
      borderColor: "lightgray",
      borderRadius: 35,
      justifyContent: "center",
      alignItems: "center",

    },
    imageWrapperNotSeen: {
        borderColor: 'pink'
    },
    storyImage: {
      width: 60,
      height: 60,
      resizeMode: "cover",
      borderRadius: 30, // Use half of width/height for a perfect circle
    },
    storyUsername: {
      fontSize: 12,
      color: 'gray',
      textAlign: "center", // Center the text
      maxWidth: "100%", // Ensure the text does not overflow the container
    },
  });