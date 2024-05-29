import React, {useEffect} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AppContainer from './src';
import './src/Translation';
import {StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <AppContainer />
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(App);
