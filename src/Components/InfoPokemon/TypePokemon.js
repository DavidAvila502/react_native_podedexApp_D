import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';
//Custom components
import PokeTypes from '../PokeTypes';
import TypePokemonItem from './TypePokemonItem';

const Typepokemon = ({poke_data}) => {
  /* Obtenemos los tipos del json */
  let Api_types = [];

  poke_data.types.forEach(element => {
    Api_types.push(element.type.name);
  });
  //Filtramos los objetos correspondientes a ese tipo
  let data_types = PokeTypes().filter(type => {
    let find = 0;

    Api_types.forEach(item => {
      if (type.name.toUpperCase() == item.toUpperCase()) {
        find = 1;
      }
    });

    if (find != 0) {
      return type;
    }
  });

  // console.log(data_types);

  return (
    <View style={styles.container}>
      <View style={styles.text_container}>
        <Text style={styles.textStyles}>Type</Text>
      </View>

      <FlatList
        data={data_types}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={pokeType => pokeType.name}
        renderItem={element => {
          return (
            <TypePokemonItem
              name={element.item.name}
              imageType={element.item.imageType}
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    marginVertical: 15,
    padding: 10,
    elevation: 7,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    borderColor: '#787878',
  },
  text_container: {
    alignItems: 'center',
    backgroundColor: '#ff4141',
    padding: 5,
    borderRadius: 50,
    elevation: 15,
    borderColor: '#787878',
    borderWidth: 1,
  },
  textStyles: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Typepokemon;
