import { FlatList, View } from 'react-native';
import BookCard from '~/components/Card/BookCard';

const Home = () => {
  const handleOnPress = () => { null };
  const renderBooks = ({ item }) => <BookCard book={item} onPress={() => handleOnPress()} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={null}
        renderItem={renderBooks}
        numColumns={3}
      />
    </View>
  );
};

export default Home;