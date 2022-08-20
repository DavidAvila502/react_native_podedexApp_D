import React, {useState} from 'react';
import {ToastAndroid} from 'react-native';
// Google components
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import * as RootNavigation from '../RootNavigation/RootNavigation';

//Supuesta configuracion *********************************************************
GoogleSignin.configure({
  androidClientId:
    '990003487465-hk2qbgu8vu40t0i43av34o1a7ighlrd2.apps.googleusercontent.com',
});
//************************* FUNCION DE INICIO DE SESION *********************** */
let signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    // this.setState({userInfo});
    ToastAndroid.showWithGravity(
      'Login...',
      ToastAndroid.SHORT,
      ToastAndroid.CENTER,
    );
    // console.log(userInfo);
    RootNavigation.navigate('DrawerN');

    // console.log(props.navigation);
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
      ToastAndroid.showWithGravity(
        'Operation cancelled...',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
      ToastAndroid.showWithGravity(
        'Play services are not available...',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      // some other error happened
      ToastAndroid.showWithGravity(
        'Something was wrong...',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    }
  }
};

//******************************* Funcion de salir ***************************************** */
let signOut = async () => {
  try {
    await GoogleSignin.signOut();
    // console.log('User removed');
    RootNavigation.navigate('Login');
  } catch (error) {
    console.error(error);
  }
};

//***********************Funcion para saber si esta Logeado **********************************************

let IsActive = () => {
  let [response, setResponse] = useState('');

  let isSignedIn = async () => {
    try {
      const isSignedIn = await GoogleSignin.isSignedIn();
      // this.setState({isLoginScreenPresented: !isSignedIn});
      setResponse(isSignedIn);
    } catch (error) {
      setResponse('');
    }
  };

  return [response, isSignedIn];
};

//******************************** Obtener datos del usuario ************************/

let dataUser = () => {
  let [dataU, setData] = useState('');

  let getCurrentUser = async () => {
    try {
      const currentUser = await GoogleSignin.getCurrentUser();
      // this.setState({currentUser});
      setData(currentUser);
    } catch (error) {
      setData('');
    }
  };

  return [dataU, getCurrentUser];
};

export {signIn, signOut, IsActive, dataUser};
