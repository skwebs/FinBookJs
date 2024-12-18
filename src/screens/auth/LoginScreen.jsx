// import {
//   Button,
//   Platform,
//   SafeAreaView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native';
// import FormTextField from '../../components/FormTextField';
// import React, { useContext, useState } from 'react';
// import { loadUser, login } from '../../services/authServices';
// import AuthContext from '../../contexts/AuthContext';
// import Logo from '../../components/Logo';
// // loadUser
// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});
//   const { setUser } = useContext(AuthContext);

//   const handleLogin = async () => {
//     setErrors({});
//     try {
//       await login({
//         email,
//         password,
//         device_name: `${Platform.OS} ${Platform.Version}`,
//       });
//       const user = await loadUser();
//       setUser(user);

//     } catch (er) {
//       if (er.response?.status === 422) {
//         setErrors(er.response.data.errors);
//       }
//     }
//   };

//   return (
//     <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
//       <View
//         style={{
//           display: 'flex',
//           justifyContent: 'center',
//           marginTop: 30,
//           alignItems: 'center',
//         }}>
//         <Logo />
//       </View>
//       <View style={{ padding: 20, rowGap: 16 }}>
//         <View>
//           <Text style={{ fontWeight: 600, fontSize: 24, color: '#626262' }}>
//             Login
//           </Text>
//         </View>

//         <FormTextField
//           label="Email"
//           value={email}
//           onChangeText={text => setEmail(text)}
//           keyboardType="email-address"
//           returnKeyType="next"
//           blurOnSubmit={false}
//           errors={errors.email}
//         />
//         <FormTextField
//           label="Password"
//           secureTextEntry={true}
//           value={password}
//           onChangeText={text => setPassword(text)}
//           errors={errors.password}
//         />
//         <Button title="Login" onPress={handleLogin} />
//         <Button
//           title="Create an account"
//           onPress={() => {
//             navigation.navigate('Register');
//           }}
//         />
//       </View>

//     </SafeAreaView>
//   );
// };
// export default LoginScreen;
// const styles = StyleSheet.create({});



import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
} from 'react-native';
import FormTextField from '../../components/FormTextField';
import React, { useContext, useState } from 'react';
import { loadUser, login } from '../../services/authServices';
import AuthContext from '../../contexts/AuthContext';
import Logo from '../../components/Logo';
import BasicTextInput from '../../components/BasicTextInput';
import IconTextInput from '../../components/input/IconTextInput';
import CustomTextInput from '../../components/input/CustomTextInput';
import FormTextField2 from '../../components/FormTextField2';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Added loading state
  const { setUser } = useContext(AuthContext);

  const handleLogin = async () => {
    setErrors({});
    setLoading(true); // Start loading indicator
    try {
      await login({
        email,
        password,
        device_name: `${Platform.OS} ${Platform.Version}`,
      });
      const user = await loadUser();
      setUser(user);
    } catch (er) {
      if (er.response?.status === 422) {
        setErrors(er.response.data.errors); // Display validation errors
      } else {
        Alert.alert('Login Failed', 'Invalid credentials or server error.'); // General error handling
      }
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      {/* Login Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Login</Text>

        {/* Email Field */}
        <FormTextField
          label="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          keyboardType="email-address"
          returnKeyType="next"
          blurOnSubmit={false}
          errors={errors.email}
        />

        {/* Password Field */}
        <FormTextField
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          errors={errors.password}
        />
        <FormTextField2
          label="Password"
          secureTextEntry
          value={password}
          onChangeText={text => setPassword(text)}
          errors={errors.password}
        />
        <CustomTextInput />
        {/* Login Button */}
        <Button
          title={loading ? 'Logging in...' : 'Login'}
          onPress={handleLogin}
          disabled={loading} // Disable button while loading
          color="#007BFF"
        />

        {/* Register Button */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account?</Text>
          <Button
            title="Create an account"
            onPress={() => navigation.navigate('Register')}
            color="#28A745"
          />
        </View>
      </View>

    </SafeAreaView>
  );
};

export default LoginScreen;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 30,
  },
  formContainer: {
    padding: 20,
    rowGap: 16,
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    color: '#626262',
    marginBottom: 20,
  },
  registerContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    fontSize: 14,
    color: '#626262',
    marginBottom: 5,
  },
});
