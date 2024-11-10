import { StyleSheet, Text, View } from 'react-native'

const Logo = () => {

  return (
    // <View style={styles.container}>
    //   <View style={styles.logoContainer}>
    //     <Text style={styles.finText}>Fin</Text>
    //     <Text style={styles.bookText}>Book</Text>
    //   </View>
    // </View>
    <View style={{ display: 'flex', flexDirection: "row" }}>
      <Text style={{ fontSize: 50, fontWeight: 600, color: 'red' }}>Fin</Text>
      <Text style={{ fontSize: 50, fontWeight: 600, color: '#2196f3' }}>Book</Text>
    </View>
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

export default Logo