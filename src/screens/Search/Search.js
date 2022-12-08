/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { FlatList, View, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import SearchBar from '~/components/SearchBar';
import styles from './Search.style';

const Search = () => {
  // navigation alacak.
  const [list, setList] = useState(''); // useState içerisine firebase'den books gelecek.
  const handleOnPress = () => {
    null;
  };
  // Firebase'den alınan kitap verisi entegre edildiğinde aşağıdaki kod kullanılabilir.
  /* const handleOnPress = (book) => {
        navigation.navigate("Details", book);
    } */
  const renderBooks = ({ item }) => <BookCard book={item} onPress={() => handleOnPress()} />; // handleOnPress item prop'unu alacak.
  const handleSearch = () => {
    null;
  };
  // Firebase'den alınan kitap verisi entegre edildiğinde aşağıdaki kod kullanılabilir.
  /* const handleSearch = text => {
        const filteredBook = books.filter(book => {
            const searchedText = text.toLowerCase();
            const currentBookName = book.bookName.toLowerCase();
            return currentBookName.indexOf(searchedText) > -1;
        });
        setList(filteredBook);
    }; */
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
  // Firebase'den alınan kitap verisi entegre edildiğinde aşağıdaki kod kullanılabilir.
  /* const handleSelectedAll = (category) => {
        const filtered = books;
        setList(filtered);
        console.log(filtered.length);
    };
    const handleSelectedRoman = (category) => {
        const filtered = books.filter(books => books.category == "roman");
        setList(filtered);
        console.log(filtered.length);
    };
    const handleSelectedSiir = (category) => {
        const filtered = books.filter(books => books.category == "siir");
        setList(filtered);
        console.log(filtered.length);
    };
    const handleSelectedDeneme = (category) => {
        const filtered = books.filter(books => books.category == "deneme");
        setList(filtered);
        console.log(filtered.length);
    };
    const handleSelectedBiyografi = (category) => {
        const filtered = books.filter(books => books.category == "biyografi");
        setList(filtered);
        console.log(filtered.length);
    };
    const handleSelectedEdebiyatInceleme = (category) => {
        const filtered = books.filter(books => books.category == "edebiyat_inceleme");
        setList(filtered);
        console.log(filtered.length);
    };   */

  return (
    <View>
      <View style={null}>
        <SearchBar onSearch={handleSearch} />
      </View>
      <View style={styles.container}>
        <FlatList data={list} renderItem={renderBooks} numColumns={2} />
      </View>
    </View>
  );
};

export default Search;
