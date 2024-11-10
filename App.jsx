import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen'
import AuthContext from './src/contexts/AuthContext'
import { loadUser } from './src/services/authServices'
import { useEffect, useState } from 'react'
import SplashScreen from './src/screens/SplashScreen'
import RegisterScreen from './src/screens/RegisterScreen'

const Stack = createNativeStackNavigator();

const App = () => {
  const [user, setUser] = useState()
  const [status, setStatus] = useState("loading")

  useEffect(() => {
    async function runEffect() {
      try {
        const user = await loadUser();
        console.log(user);
        setUser(user);
      } catch (error) {
        console.log("Failed to load user", error);
      }
      setStatus("idle");
    }
    runEffect();
  }, [])

  if (status === "loading") {
    return <SplashScreen />
  }
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          {user ?
            <Stack.Screen name='Home' component={HomeScreen} />
            :
            <>
              <Stack.Screen name='Login' component={LoginScreen} />
              <Stack.Screen name='Register' component={RegisterScreen} options={{ title: "Create an account" }} />
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
export default App