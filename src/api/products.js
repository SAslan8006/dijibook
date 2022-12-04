import database from '@react-native-firebase/database';
import parseContentData from '~/utils/contentData';

export const getAllProducts = async () => { 
  const x=await database()
    .ref('/Data')
    .once('value', snapshot => {
      const contentData = snapshot.val();
      const parsedData = parseContentData(contentData || {});
    });  
    console.log(x)
    return x;  
  };

