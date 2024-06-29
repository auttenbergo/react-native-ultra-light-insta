import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import ActivityItem from "./ActivityItem";

export default function SectionItem({section}){
    return (
        <View style={styles.sectionItemContainer}>
            <Text style={styles.sectionTitle}>{section.sectionName}</Text>
            <FlatList 
                data={section.activities}
                keyExtractor={item => item.id}
                renderItem={({item}) => <ActivityItem activity={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sectionItemContainer: {
        backgroundColor: 'black',
    },
    sectionTitle: {
        color: 'white',
        fontSize: 20,
        marginTop: 15,
        marginLeft: 15
    }
})