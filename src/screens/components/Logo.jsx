import { Text, View } from 'react-native'

const Logo = () => {

  return (
    <View>
      <View style={{ display: 'flex', flexDirection: "row" }}>
        <Text style={{ fontSize: 50, fontWeight: 600, color: 'red' }}>Fin</Text>
        <Text style={{ fontSize: 50, fontWeight: 600, color: '#2196f3' }}>Book</Text>
      </View>
      <Text style={{ textAlign: "center", color: 'gray' }}>By Satish Kumar Sharma</Text>
    </View>
  )
}

export default Logo