import database from '@react-native-firebase/database';
import parseContentData from '~/utils/contentData';

export const getAllProducts = async () => { 
  try {
    const response = (await database().ref('/Data').once('value').val());
    console.log("response:" + response);
    return response;
  } catch (error) {
    console.log("error:" + error);
  }
    
  };

