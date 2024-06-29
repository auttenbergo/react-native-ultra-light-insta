import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import SectionItem from "../../components/activityScreen/SectionItem";

export default function ActivityScreen() {

    const [activities, setActivities] = useState([
        {id: 1, sectionName: 'Yesterday', activities: [
            { 
                id: 1, 
                type: 'Like', 
                username: 'el.gvaro', 
                userImageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/382266477_333386555718693_6263834857950544561_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=28YIei7H_k0Q7kNvgFlFHWI&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBi_n3tpBGLjcQ0IxsMhMlMIH7r4O-zN6Kb2F_nmkcepQ&oe=6681E702&_nc_sid=8b3546',
                ago: '5h'
            },
            {
                id: 2, 
                type: 'Comment', 
                username: 'levani_koniadze', 
                userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/401762571_3001833049948614_7843442109511158616_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7uPb37ps7eMQ7kNvgEuHzdv&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYA-1R6E0x-syypLUQdhb4e9m-bOtvK4WdXK9_HEve72XQ&oe=6681EC7A',
                ago: '5h'
            },
            {
                id: 3, 
                type: 'Follow', 
                username: 'shotiko.beridze', 
                userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/432291337_2115581522140215_5253908222590500175_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TqCD7gHNfR0Q7kNvgENh0Dc&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYAx7dNtK-PvlQtTs1ihA8Xn9eYFpCjAWaOHDcRre-QOKA&oe=6681F58B',
                ago: '4h'
            },
            { 
                id: 4, 
                type: 'Comment', 
                username: 'el.gvaro', 
                userImageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/382266477_333386555718693_6263834857950544561_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=28YIei7H_k0Q7kNvgFlFHWI&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBi_n3tpBGLjcQ0IxsMhMlMIH7r4O-zN6Kb2F_nmkcepQ&oe=6681E702&_nc_sid=8b3546',
                ago: '3h'
            },
            { 
                id: 5, 
                type: 'Follow', 
                username: 'kandex777', 
                userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/322930431_1188163862122209_5111529803238641160_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iry56VpCS2wQ7kNvgH6ghLO&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYCOnuHLLT1WGKMWE1Fx6kKD6D9c0CkFqQ1KzAOhiRahgg&oe=6681CC7B',
                ago: '1h'
            },
        ]},
        {id: 2, sectionName: 'Last 7 days', activities: [
            {
                id: 1,
                type: 'Follow',
                username: 'auttenberg',
                userImageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/83193595_594778221353560_7242216237252476928_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=pG5VALt2wggQ7kNvgFL1TgZ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYAfoqrA8chydYZQs2axvU37vAkKph8FU4pJmsf0Cv6YSA&oe=6681CEBA&_nc_sid=8b3546',
                ago: '7d'
            },
            {
                id: 2,
                type: 'Comment',
                username: 'linustorvalds',
                userImageUri: 'https://bitlaunch.io/blog/content/images/2023/01/ima_6916e22.jpeg',
                ago: '6d'
            },
            {
                id: 3,
                type: 'Follow',
                username: 'linustorvalds',
                userImageUri: 'https://bitlaunch.io/blog/content/images/2023/01/ima_6916e22.jpeg',
                ago: '5d'
            },
            {
                id: 4,
                type: 'Like',
                username: 'levani_koniadze',
                userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/401762571_3001833049948614_7843442109511158616_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7uPb37ps7eMQ7kNvgEuHzdv&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYA-1R6E0x-syypLUQdhb4e9m-bOtvK4WdXK9_HEve72XQ&oe=6681EC7A',
                ago: '4d'
            },
            {
                id: 5,
                type: 'Follow',
                username: 'shotiko.beridze',
                userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/432291337_2115581522140215_5253908222590500175_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TqCD7gHNfR0Q7kNvgENh0Dc&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYAx7dNtK-PvlQtTs1ihA8Xn9eYFpCjAWaOHDcRre-QOKA&oe=6681F58B',
                ago: '2d'
            },
            {
                id: 6,
                type: 'Like',
                username: 'kandex777',
                userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/322930431_1188163862122209_5111529803238641160_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iry56VpCS2wQ7kNvgH6ghLO&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYCOnuHLLT1WGKMWE1Fx6kKD6D9c0CkFqQ1KzAOhiRahgg&oe=6681CC7B',
                ago: '2d'
            }
        ]}
    ])

    return (
        <View style={styles.activitiesContainer}>
            <FlatList 
                data={activities}
                keyExtractor={item => item.id}
                renderItem={({item}) => <SectionItem section={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    activitiesContainer: {
        flex: 1,
        backgroundColor: 'black'
    }
})