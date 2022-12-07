import { useState } from 'react';
import { FlatList, View } from 'react-native';
import BookCard from '~/components/Card/BookCard';
import SearchBar from '~/components/SearchBar';

const Search = () => { // navigation alacak. 
    const [list, setList] = useState(""); // useState içerisine firebase'den books gelecek.
    const handleOnPress = () => { null };
    // Firebase'den alınan kitap verisi entegre edildiğinde aşağıdaki kod kullanılabilir.
    /* const handleOnPress = (book) => {
        navigation.navigate("Details", book);
    } */
    const renderBooks = ({ item }) => <BookCard book={item} onPress={() => handleOnPress()} /> // handleOnPress item prop'unu alacak.
    const handleSearh = () => {
        null
    }
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
            <SearchBar onSearch={handleSearh} />
            <View style={styles.category}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <TouchableWithoutFeedback onPress={handleSelectedAll}>
                        <Text style={styles.allBooks} >Tümü</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleSelectedRoman}>
                        <Text style={styles.roman}>Roman</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleSelectedSiir}>
                        <Text style={styles.siir}>Siir</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleSelectedDeneme}>
                        <Text style={styles.deneme}>Deneme</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleSelectedBiyografi}>
                        <Text style={styles.biyografi}>Biyografi</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={handleSelectedEdebiyatInceleme}>
                        <Text style={styles.edebiyatInceleme}>Edebiyat Inceleme</Text>
                    </TouchableWithoutFeedback>
                </ScrollView>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={list}
                    renderItem={renderBooks}
                    numColumns={3}
                />
            </View>
        </View>
    );
};

export default Search;