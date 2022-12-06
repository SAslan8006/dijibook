import { View } from 'react-native';
import DetailsCard from '~/components/Card/DetailsCard';

const Details = () => { // route eklenecek
    /* const book = route.params */

    return (
        <View>
            <DetailsCard books={null} /> {/* books prop'u book alacak */}
        </View>
    );
};

export default Details;