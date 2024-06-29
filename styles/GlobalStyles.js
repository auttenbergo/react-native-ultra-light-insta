import { StyleSheet } from "react-native";

const BOTTOM_NAVBAR_HEIGHT = 60;
const HEADER_HEIGHT = 80;
const STORIES_SECTION_HEIGHT= 120;

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})

export { globalStyles, STORIES_SECTION_HEIGHT, HEADER_HEIGHT, BOTTOM_NAVBAR_HEIGHT};