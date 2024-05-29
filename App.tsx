import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AppContainer from './src';
import './src/Translation';
import {StyleSheet} from 'react-native';

const App: React.FC = () => (
  <GestureHandlerRootView style={styles.container}>
    <AppContainer />
  </GestureHandlerRootView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(App);
