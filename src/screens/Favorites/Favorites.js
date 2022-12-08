import { FlatList, View, TouchableOpacity, Image, FlatList, Button } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Favorites.style';

const Favorites = () => {
    const renderFavorites = ({ item }) => <BookCard book={item} onPress={null} />
    return (
        <View>
            <FlatList
                data={null}
                renderItem={renderFavorites}
                numColumns={3}
            />
        </View>
    );
};

export default Favorites;