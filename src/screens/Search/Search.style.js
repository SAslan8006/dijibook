import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        marginHorizontal: width * 0.05,
        marginVertical: height * 0.01,
        marginBottom: height * 0.15,
    },
    category: {
        flexDirection: "row",
    },
    allBooks: {
        marginHorizontal: 10,
        backgroundColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    roman: {
        marginHorizontal: 10,
        backgroundColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    siir: {
        marginHorizontal: 10,
        backgroundColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    deneme: {
        marginHorizontal: 10,
        backgroundColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    biyografi: {
        marginHorizontal: 10,
        backgroundColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    },
    edebiyatInceleme: {
        marginHorizontal: 10,
        backgroundColor: "red",
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
    }
});