import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { logoutUserWithFB } from '~/redux/actions/app';

const mapDispatchToProps = dispatch => ({ dispatch });

const Stack = createStackNavigator();

const MainStack = connect(mapDispatchToProps)(props => {
  const { dispatch, app } = props;

  return (
    // <Stack.Navigator>
    //   <Stack.Screen
    //     name="category"
    //     options={{
    //       headerShown: true,
    //       title: 'Categories',
    //       headerTitleAlign: 'center',
    //       headerRight: () => <Icon name="logout" size={28} onPress={() => dispatch(logoutUserWithFB())} />,
    //     }}
    //     component={category}
    //   />
    //   <Stack.Screen
    //     name="Products"
    //     options={{
    //       headerShown: true,
    //       title: 'Products',
    //       headerTitleAlign: 'center',
    //       headerRight: () => <Icon name="logout" size={28} onPress={() => dispatch(logoutUserWithFB())} />,
    //     }}
    //     component={Products}
    //   />
    //   <Stack.Screen
    //     name="Detail"
    //     options={{
    //       headerShown: true,
    //       title: 'Detail',
    //       headerTitleAlign: 'center',
    //       headerRight: () => <Icon name="logout" size={28} onPress={() => dispatch(logoutUserWithFB())} />,
    //     }}
    //     component={Detail}
    //   />
    // </Stack.Navigator>
    <Text> Main  Stack</Text>
  );
});

export { MainStack };
