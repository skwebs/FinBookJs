// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react';
// import LoginScreen from '../screens/auth/LoginScreen';
// import RegisterScreen from '../screens/auth/RegisterScreen';
// const Stack = createNativeStackNavigator();

// const AuthStack = () => {
//   return (
//     <Stack.Navigator detachInactiveScreens={true}>
//       <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false, title: 'Create an account' }} />
//     </Stack.Navigator>
//   );
// };
// export default AuthStack;





import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login" // Set the initial screen explicitly
      detachInactiveScreens={true} // Improves performance by detaching inactive screens
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }} // Hide header for Login screen
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          headerShown: true, // Show header for Register screen
          title: 'Create an account', // Custom title for Register screen
          headerStyle: { backgroundColor: '#f8f8f8' }, // Optional header styling
          headerTitleStyle: { fontWeight: 'bold' }, // Optional header title styling
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
