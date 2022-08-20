import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {useState} from 'react';

// Componentes personalizados
import Header from '../../Components/Header';
import Search from '../../Components/Search';
import ListTypes from '../../Components/ListTypes/ListTypes';
import PokeList from '../../Components/PokeList/PokeList';
import PokeTypes from '../../Components/PokeTypes';

const HomeScreen = props => {
  const [type, setType] = useState('Normal');

  const [numColum, setNumColum] = useState(1);

  let pokemonTypes = PokeTypes();

  return (
    <View style={styles.container}>
      <Header props={props} />
      <Search setType={setType} />
      <ListTypes pokemonTypes={pokemonTypes} setType={setType} type={type} />
      <PokeList type={type} setNumColum={setNumColum} numColum={numColum} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default HomeScreen;
