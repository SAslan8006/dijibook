import auth from '@react-native-firebase/auth';

import endpoints, { baseurl } from '~/api/endpoints';
import { showMessage } from "react-native-flash-message";
import authErrorMessageParse from '~/utils/authErrorMessageParser';


export const createUserWithFB = async (email, password) => {
  if (!email || !password) {
    showMessage({ message: "Email and password required *", type: 'danger' });
    return;
  }
  try {
    const response = await auth().createUserWithEmailAndPassword(email, password);
    console.log("auth response: " + response);

    return { data: response, success: true };
  } catch (error) {
    showMessage({ message: authErrorMessageParse(error.code), type: 'danger' });
    console.error('createUserWithFB: ', error);
  }

  return { data: null, success: false };
};

export const loginUserWithFB = async (email, password) => {
  if (!email || !password) {
    showMessage({ message: "Email and password required *", type: 'danger' });
    return;
  }
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    console.log("login:" + response);
    return { data: response, success: true };
    
  } catch (error) {
    console.error('loginUserWithFB: ', error);
    showMessage({ message: authErrorMessageParse(error.code), type: 'danger' });
    return;
  }

  return { data: null, success: false };
};

export const logout= async () => {
  try {
    const response = await auth().signOut();

    return { data: response, success: true };
  } catch (error) {
    console.error(error);
    showMessage({ message: authErrorMessageParse(error.code), type: 'danger' });
  }

  return { data: null, success: false };
};