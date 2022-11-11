import React from 'react';
import LottieView from 'lottie-react-native';
import { StackActions, useNavigation } from '@react-navigation/native';

const Splash: React.FC = () => {
  const navigation = useNavigation();
  function SplashScreenDelay() {
    navigation.dispatch(
      StackActions.replace('DrawerMenu')
    );
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