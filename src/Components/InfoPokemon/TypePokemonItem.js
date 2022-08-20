import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const TypePokemonItem = ({name, imageType}) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.image_container]}>
          <Image source={imageType} style={styles.image_values} />
        </View>
        <Text>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 80,
    height: 100,
    borderRadius: 50,
    marginVertical: 15,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#bbbbbb',
    borderWidth: 1,
    shadowColor: 'black',
    shadowOffset: {width: 5, height: 5},
    elevation: 5,
    shadowOpacity: 0.7,
  },
  image_container: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginBottom: 5,
  },

  image_values: {
    width: 60,
    height: 60,
  },
});

export default TypePokemonItem;
