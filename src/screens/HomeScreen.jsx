import { useContext } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import AuthContext from '../contexts/AuthContext'
import { logout } from '../services/authServices';

// AuthContext

const HomeScreen = () => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout()
    setUser(null);
  }

  return (
    <SafeAreaView>
      <Text>HomeScreen {user.name}</Text>
      <Button title='Logout' onPress={handleLogout} />
    </SafeAreaView>
  )
}
export default HomeScreen
const styles = StyleSheet.create({})