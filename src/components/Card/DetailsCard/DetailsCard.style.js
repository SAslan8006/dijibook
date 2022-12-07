import { Dimensions, StyleSheet } from 'react-native';

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export default StyleSheet.create({
    container: {
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.025,
    },
    upperContainer: {
        flexDirection: "row",
    },
    image: {
        width: width * 0.4,
        height: height * 0.4,
        resizeMode: "contain",
    },
    info: {
        marginLeft: width * 0.025,
        justifyContent: "center",
        flex: 1,
    },
    lowerContainer: {
        flex: 10,
    },
    title: {
        marginBottom: 10,
        fontSize: 22,
    },
    text: {
    },
});