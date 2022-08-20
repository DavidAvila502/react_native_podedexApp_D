// * COMPONENTE DE LISTA DE TIPOS, (RETORNA UNA LISTA  CON SCROLL DE TODOS LOS TIPOS DE POKEMONES) *

import React from 'react';
import {View, FlatList} from 'react-native';

//Componentes personalizados
import TypeItem from './TypeItem';
const ListTypes = ({pokemonTypes, setType, type}) => {
  return (
    <View>
      <FlatList
        data={pokemonTypes}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={pokeType => pokeType.name}
        renderItem={(element, index) => {
          return (
            <TypeItem
              name={element.item.name}
              imageType={element.item.imageType}
              index={index}
              active={element.item.name === type}
              handlePress={() => setType(element.item.name)}
            />
          );
        }}
      />
    </View>
  );
};

export default ListTypes;
