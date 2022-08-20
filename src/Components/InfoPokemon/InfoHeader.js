import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import style from '../../Navigation/style';

const InfoHeader = ({poke_data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card_container}>
        <View style={styles.content}>
          <View style={styles.elevation_container}>
            <View style={styles.image_container}>
              <Image
                source={{
                  uri: poke_data.sprites.other['official-artwork']
                    .front_default,
                }}
                style={styles.image_style}
              />
            </View>
          </View>
          <View style={styles.info_container}>
            <View style={styles.name_container}>
              <Text style={styles.text_styles}>{poke_data.name}</Text>
            </View>

            <View style={styles.id_container}>
              <Text style={styles.id_text}>#{poke_data.id}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    padding: 5,
  },

  card_container: {
    borderColor: '#787878',
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    backgroundColor: 'white',
    // backgroundColor: '#404040',
    backgroundColor: '#657da0',

    elevation: 15,
  },

  content: {
    alignItems: 'center',
  },
  //*******Imagen******** */

  elevation_container: {
    // alignItems: 'center',
    borderRadius: 100,
    padding: 2,
    elevation: 6,
  },

  image_container: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#787878',
  },

  image_style: {
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: '#ccdbe8',
  },

  //nombre y id del pokemon

  info_container: {
    flexDirection: 'row',
  },

  name_container: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#ff4141',
    borderRadius: 20,
  },

  text_styles: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },

  id_container: {
    marginLeft: 3,
    alignItems: 'center',
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#ffb13a',
    borderRadius: 20,
  },
  id_text: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default InfoHeader;
