import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Componentes personalizados
import Header from '../../Components/Header';
import AboutTitle from '../../Components/AboutTitle';

const AboutScreen = props => {
  return (
    <View style={styles.container}>
      <Header props={props} />
      <AboutTitle />
      <Text>Desarrollador: David Avila</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default AboutScreen;
