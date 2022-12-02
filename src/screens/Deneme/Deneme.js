import React from 'react';
import { FlatList, View,Text} from 'react-native';
import BookCard from '~/components/Card/BookCard';
import styles from './Deneme.style';
import database from '@react-native-firebase/database';

const Deneme = () => {
  const [contentList, setContentList] = React.useState([]);
  // const handleOnPress = () => { null };
  const renderBooks = ({ item }) => <Text>{item} </Text> ;
  React.useEffect(() => {
    database()
      .ref('/Data')
      .once('value')
      .then(snapshot => {
        const contentData = snapshot.val();
        setContentList(contentData);
      });
  }, []);

  const renderContent = ({ item }) => (
    <BookCard book={item} onPress={() => handleOnPress()} />
  );

  return (
    <View style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} numColumns={3} />
    </View>
  );
};

export default Deneme;