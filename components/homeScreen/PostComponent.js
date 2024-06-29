import React, { useState } from "react";
import { StyleSheet, Text, Image, View, Dimensions, TouchableOpacity, TouchableWithoutFeedback  } from "react-native";
import Modal from 'react-native-modal'
import { FlatList, PanGestureHandler, State } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';
import ImageSlider from "./ImageSlider";
import { BOTTOM_NAVBAR_HEIGHT, HEADER_HEIGHT, STORIES_SECTION_HEIGHT } from "../../styles/GlobalStyles";
import CommentItem from "./CommentItem";

const windowHeight = Dimensions.get('window').height;

export default function PostComponent({post, navigation}){

    const [liked, setLiked] = useState(post.liked);
    const [bookmarked, setBookmarked] = useState(post.saved);

    const [isCommentsActive, setIsCommentsActive] = useState(false);

    const toggleLike = () => {
        post.liked = !liked;
        setLiked(!liked);
    }

    const toggleBookmark = () => {
        post.saved = !bookmarked;
        setBookmarked(!bookmarked);
    }

    const toggleCommentsModal = () => {
        setIsCommentsActive(!isCommentsActive);
    }
    const handleCommentsModalGesture = (event) => {
        if (event.nativeEvent.translationY > 100) {
            setIsCommentsActive(false);
        }
    }

    return (
        <View style={[styles.postContainer]}>
            <View style={styles.postHeader}>
                <View style={styles.authorDataWrapper}>
                    <Image 
                        style={styles.authorImage}
                        source={{
                            uri: post.userImageUri
                        }} 
                    />

                    <Text style={styles.authorUsername}>{post.username}</Text>
                </View>

                <View style={styles.headerIconWrapper}>
                    <FontAwesome5 name="list" size={20} color="white" />
                </View>
            </View>
            <View style={styles.postBody}>
                <ImageSlider images={post.images} />
            </View>
            <View style={styles.postFooter}>
                <View style={styles.postFooterIconsSection}>
                    <View style={styles.postFooterLeftSection}>
                        <TouchableOpacity onPress={() => toggleLike()}>
                            <FontAwesome5 name="heart" size={24} color={liked ? "red" : "white"} solid={liked}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => toggleCommentsModal()}>
                            <FontAwesome5 name="comment" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.postFooterRightSection}>
                        <TouchableOpacity onPress={() => toggleBookmark()}>
                            <FontAwesome5 name="bookmark" size={24} color="white" solid={bookmarked} />
                        </TouchableOpacity>
                    </View>

                </View>
                <View style={styles.postFooterLikesSection}>
                    <TouchableOpacity onPress={() => navigation.navigate("PostLikes", post.likes)}>
                        <Text style={styles.postFooterLikesText}>{post.likes.length} Likes</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.postFooterCommentsSection}>
                    <TouchableWithoutFeedback onPress={() => setIsCommentsActive(true)}>
                        <View>
                            <Modal
                                isVisible={isCommentsActive}
                                onBackdropPress={toggleCommentsModal}
                                onSwipeComplete={toggleCommentsModal}
                                swipeDirection="down"
                                style={styles.commentsModal}
                                backdropOpacity={0.3}
                            >
                                <View style={styles.commentsModalContent}>
                                    <PanGestureHandler
                                        onGestureEvent={handleCommentsModalGesture}
                                        onHandlerStateChange={({ nativeEvent }) => {
                                            if (nativeEvent.state === State.END && nativeEvent.translationY > 100) {
                                                toggleModal();
                                            }
                                        }}
                                    >
                                        <View style={styles.commentsModalHeader}>
                                            <View style={styles.dragIndicator} />
                                        </View>
                                    </PanGestureHandler>
                                    <FlatList 
                                        style={{backgroundColor: 'black',}}
                                        data={post.comments}
                                        keyExtractor={item => item.id}
                                        renderItem={({item}) => <CommentItem comment={item}/>}
                                        showsVerticalScrollIndicator={false}
                                    />
                                </View>
                            </Modal>
                            <Text style={styles.postFooterCommentsText}>{post.comments.length} comments</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    postContainer: {
        height: windowHeight - BOTTOM_NAVBAR_HEIGHT - HEADER_HEIGHT - STORIES_SECTION_HEIGHT,
        borderWidth: 1,
        borderColor: 'black',
    },
    postHeader: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'start',
        alignItems: 'center',
        backgroundColor: 'black'
    },
    postBody: {
        flex: 7,
        borderWidth: 1,
    },
    postFooter: {
        flex: 2
    },

    authorDataWrapper: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    authorImage: {
        width: 40,
        height: 40,
        borderWidth: 2,
        borderColor: "gray",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 10,
    },
    authorUsername: {
        marginLeft: 10,
        fontWeight: 'bold',
        color: 'white'
    },
    headerIconWrapper: {
        marginRight: 15,
    },
    postFooterIconsSection: {
        flex: 1,
        flexDirection: 'row',
    },
    postFooterLeftSection: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 15,
        gap: 15
    },
    postFooterRightSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginTop: 5,
        marginRight: 15
    },
    postFooterLikesSection: {
        flex: 1,
        marginTop: 5,
        marginLeft: 15,
    },
    postFooterLikesText: {
        color: 'white',
        fontSize: 15,
        paddingTop: 5
    },
    postFooterCommentsSection: {
        flex: 1,
        marginLeft: 15,
    },
    postFooterCommentsText: {
        color: 'white',
        fontSize: 14
    },
    commentsModal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    commentsModalContent: {
        height: '70%',
        backgroundColor: 'black',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 20,
    },
    commentsModalHeader: {
        alignItems: 'center',
        paddingVertical: 10,
    },
    dragIndicator: {
        width: 40,
        height: 5,
        backgroundColor: '#ccc',
        borderRadius: 3,
    },
    commentsModalText: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 15,
        color: 'white'
    },
})