// import { Button, Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
// import FormTextField from '../../components/FormTextField';
// import React, { useContext, useState } from 'react';
// import { loadUser, register } from '../../services/authServices';
// import AuthContext from '../../contexts/AuthContext';
// import Logo from '../../components/Logo';


// const RegisterScreen = ({ navigation }) => {

//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirmation, setPasswordConfirmation] = useState('');
//   const [errors, setErrors] = useState({});
//   const { user, setUser } = useContext(AuthContext);

//   const handleRegister = async () => {
//     setErrors({});
//     const regData = {
//       name,
//       email,
//       password,
//       password_confirmation: passwordConfirmation,
//       device_name: `${Platform.OS} ${Platform.Version}`
//     };

//     try {
//       await register(regData);

//       const userData = await loadUser();
//       setUser(userData);

//       if (user) {
//         navigation.replace('Home');
//       }

//     } catch (err) {
//       if (err.response?.status === 422) {
//         console.warn(err.response.data.errors);
//         setErrors(err.response.data.errors);
//       }
//     }
//   };

//   return (
//     <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
//       <View style={{ display: 'flex', justifyContent: 'center', marginTop: 30, alignItems: 'center' }}>
//         <Logo />
//       </View>
//       <View style={{ padding: 20, rowGap: 16 }}>
//         <View>
//           <Text style={{ fontWeight: 600, fontSize: 24, color: '#626262' }}>Create an account</Text>
//         </View>
//         <FormTextField
//           label="Name"
//           value={name}
//           onChangeText={(text) => setName(text)}
//           errors={errors.name}
//         />

//         <FormTextField
//           label="Email"
//           value={email}
//           onChangeText={(text) => setEmail(text)}
//           keyboardType="email-address"
//           errors={errors.email}
//         />

//         <FormTextField
//           label="Password"
//           secureTextEntry={true}
//           value={password}
//           onChangeText={(text) => setPassword(text)}
//           errors={errors.password}
//         />

//         <FormTextField
//           label="Password Confirmation"
//           secureTextEntry={true}
//           value={passwordConfirmation}
//           onChangeText={(text) => setPasswordConfirmation(text)}
//           errors={errors.password_confirmation}
//         />
//         <Button title='Create account' onPress={handleRegister} />
//         <Button title='Go to login' onPress={() => {
//           navigation.goBack();
//         }} />
//       </View>
//     </SafeAreaView>
//   );
// };
// export default RegisterScreen;
// const styles = StyleSheet.create({});

import { Button, Platform, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import FormTextField from '../../components/FormTextField';
import React, { useContext, useState } from 'react';
import { loadUser, register } from '../../services/authServices';
import AuthContext from '../../contexts/AuthContext';
import Logo from '../../components/Logo';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Added loading state
  const { setUser } = useContext(AuthContext);

  const handleRegister = async () => {
    setErrors({});
    const regData = {
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      device_name: `${Platform.OS} ${Platform.Version}`,
    };

    setLoading(true); // Start loading state
    try {
      await register(regData);

      const userData = await loadUser();
      setUser(userData);
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors); // Show validation errors
      } else {
        Alert.alert('Registration Failed', 'Please try again later.'); // General error handling
      }
    } finally {
      setLoading(false); // Stop loading state
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Logo />
      </View>

      {/* Registration Form */}
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create an account</Text>

        {/* Name Input */}
        <FormTextField
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          errors={errors.name}
        />

        {/* Email Input */}
        <FormTextField
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          errors={errors.email}
        />

        {/* Password Input */}
        <FormTextField
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          errors={errors.password}
        />

        {/* Password Confirmation Input */}
        <FormTextField
          label="Password Confirmation"
          secureTextEntry={true}
          value={passwordConfirmation}
          onChangeText={(text) => setPasswordConfirmation(text)}
          errors={errors.password_confirmation}
        />

        {/* Create Account Button */}
        <Button
          title={loading ? 'Creating account...' : 'Create account'}
          onPress={handleRegister}
          disabled={loading} // Disable button while loading
          color="#007BFF"
        />

        {/* Login Navigation Button */}
        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Already have an account?</Text>
          <Button
            title="Go to login"
            onPress={() => navigation.goBack()}
            color="#28A745"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegisterScreen;

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
