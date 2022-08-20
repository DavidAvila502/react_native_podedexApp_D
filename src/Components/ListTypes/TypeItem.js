// * ITEMS DE LA LISTA DE TIPOS DE POKEMONES (RETORNA UN ELEMENTO CON EL TIPO DE POKEMON Y SU IMAGEN) *
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const TypeItem = ({name, imageType, index, active, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          index === 0 ? {marginLeft: 25} : {marginLeft: 10},
          active
            ? {backgroundColor: 'rgb(  255, 174, 174 )'}
            : {backgroundColor: 'white'},
        ]}>
        <View style={[styles.image_container]}>
          <Image source={imageType} style={styles.image_values} />
        </View>
        <Text style={styles.name}>{name}</Text>
      </View>
    </TouchableOpacity>
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
    elevation: 12,
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

  name: {
    color: '#727271',
  },
});

export default TypeItem;
