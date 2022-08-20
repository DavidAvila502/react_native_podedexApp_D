import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../Components/Header';

//Custom components
import InfoHeader from '../../Components/InfoPokemon/InfoHeader';
import Typepokemon from '../../Components/InfoPokemon/TypePokemon';
import DescriptionPokemon from '../../Components/InfoPokemon/DescriptionPokemon';

const InfoPokemon = props => {
  let poke_data = props.route.params.data_pokemon;
  return (
    <ScrollView style={styles.container}>
      <Header props={props} />
      <InfoHeader poke_data={poke_data} />
      <DescriptionPokemon poke_data={poke_data} />
      <Typepokemon poke_data={poke_data} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  title_info: {
    backgroundColor: '#404040',
    backgroundColor: '#ccdbe8',
  },
});

export default InfoPokemon;
