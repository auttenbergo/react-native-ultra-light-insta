import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, ScrollView, Dimensions } from "react-native";
import { STORIES_SECTION_HEIGHT } from "../../styles/GlobalStyles";
import StoryComponent from "./StoryComponent";

export default function StoriesSection(){
    const [stories, setStories] = useState([
        {id: 1, seen:false, username: 'el.gvaro', imageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/382266477_333386555718693_6263834857950544561_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=28YIei7H_k0Q7kNvgFlFHWI&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBi_n3tpBGLjcQ0IxsMhMlMIH7r4O-zN6Kb2F_nmkcepQ&oe=6681E702&_nc_sid=8b3546'},
        {id: 2, seen:false, username: 'auttenberg', imageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/83193595_594778221353560_7242216237252476928_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=pG5VALt2wggQ7kNvgFL1TgZ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYAfoqrA8chydYZQs2axvU37vAkKph8FU4pJmsf0Cv6YSA&oe=6681CEBA&_nc_sid=8b3546'},
        {id: 3, seen:false, username: 'levan_koniadze', imageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/401762571_3001833049948614_7843442109511158616_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7uPb37ps7eMQ7kNvgEuHzdv&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYA-1R6E0x-syypLUQdhb4e9m-bOtvK4WdXK9_HEve72XQ&oe=6681EC7A'},
        {id: 4, seen:false, username: 'shotiko.beridze', imageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/432291337_2115581522140215_5253908222590500175_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TqCD7gHNfR0Q7kNvgENh0Dc&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYAx7dNtK-PvlQtTs1ihA8Xn9eYFpCjAWaOHDcRre-QOKA&oe=6681F58B'},
        {id: 5, seen:true, username: 'm.chadashvili', imageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t1.6435-9/201079505_1189757294817677_2489631472444846278_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=13d280&_nc_ohc=Qf9vd7h-L2YQ7kNvgHqK8Ao&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYB42luSBFwLSuH05VrF8Hik02pvwR7GGCUFpBcIT3o1GA&oe=66A36608'},
        {id: 6, seen:true, username: 'astalavistabeibi', imageUri: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg'},
        {id: 7, seen:true, username: 'gauqmebuliagauqmebulia', imageUri: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?cs=srgb&dl=pexels-pixabay-531880.jpg&fm=jpg'},
        {id: 8, seen:true, username: 'kandex777', imageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/322930431_1188163862122209_5111529803238641160_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iry56VpCS2wQ7kNvgH6ghLO&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYCOnuHLLT1WGKMWE1Fx6kKD6D9c0CkFqQ1KzAOhiRahgg&oe=6681CC7B'},
    ])

    return (
        <View style={styles.storiesContainer}>
            <FlatList 
                data={stories}
                keyExtractor={item => item.id}
                renderItem={({item}) => <StoryComponent story={item}/>}
                showsHorizontalScrollIndicator={false}
                horizontal
            />
        </View>
    )
}

const styles = StyleSheet.create({
    storiesContainer: {
        width: '100%',
        height: STORIES_SECTION_HEIGHT,
        flexDirection: 'row',
        backgroundColor: 'black'
    }
})