import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useEffect} from 'react';

//Custom components
import getDescriptionPokemon from '../../Hooks/DescriptionHook';
const DescriptionPokemon = ({poke_data}) => {
  let descriptionUrl = poke_data.species.url;
  const [description, getDescription] = getDescriptionPokemon();

  useEffect(() => {
    getDescription(descriptionUrl);
  }, [poke_data]);

  if (!description) {
    return (
      <ActivityIndicator
        size={'large'}
        marginVertical={30}
        color="rgb( 255, 103, 103)"
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 5,
    backgroundColor: '#ffd595',
    borderRadius: 10,
    padding: 5,
  },
  textStyle: {
    textAlign: 'left',
    color: '#81591c',
    fontWeight: 'bold',
  },
});

export default DescriptionPokemon;
