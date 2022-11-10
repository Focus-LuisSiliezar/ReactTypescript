import React from 'react';
import LottieView from 'lottie-react-native'; // if you have "esModuleInterop": true
import { StackActions, useFocusEffect, useNavigation } from '@react-navigation/native';
// import LottieView = require('lottie-react-native'); // otherwise you have "esModuleInterop": false


const Splash: React.FC = () => {
  const navigation = useNavigation();
  function SplashScreenDelay() {
    navigation.dispatch(
      StackActions.replace('Home')
    );
    console.log('Time is up');
  }
  setTimeout(() => {
    SplashScreenDelay();
  }, 4400);

  return (
    <LottieView
      source={require('../../assets/lottie-splash.json')}
      autoPlay
      loop
    />
  );
}

export default Splash;