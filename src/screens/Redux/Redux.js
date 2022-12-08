import React, { useEffect } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import styles from '../Redux/Redux.style';
import database from '@react-native-firebase/database';
import Button from '~/components/Button';
import parseContentData from '~/utils/contentData';
import { connect } from 'react-redux';
import { firebaseProductsListener, requestGetAllPRoductsFromFirebase, setApp, getPRoductFromFirebase } from '~/redux/actions';


const mapStateToProps = states => ({ app: states.app});
const mapDispatchToProps = dispatch => ({ dispatch });

const Redux = connect(
    mapStateToProps,
    mapDispatchToProps,
)(props => {
    const { dispatch, app } = props;
    console.log("Dispach:" + app);

    useEffect(() => {
        //dispatch(requestGetAllPRoductsFromFirebase());
        dispatch(getPRoductFromFirebase());
        return () => {
            if (global.firebaseProductsListenerOff) {
                global.firebaseProductsListenerOff();
            }
        };
    }, []);

    const renderContent = ({ item }) => (
        <BookCard book={item} onPress={() => handleOnPress()} />
    );
    console.log("item:" + app);


    return (
        <View style={styles.main}>
            <FlatList
                data={app.fbProducts}
                numColumns={2}
                renderItem={renderContent}
                keyExtractor={(d, i) => d.id}
            />
        </View>
    );
});

export default Redux;

