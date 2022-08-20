import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutTitle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 25,
    marginHorizontal: 25,
  },
  title: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 30,
  },
});

export default AboutTitle;
