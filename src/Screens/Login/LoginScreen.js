import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
//Componentes personalizados
import LoginBox from '../../Components/Login/LoginBox';
import {signIn} from '../../Autentication/Autentication';
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../Images/LoginWallpaper/poke3.png')}
        style={styles.image}>
        <LoginBox signIn={() => signIn()} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
