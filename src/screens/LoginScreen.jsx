import { Button, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import FormTextField from './components/FormTextField'
import { useContext, useState } from 'react';
import { loadUser, login } from '../services/authServices';
import AuthContext from '../contexts/AuthContext';
import Logo from './components/Logo';


const LoginScreen = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({});
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    setErrors({});
    try {
      const token = await login({
        email,
        password,
        device_name: `${Platform.OS} ${Platform.Version}`
      });

      console.log(token);

      const user = await loadUser();
      setUser(user);
      console.log(user)

    } catch (er) {
      if (er.response?.status === 422) {
        console.warn(er.response.data.errors);
        setErrors(er.response.data.errors);
      }
    }
  }


  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>

      <View style={{ display: 'flex', justifyContent: 'center', marginTop: 30, alignItems: 'center' }}>
        <Logo />
      </View>
      <View style={{ padding: 20, rowGap: 16 }}>
        <View>
          <Text style={{ fontWeight: 600, fontSize: 24, color: '#626262' }}>Login</Text>
        </View>

        <FormTextField
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          returnKeyType="next"
          blurOnSubmit={false}
          errors={errors.email}
        />
        <FormTextField
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          errors={errors.password}
        />
        <Button title='Login' onPress={handleLogin} />
        <Button title='Create an account' onPress={() => {
          navigation.navigate("Register")
        }} />
      </View>
    </SafeAreaView>
  )
}
export default LoginScreen
const styles = StyleSheet.create({})