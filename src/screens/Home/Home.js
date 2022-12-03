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

  const sendContent = content => {
    const contentObject = {
      author: "Jose Saramago",
      bookName: "Çatıdaki Pencere",
      category: "roman",
      dimensons: "",
      image: "https://i.idefix.com/cache/500x400-0/originals/0000000413258-1.jpg",
      interpreter: "Pınar Savaş",
      isbn: "9786055340629",
      language: "Türkçe",
      pages: "312",
      price: "52,8 TL",
      publicationDate: "2012",
      publisher: "Kırmızı Kedi",
      text: "\n\"Ölmek varolmuş olmak ve artık olmamaktır,\" derdi José Saramago. O öldü, artık yok, ama Çatıdaki Pencere Portekiz'de ve Brezilya'da, anadilinin vatanlarında basılır basılmaz insanlar yeni kitabı elden ele dolaştırdılar ve yepyeni bir heyecanla okuduklarını, şaşkınlıklarını dile getirdiler. Saramago bir kitap daha yayımlamıştı, duyarlılıklarımıza nüfuz eden, hayret ve hayranlıkla kalakalmamıza neden olan taze ve aydınlık bir kitap; ve anladık, sonunda anladık ki bu artık kesinlikle varolmayan ama paylaşmaya devam etmek isteyen yazarın ardında bıraktığı bir armağandır. Bıktırana kadar şu cümle yinelendi: Bu kitap bir mücevher, Saramago nasıl olup da o yaşında bu bilgeliğe sahipti, insanları böylesine incelikle, kusursuzca ve anlatıyı uzatmadan betimleyebiliyordu? Nasıl olup da sıradan ve önemsiz ama bir o kadar da evrensel durumları dile getirebilecek,  bu kadar dingin bir şiddetle köhne değer yargılarına karşı gelecek kapasiteye sahipti?\" Pilar del RioÇatıdaki Pencere, José Saramago'nun yazarlığının erken döneminde yazdığı, ama ölümünden sonra yayımlanan romanı. Eşi Pilar del Rio'nun dediği gibi, Çatıdaki Pencere Saramago'ya giriş kapısıdır ve her okur için bir keşif olacaktır. Sanki mükemmel bir halka tamamlanıyormuş gibi. Sanki ölüm yokmuş gibi.",
      title: "Çatıdaki Pencere Kitap Açıklaması"
    };
    console.log(contentObject);
    database().ref('Data/').push(contentObject);
  };

  const renderContent = ({ item }) => (
    <BookCard book={item} onPress={() => handleOnPress()} />
  );

  return (
    <View style={styles.container}>
      <Button icon="bookmark" text="Ekle" onPress={sendContent}/>
      <FlatList data={contentList} renderItem={renderContent} numColumns={3} />
    </View>
  );
};

export default Home;

