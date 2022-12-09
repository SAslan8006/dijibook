import React from 'react';
import { Text,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DCVBarcodeReader } from 'dynamsoft-capture-vision-react-native';

import { connect } from 'react-redux';
import { logoutUserWithFB } from '~/redux/actions/app';

import Home from '~/screens/Home';
import Deneme from '~/screens/AddBook';
import Redux from '~/screens/Redux';
import BarkodRead from '~/screens/BarkodRead';
import TabNavigation from '~/screens/TabNavigation';


(async () => {
  try {
    await DCVBarcodeReader.initLicense("DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAxNTEyNTI2LVRYbE5iMkpwYkdWUWNtOXFYMlJpY2ciLCJvcmdhbml6YXRpb25JRCI6IjEwMTUxMjUyNiIsImNoZWNrQ29kZSI6MTAxMTE2NjY1MX0=");
  } catch (e) {
    console.log(e);
  }
})();


const mapDispatchToProps = dispatch => ({ dispatch });

const Stack = createStackNavigator();

const MainStack = connect(mapDispatchToProps)(props => {
  const { dispatch, app } = props;

  return (
    <Stack.Navigator>
      <Stack.Screen name="chat" options={{
        headerShown: false, title: 'Deneme',
        headerTitleAlign: 'center', headerRight: () => <Icon name="logout" size={28} onPress={() => dispatch(logoutUserWithFB())} />,
      }} component={Redux} />
    </Stack.Navigator>
  );
});

export { MainStack };
