import React from 'react';
import LottieView from 'lottie-react-native'; // if you have "esModuleInterop": true
// import LottieView = require('lottie-react-native'); // otherwise you have "esModuleInterop": false

export default class Splash extends React.PureComponent {
  render() {
    return (
      <LottieView
        source={require('../../assets/lottie-splash.json')}
        autoPlay
        loop
      />
    );
  }
}