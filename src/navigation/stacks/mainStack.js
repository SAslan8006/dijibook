import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { logoutUserWithFB } from '~/redux/actions/app';

import Home from '~/screens/Home';

const mapDispatchToProps = dispatch => ({ dispatch });

const Stack = createStackNavigator();

const MainStack = connect(mapDispatchToProps)(props => {
  const { dispatch, app } = props;

  return (
    <Stack.Navigator>
      <Stack.Screen name="chat" options={{
        headerShown: true, title: 'Chat',
        headerTitleAlign: 'center', headerRight: () => <Icon name="logout" size={28} onPress={() => dispatch(logoutUserWithFB())} />,
      }} component={Home} />
    </Stack.Navigator>
  );
});

export { MainStack };
