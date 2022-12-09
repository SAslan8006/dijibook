import React from 'react';
import { FlatList, View, Text, ScrollView, TouchableWithoutFeedback } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import styles from './Home.style';
import database from '@react-native-firebase/database';
import Button from '~/components/Button';
import parseContentData from '~/utils/contentData';

const Home = () => {
  const [contentList, setContentList] = React.useState([]);
  const handleOnPress = () => {
    null;
  };

  React.useEffect(() => {
    database()
      .ref('/books')
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  const renderContent = ({ item }) => <BookCard book={item} onPress={() => handleOnPress()} />;

  const handleSelectedAll = () => {
    null;
  };
  const handleSelectedRoman = () => {
    null;
  };
  const handleSelectedSiir = () => {
    null;
  };
  const handleSelectedDeneme = () => {
    null;
  };
  const handleSelectedBiyografi = () => {
    null;
  };
  const handleSelectedEdebiyatInceleme = () => {
    null;
  };

  return (
      <View style={styles.container}>
      <View style={styles.category}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableWithoutFeedback onPress={handleSelectedAll}>
            <Text style={styles.categoryItem}>Tümü</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleSelectedRoman}>
            <Text style={styles.categoryItem}>Roman</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleSelectedSiir}>
            <Text style={styles.categoryItem}>Siir</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleSelectedDeneme}>
            <Text style={styles.categoryItem}>Deneme</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleSelectedBiyografi}>
            <Text style={styles.categoryItem}>Biyografi</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={handleSelectedEdebiyatInceleme}>
            <Text style={styles.categoryItem}>Edebiyat Inceleme</Text>
          </TouchableWithoutFeedback>
        </ScrollView>
      </View>
        <FlatList data={contentList} renderItem={renderContent} numColumns={3} />
      </View>
  );
};

export default Home;
