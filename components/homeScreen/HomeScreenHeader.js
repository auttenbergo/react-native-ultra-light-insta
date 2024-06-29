import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet  } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { HEADER_HEIGHT } from '../../styles/GlobalStyles';

export default function HomeScreenHeader({navigation}){
    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitle}>Instagram</Text>
            <View style={styles.headerIcons}>
                <TouchableOpacity style={styles.iconButton}>
                    <TouchableOpacity onPress={() => navigation.navigate("Activity")}>
                        <FontAwesome5 name="heart" size={22} color="white" />
                    </TouchableOpacity>

                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}>
                    <FontAwesome5 name="facebook-messenger" size={22} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        borderWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        paddingTop: 30,
        paddingHorizontal: 15,
        height: HEADER_HEIGHT,
    },
    headerTitle: {
      color: 'white',
      fontSize: 20,
      alignSelf: 'center',
      fontWeight: 'bold',
    },
    headerIcons: {
      flexDirection: 'row',
    },
    iconButton: {
      marginLeft: 20,
    },
  });