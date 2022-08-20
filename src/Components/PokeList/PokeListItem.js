import React, {useEffect, memo} from 'react';

import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import * as RootNavigation from '../../RootNavigation/RootNavigation';

//Custom modules
import GetAllData from '../../Hooks/GetAllData';
import Cstyles from './styles';

const PokeListItem = ({pokemon, count_columns}) => {
  const [{data}, searchPokemons] = GetAllData();

  useEffect(() => {
    let cancel = false;
    searchPokemons(pokemon.pokemon.name).then(() => {
      if (cancel) return;
    });

    return () => {
      cancel = true;
    };
  }, []);

  if (data == null) {
    return (
      <View
        style={[
          count_columns == 1 ? Cstyles.container : Cstyles.Gcontainer,
          {justifyContent: 'center'},
        ]}>
        <ActivityIndicator
          size={'large'}
          marginVertical={30}
          color="rgb( 255, 103, 103)"
        />
      </View>
    );
  }

  return (
    <View>
      <View style={count_columns == 1 ? Cstyles.container : Cstyles.Gcontainer}>
        <View
          style={
            count_columns == 1
              ? Cstyles.image_container
              : Cstyles.Gimage_container
          }>
          <Image
            source={{uri: data.sprites.other['official-artwork'].front_default}}
            style={count_columns == 1 ? Cstyles.image : Cstyles.Gimage}
          />
        </View>
        <View
          style={
            count_columns == 1
              ? Cstyles.info_container
              : Cstyles.Ginfo_container
          }>
          <View
            style={
              count_columns == 1
                ? Cstyles.title_container
                : Cstyles.Gtitle_container
            }>
            <Text
              style={
                count_columns == 1 ? Cstyles.text_titles : Cstyles.Gtext_titles
              }>
              {data.name}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() =>
              RootNavigation.navigate('InfoPokemon', {data_pokemon: data})
            }>
            <View
              style={
                count_columns == 1
                  ? Cstyles.more_container
                  : Cstyles.Gmore_container
              }>
              <Text
                style={
                  count_columns == 1 ? Cstyles.more_text : Cstyles.Gmore_text
                }>
                More
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={count_columns == 1 ? Cstyles.poke_id : Cstyles.Gpoke_id}>
          <Text
            style={count_columns == 1 ? Cstyles.id_style : Cstyles.Gid_style}>
            #{data.id}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default memo(PokeListItem);
