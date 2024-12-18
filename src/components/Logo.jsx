import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Logo = () => {

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.logoFirstText}>Fin</Text>
        <Text style={styles.logoSecondText}>Book</Text>
      </View>
      <Text style={styles.logoBottomText}>By Satish Kumar Sharma</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
  },
  logoFirstText: {
    fontSize: 50,
    fontWeight: 600,
    color: 'red',
  },
  logoSecondText: {
    fontSize: 50,
    fontWeight: 600,
    color: '#2196f3',
  },
  logoBottomText: {
    textAlign: 'center',
    color: 'gray',
  },
});
export default Logo;

