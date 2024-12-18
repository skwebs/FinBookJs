import { SafeAreaView, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import React from 'react';

const SplashScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Logo />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});

export default SplashScreen;