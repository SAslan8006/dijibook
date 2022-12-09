import { Image, ScrollView, Text, View } from 'react-native';
import styles from "./DetailsCard.style";

const DetailsCard = ({ books }) => {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.upperContainer}>
                    <Image style={styles.image} source={{ uri: books.image }} />
                    <View style={styles.info}>
                        <Text>{books.bookName}</Text>
                        <Text>{books.author}</Text>
                        <Text>{books.publisher}</Text>
                        <Text>{books.price}</Text>
                        {
                            books.interpreter && <Text>{books.interpreter}</Text>
                        }
                        {
                            books.pages && <Text>{books.pages}</Text>
                        }
                        {
                            books.language && <Text>{books.language}</Text>
                        }
                        {
                            books.publicationDate && <Text>{books.publicationDate}</Text>
                        }
                        {
                            books.category && <Text>{books.category}</Text>
                        }
                        {
                            books.interpreter && <Text>{books.interpreter}</Text>
                        }
                        <Text>{books.isbn}</Text>
                    </View>
                </View>
                <View style={styles.lowerContainer}>
                    <Text style={styles.title}>{books.title}</Text>
                    <Text style={styles.text}>{books.text}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

export default DetailsCard;