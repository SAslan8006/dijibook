import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

import { Provider } from 'react-redux';

import { Navigation } from '~/navigation';

import store from '~/redux';

import { colors } from './themes';
import text from '~/configs/text.json';

const App = props => {
  return (
    <View style={{ flex: 1, backgroundColor: colors.white }}>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <Text style={{ fontSize: text.H1 }}>Ana sayfa</Text>
        </SafeAreaView>
        {/* <Navigation /> */}
      </Provider>
    </View>
  );
};

export { App };
