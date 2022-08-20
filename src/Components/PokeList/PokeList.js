import React, {useEffect} from 'react';

import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon1 from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/Feather';

//Componentes personalizados
import GetData from '../../Hooks/GetData';
import PokeListItem from '../PokeList/PokeListItem';

const PokeList = ({type, setNumColum, numColum}) => {
  const [{data, loading, error}, searchTypesPokemons] = GetData();

  useEffect(() => {
    let cancel = false;
    searchTypesPokemons(type).then(() => {
      if (cancel) return;
    });
    return () => {
      cancel = true;
    };
  }, [type]);

  if (loading)
    return (
      <ActivityIndicator
        size={'large'}
        marginVertical={30}
        color="rgb( 255, 103, 103)"
      />
    );

  if (error || data == null)
    return (
      <View style={styles.container}>
        <Text style={styles.header}>No found</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <View style={styles.list_header}>
        <Text style={styles.text}>{type} Pokemon</Text>
        <View>
          <TouchableOpacity onPress={() => setNumColum(numColum == 1 ? 2 : 1)}>
            {numColum == 1 ? (
              <Icon1 name="list" size={30} />
            ) : (
              <Icon2 name="grid" size={30} color={'#90cdff'} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        initialNumToRender={2}
        key={numColum}
        numColumns={numColum}
        data={data}
        keyExtractor={key => key.pokemon.name}
        renderItem={({item}) => (
          <PokeListItem pokemon={item} count_columns={numColum} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginBottom: 30,
    marginHorizontal: 25,
  },
  list_header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon_style: {},
  text: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default PokeList;
