import React from 'react';
import { View,Text } from 'react-native';

import { Provider } from 'react-redux';

import { Navigation } from '~/navigation';

import store from '~/redux';

const App = props => {
  return (
    <View style={{ flex: 1 }}>
      <Provider store={store}>
      <Text>Ana sayfa</Text>
        {/* <Navigation /> */}
      </Provider>
    </View>
  );
};

export { App };
