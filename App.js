import 'react-native-gesture-handler';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import AppNavigation from './src/Navigation/AppNavigation';

// funcion principal
const App = () => {
  return (
    <View style={styles.container}>
      <AppNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
