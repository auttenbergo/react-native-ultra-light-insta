import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfileScreenCustomHeader from "../components/profileScreen/ProfileScreenCustomHeader";

export default function ProfileScreen(){
    return(
        <View style={styles.container}>
            <ProfileScreenCustomHeader />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    }
})