import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get("window").width * 0.8;

export default StyleSheet.create({
    container: {
        width: width,
        marginLeft: width * 0.125,
        marginTop: width * 0.05,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#E1E1E1",
    },
    input: {
        marginLeft: width * 0.05,
        marginVertical: width * 0.01,
    }
});