import { SafeAreaView, StyleSheet, Text, View } from 'react-native'

const SplashScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.finText}>Fin</Text>
        <Text style={styles.bookText}>Book</Text>
      </View>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
  },
  finText: {
    color: 'red',
    fontSize: 50,
    fontWeight: '600',
  },
  bookText: {
    color: '#2196F3',
    fontSize: 50,
    fontWeight: '600',
  },
});

export default SplashScreen