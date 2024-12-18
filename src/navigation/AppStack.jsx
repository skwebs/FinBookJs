// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import React from 'react';
// import HomeScreen from '../screens/HomeScreen';
// import CustomerListScreen from '../screens/cusotmer/CustomerListScreen';
// // const Stack = createNativeStackNavigator();

// // const AppStack = () => {
// //   return (
// //     <Stack.Navigator>
// //       <Stack.Screen name="Home" component={HomeScreen} />
// //       <Stack.Screen name="Customer" component={CustomerListScreen} />
// //     </Stack.Navigator>
// //   );
// // };
// // export default AppStack;
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Animated } from 'react-native';
// import TransactionListScreen from '../screens/transaction/TransactionListScreen';

// const headerHeight = new Animated.Value(80);
// const Stack = createNativeStackNavigator();

// const AppStack = () => {
//   const animateHeader = (newHeight) => {
//     Animated.timing(headerHeight, {
//       toValue: newHeight,
//       duration: 300,
//       useNativeDriver: false,
//     }).start();
//   };

//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerStyle: {
//           height: headerHeight, // Use animated value for height
//         },
//       }}
//     >
//       <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//       <Stack.Screen name="Customer" component={CustomerListScreen} />
//       <Stack.Screen name="Transaction" component={TransactionListScreen} />
//     </Stack.Navigator>
//   );
// };
// export default AppStack;











import React from 'react';
import { Animated } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import TransactionListScreen from '../screens/transaction/TransactionListScreen';
import CustomerListScreen from '../screens/cusotmer/CustomerListScreen';

// Animated header height
const headerHeight = new Animated.Value(80); // Initial height
const Stack = createNativeStackNavigator();

const AppStack = () => {
  // Function to animate header height
  // const animateHeader = (newHeight) => {
  //   Animated.timing(headerHeight, {
  //     toValue: newHeight,
  //     duration: 300,
  //     useNativeDriver: false, // Setting false since height can't use the native driver directly
  //   }).start();
  // };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: headerHeight, // Use animated value for header height
        },
      }}
    >
      {/* Home Screen */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // No header on HomeScreen
      />
      {/* Customer List Screen */}
      <Stack.Screen
        name="Customer"
        component={CustomerListScreen}
        options={{
          headerTitle: 'Customer List', // Optional: Customize title if needed
        }}
      />
      {/* Transaction Screen */}
      <Stack.Screen
        name="Transaction"
        component={TransactionListScreen}
        options={{
          headerTitle: 'Transaction List', // Optional: Customize title if needed
        }}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
