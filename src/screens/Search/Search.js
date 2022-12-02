import { useState } from 'react';
import { FlatList, View } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import SearchBar from '~/components/SearchBar';

const Search = () => {
    const [text, setText] = useState("");
    const handleOnPress = () => { null };
    const renderBooks = ({ item }) => <BookCard book={item} onPress={() => handleOnPress()} />
    const filterBooks = null;

    return (
        <View>
            <SearchBar onSearch={setText} />
            <FlatList
                data={filterBooks}
                renderItem={renderBooks}
                numColumns={3}
            />
        </View>
    );
};

export default Search;