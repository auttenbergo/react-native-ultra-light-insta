import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../../styles/GlobalStyles";
import StoriesSection from "../../components/homeScreen/StoriesSection";
import PostsSection from "../../components/homeScreen/PostsSection";
import HomeScreenHeader from "../../components/homeScreen/HomeScreenHeader";

export default function HomeScreen({navigation}){
    return(
        <View style={globalStyles.container}>
            <HomeScreenHeader navigation={navigation} />
            <StoriesSection />
            <PostsSection navigation={navigation} />
        </View>
    )
}