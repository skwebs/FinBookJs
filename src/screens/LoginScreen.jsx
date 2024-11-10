import { Button, Platform, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import FormTextField from './components/FormTextField'
import { useState } from 'react';
import { loadUser, login } from '../services/authServices';
import { getToken, removeToken, setToken } from '../services/tokenServices';


const LoginScreen = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [errors, setErrors] = useState({});

  async function handleSetKeyChain() {
    setToken("test");
  }
  async function handleGetKeyChain() {
    console.log(await getToken());
  }

  const handleLogin = async () => {
    setErrors({});
    try {
      const token = await login({
        email,
        password,
        device_name: `${Platform.OS} ${Platform.Version}`
      });

      console.log(data.token);

      const { data: user } = await loadUser({
        headers: {
          Authorization: `Bearer ${data.token}`
        }
      });
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
      <View style={{ padding: 20, rowGap: 16 }}>
        <FormTextField
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
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
        <Button title='set' onPress={handleSetKeyChain} />
        <Button title='get' onPress={handleGetKeyChain} />
        <Button title='remove' onPress={() => removeToken()} />
      </View>
    </SafeAreaView>
  )
}
export default LoginScreen
const styles = StyleSheet.create({})