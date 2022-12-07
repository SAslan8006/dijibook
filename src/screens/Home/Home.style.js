import { Dimensions, StyleSheet } from 'react-native';
import { text } from '~/configs';
import { colors } from '~/themes';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default StyleSheet.create({
  container: {
    marginHorizontal: width * 0.05,
  },
  category: {
    flexDirection: 'row',
  },
  categoryItem: {
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    padding: 8,
    textAlign: 'center',
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: text.H9,
    color: colors.black,
    borderColor: colors.black,
  },
});
