import { Button, Platform, SafeAreaView, StyleSheet, View } from 'react-native'
import FormTextField from './components/FormTextField'
import { useContext, useState } from 'react';
import { loadUser, register } from '../services/authServices';
import AuthContext from '../contexts/AuthContext';


const RegisterScreen = ({ navigation }) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});
  const { user, setUser } = useContext(AuthContext);

  const handleRegister = async () => {
    setErrors({});
    const regData = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      device_name: `${Platform.OS} ${Platform.Version}`
    };
    // console.log(regData)
    try {
      await register(regData);

      const userData = await loadUser();
      setUser(userData);
      // console.log(user, userData)
      if (user) {
        navigation.replace("Home");
      }

    } catch (err) {
      if (err.response?.status === 422) {
        console.warn(err.response.data.errors);
        setErrors(err.response.data.errors);
      }
    }
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ padding: 20, rowGap: 16 }}>

        <FormTextField
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          errors={errors.name}
        />

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

        <FormTextField
          label="Password Confirmation"
          secureTextEntry={true}
          value={passwordConfirmation}
          onChangeText={(text) => setPasswordConfirmation(text)}
          errors={errors.password_confirmation}
        />
        <Button title='Create account' onPress={handleRegister} />
        <Button title='Go to login' onPress={() => {
          navigation.goBack()
        }} />
      </View>
    </SafeAreaView>
  )
}
export default RegisterScreen
const styles = StyleSheet.create({})