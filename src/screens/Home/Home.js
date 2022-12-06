import React from 'react';
import { FlatList, View, Text } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import styles from './Home.style';
import database from '@react-native-firebase/database';
import Button from '~/components/Button';
import parseContentData from '~/utils/contentData';

const Home = () => {
  const [contentList, setContentList] = React.useState([]);
  const handleOnPress = () => { null };
  
  React.useEffect(() => {
    database()
      .ref('/Data')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
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

export default Home;

