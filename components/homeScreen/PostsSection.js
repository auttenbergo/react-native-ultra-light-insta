import React, { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import PostComponent from "./PostComponent";

export default function PostsSection({navigation}){

    const [posts, setPosts] = useState([
        {
            id: 1, 
            username: 'linuxcorp', 
            userImageUri: 'https://bitlaunch.io/blog/content/images/2023/01/ima_6916e22.jpeg', 
            description: 'This is the post appreciating linux distributions',
            images: [
                'https://www.redswitches.com/wp-content/uploads/2023/08/Kali-Linux-vs-Ubuntu-1.jpg',
                'https://149366088.v2.pressablecdn.com/wp-content/uploads/2017/04/gnome-ubuntu-desktop.jpg',
                'https://www.kali.org/images/kali-desktop-gnome.jpg',
                'https://images.news18.com/ibnlive/uploads/2020/08/1596773377_apple-macos-big-sur.jpg',
                'https://monovm.com/uploads/tinymce/Suno/2022/10/23/6355a3be2c3bf-what-is-fedora-2.jpg',
                'https://img.youtube.com/vi/BoccF4eE9Ew/maxresdefault.jpg',
                'https://betawiki.net/images/a/af/Arch_Linux_neofetch.png',
                'https://static.wikia.nocookie.net/enlinux/images/3/30/Debian.png/revision/latest/scale-to-width-down/1200?cb=20220925163750',
                'https://miro.medium.com/v2/resize:fit:1400/1*erHJ3WDx48L-pZ3A7lkffQ.png',
            ], 
            likes: [
                {id: 1, username: 'el.gvaro', userImageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/382266477_333386555718693_6263834857950544561_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=28YIei7H_k0Q7kNvgFlFHWI&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBi_n3tpBGLjcQ0IxsMhMlMIH7r4O-zN6Kb2F_nmkcepQ&oe=6681E702&_nc_sid=8b3546'},
                {id: 2, username: 'kandex777', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/322930431_1188163862122209_5111529803238641160_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iry56VpCS2wQ7kNvgH6ghLO&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYCOnuHLLT1WGKMWE1Fx6kKD6D9c0CkFqQ1KzAOhiRahgg&oe=6681CC7B'},
                {id: 3, username: 'auttenberg', userImageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/83193595_594778221353560_7242216237252476928_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=pG5VALt2wggQ7kNvgFL1TgZ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYAfoqrA8chydYZQs2axvU37vAkKph8FU4pJmsf0Cv6YSA&oe=6681CEBA&_nc_sid=8b3546'},
                {id: 4, username: 'levan_koniadze', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/401762571_3001833049948614_7843442109511158616_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7uPb37ps7eMQ7kNvgEuHzdv&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYA-1R6E0x-syypLUQdhb4e9m-bOtvK4WdXK9_HEve72XQ&oe=6681EC7A'},
                {id: 5, username: 'shotiko.beridze', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/432291337_2115581522140215_5253908222590500175_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TqCD7gHNfR0Q7kNvgENh0Dc&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYAx7dNtK-PvlQtTs1ihA8Xn9eYFpCjAWaOHDcRre-QOKA&oe=6681F58B'},
            ], 
            comments: [
                {id: 1, username: 'el.gvaro', content: 'Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! ', userImageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/382266477_333386555718693_6263834857950544561_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=28YIei7H_k0Q7kNvgFlFHWI&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBi_n3tpBGLjcQ0IxsMhMlMIH7r4O-zN6Kb2F_nmkcepQ&oe=6681E702&_nc_sid=8b3546'},
                {id: 2, username: 'kandex777', content: 'Very cool image!', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/322930431_1188163862122209_5111529803238641160_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iry56VpCS2wQ7kNvgH6ghLO&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYCOnuHLLT1WGKMWE1Fx6kKD6D9c0CkFqQ1KzAOhiRahgg&oe=6681CC7B'},
                {id: 3, username: 'auttenberg', content: 'Very cool image!', userImageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/83193595_594778221353560_7242216237252476928_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=pG5VALt2wggQ7kNvgFL1TgZ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYAfoqrA8chydYZQs2axvU37vAkKph8FU4pJmsf0Cv6YSA&oe=6681CEBA&_nc_sid=8b3546'},
                {id: 4, username: 'levan_koniadze', content: 'Very cool image!', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/401762571_3001833049948614_7843442109511158616_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7uPb37ps7eMQ7kNvgEuHzdv&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYA-1R6E0x-syypLUQdhb4e9m-bOtvK4WdXK9_HEve72XQ&oe=6681EC7A'},
                {id: 5, username: 'shotiko.beridze', content: 'Very cool image!', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/432291337_2115581522140215_5253908222590500175_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TqCD7gHNfR0Q7kNvgENh0Dc&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYAx7dNtK-PvlQtTs1ihA8Xn9eYFpCjAWaOHDcRre-QOKA&oe=6681F58B'},
            ],
            liked: true,
            saved: true
        },
        {
            id: 2, 
            username: 'linuxcorp', 
            userImageUri: 'https://bitlaunch.io/blog/content/images/2023/01/ima_6916e22.jpeg', 
            images: [
                'https://www.redswitches.com/wp-content/uploads/2023/08/Kali-Linux-vs-Ubuntu-1.jpg',
                'https://149366088.v2.pressablecdn.com/wp-content/uploads/2017/04/gnome-ubuntu-desktop.jpg',
                'https://www.kali.org/images/kali-desktop-gnome.jpg',
                'https://images.news18.com/ibnlive/uploads/2020/08/1596773377_apple-macos-big-sur.jpg',
                'https://monovm.com/uploads/tinymce/Suno/2022/10/23/6355a3be2c3bf-what-is-fedora-2.jpg',
                'https://img.youtube.com/vi/BoccF4eE9Ew/maxresdefault.jpg',
                'https://betawiki.net/images/a/af/Arch_Linux_neofetch.png',
                'https://static.wikia.nocookie.net/enlinux/images/3/30/Debian.png/revision/latest/scale-to-width-down/1200?cb=20220925163750',
                'https://miro.medium.com/v2/resize:fit:1400/1*erHJ3WDx48L-pZ3A7lkffQ.png',
            ], 
            likes: [
                {id: 1, username: 'el.gvaro', userImageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/382266477_333386555718693_6263834857950544561_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=28YIei7H_k0Q7kNvgFlFHWI&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBi_n3tpBGLjcQ0IxsMhMlMIH7r4O-zN6Kb2F_nmkcepQ&oe=6681E702&_nc_sid=8b3546'},
                {id: 2, username: 'kandex777', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/322930431_1188163862122209_5111529803238641160_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iry56VpCS2wQ7kNvgH6ghLO&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYCOnuHLLT1WGKMWE1Fx6kKD6D9c0CkFqQ1KzAOhiRahgg&oe=6681CC7B'},
                {id: 3, username: 'auttenberg', userImageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/83193595_594778221353560_7242216237252476928_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=pG5VALt2wggQ7kNvgFL1TgZ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYAfoqrA8chydYZQs2axvU37vAkKph8FU4pJmsf0Cv6YSA&oe=6681CEBA&_nc_sid=8b3546'},
                {id: 4, username: 'levan_koniadze', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/401762571_3001833049948614_7843442109511158616_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7uPb37ps7eMQ7kNvgEuHzdv&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYA-1R6E0x-syypLUQdhb4e9m-bOtvK4WdXK9_HEve72XQ&oe=6681EC7A'},
                {id: 5, username: 'shotiko.beridze', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/432291337_2115581522140215_5253908222590500175_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TqCD7gHNfR0Q7kNvgENh0Dc&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYAx7dNtK-PvlQtTs1ihA8Xn9eYFpCjAWaOHDcRre-QOKA&oe=6681F58B'},
            ], 
            comments: [
                {id: 1, username: 'el.gvaro', content: 'Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! Very cool image! ', userImageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/382266477_333386555718693_6263834857950544561_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=28YIei7H_k0Q7kNvgFlFHWI&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYBi_n3tpBGLjcQ0IxsMhMlMIH7r4O-zN6Kb2F_nmkcepQ&oe=6681E702&_nc_sid=8b3546'},
                {id: 2, username: 'kandex777', content: 'Very cool image!', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/322930431_1188163862122209_5111529803238641160_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=iry56VpCS2wQ7kNvgH6ghLO&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYCOnuHLLT1WGKMWE1Fx6kKD6D9c0CkFqQ1KzAOhiRahgg&oe=6681CC7B'},
                {id: 3, username: 'auttenberg', content: 'Very cool image!', userImageUri: 'https://instagram.ftbs10-1.fna.fbcdn.net/v/t51.2885-19/83193595_594778221353560_7242216237252476928_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.ftbs10-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=pG5VALt2wggQ7kNvgFL1TgZ&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AYAfoqrA8chydYZQs2axvU37vAkKph8FU4pJmsf0Cv6YSA&oe=6681CEBA&_nc_sid=8b3546'},
                {id: 4, username: 'levan_koniadze', content: 'Very cool image!', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/401762571_3001833049948614_7843442109511158616_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=7uPb37ps7eMQ7kNvgEuHzdv&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYA-1R6E0x-syypLUQdhb4e9m-bOtvK4WdXK9_HEve72XQ&oe=6681EC7A'},
                {id: 5, username: 'shotiko.beridze', content: 'Very cool image!', userImageUri: 'https://scontent.ftbs10-1.fna.fbcdn.net/v/t39.30808-6/432291337_2115581522140215_5253908222590500175_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TqCD7gHNfR0Q7kNvgENh0Dc&_nc_ht=scontent.ftbs10-1.fna&oh=00_AYAx7dNtK-PvlQtTs1ihA8Xn9eYFpCjAWaOHDcRre-QOKA&oe=6681F58B'},
            ],
            liked: false,
            saved: false
        }
    ])

    return (
        <View style={styles.postsContainer}>
            <FlatList 
                style={{backgroundColor: 'black',}}
                data={posts}
                keyExtractor={item => item.id}
                renderItem={({item}) => <PostComponent navigation={navigation} post={item}/>}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    postsContainer: {
        flex: 1,
    }
})