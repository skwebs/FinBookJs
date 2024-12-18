// import { NavigationContainer } from '@react-navigation/native';
// import AuthContext from './src/contexts/AuthContext';
// import { loadUser } from './src/services/authServices';
// import React, { useEffect, useState } from 'react';
// import SplashScreen from './src/screens/SplashScreen';
// import AppStack from './src/navigation/AppStack';
// import AuthStack from './src/navigation/AuthStack';
// import InternetStatus from './src/components/InternetStatus';

// const App = () => {
//   const [user, setUser] = useState();
//   const [status, setStatus] = useState('loading');

//   useEffect(() => {
//     async function runEffect() {
//       try {
//         const userDetails = await loadUser();
//         setUser(userDetails);
//       } catch (error) {
//         console.log('Failed to load user', error);
//       }
//       setStatus('idle');
//     }
//     runEffect();
//   }, []);

//   if (status === 'loading') {
//     return <SplashScreen />;
//   }

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       <NavigationContainer>
//         <InternetStatus />
//         {user ? <AppStack /> : <AuthStack />}
//         {/* <AuthStack /> */}
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// };
// export default App;


// import { NavigationContainer } from '@react-navigation/native';
// import AuthContext from './src/contexts/AuthContext';
// import { loadUser } from './src/services/authServices';
// import React, { useEffect, useState, useRef } from 'react';
// import SplashScreen from './src/screens/SplashScreen';
// import AppStack from './src/navigation/AppStack';
// import AuthStack from './src/navigation/AuthStack';
// import InternetStatus from './src/components/InternetStatus';
// import { Animated, StyleSheet } from 'react-native';

// const App = () => {
//   const [user, setUser] = useState();
//   const [status, setStatus] = useState('loading');
//   const contentAnim = useRef(new Animated.Value(-20)).current; // Initial position for content (no offset)

//   // Function to handle banner height changes
//   const handleBannerHeightChange = (height) => {
//     Animated.timing(contentAnim, {
//       toValue: height, // Adjust content position based on the banner height
//       duration: 300, // Animation duration
//       useNativeDriver: true,
//     }).start();
//   };

//   useEffect(() => {
//     async function runEffect() {
//       try {
//         const userDetails = await loadUser();
//         setUser(userDetails);
//       } catch (error) {
//         console.log('Failed to load user', error);
//       }
//       setStatus('idle');
//     }
//     runEffect();
//   }, []);

//   if (status === 'loading') {
//     return <SplashScreen />;
//   }

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       <NavigationContainer>
//         {/* InternetStatus Component */}
//         <InternetStatus onBannerHeightChange={handleBannerHeightChange} />

//         {/* Main Content */}
//         <Animated.View
//           style={[
//             styles.content,
//             { transform: [{ translateY: contentAnim }] }, // Slide the navigation content up or down
//           ]}
//         >
//           {user ? <AppStack /> : <AuthStack />}
//         </Animated.View>
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// };

// const styles = StyleSheet.create({
//   content: {
//     flex: 1, // Make sure it fills the screen
//   },
// });

// export default App;



// import { NavigationContainer } from '@react-navigation/native';
// import AuthContext from './src/contexts/AuthContext';
// import { loadUser } from './src/services/authServices';
// import React, { useEffect, useState, useRef } from 'react';
// import SplashScreen from './src/screens/SplashScreen';
// import AppStack from './src/navigation/AppStack';
// import AuthStack from './src/navigation/AuthStack';
// import InternetStatus from './src/components/InternetStatus';
// import { Animated, StyleSheet } from 'react-native';

// const App = () => {
//   const [user, setUser] = useState();
//   const [status, setStatus] = useState('loading');
//   const contentAnim = useRef(new Animated.Value(-20)).current; // Initial position for content (no offset)

//   // Function to handle banner height changes
//   const handleBannerHeightChange = (height) => {
//     if (height === -20) {
//       // Delay adjustment when hiding the banner
//       setTimeout(() => {
//         Animated.timing(contentAnim, {
//           toValue: height, // Adjust content position based on the banner height
//           duration: 300, // Animation duration
//           useNativeDriver: true,
//         }).start();
//       }, 1000); // 1000ms delay for hiding the banner
//     } else {
//       // Immediately adjust when showing the banner
//       Animated.timing(contentAnim, {
//         toValue: height,
//         duration: 300,
//         useNativeDriver: true,
//       }).start();
//     }
//   };

//   useEffect(() => {
//     async function runEffect() {
//       try {
//         const userDetails = await loadUser();
//         setUser(userDetails);
//       } catch (error) {
//         console.log('Failed to load user', error);
//       }
//       setStatus('idle');
//     }
//     runEffect();
//   }, []);

//   if (status === 'loading') {
//     return <SplashScreen />;
//   }

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       <NavigationContainer>
//         {/* InternetStatus Component */}
//         <InternetStatus onBannerHeightChange={handleBannerHeightChange} />

//         {/* Main Content */}
//         <Animated.View
//           style={[
//             styles.content,
//             { transform: [{ translateY: contentAnim }] }, // Slide the navigation content up or down
//           ]}
//         >
//           {user ? <AppStack /> : <AuthStack />}
//         </Animated.View>
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// };

// const styles = StyleSheet.create({
//   content: {
//     flex: 1, // Make sure it fills the screen
//   },
// });

// export default App;


import { NavigationContainer } from '@react-navigation/native';
import AuthContext from './src/contexts/AuthContext';
import { loadUser } from './src/services/authServices';
import React, { useEffect, useState, useRef } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import InternetStatus from './src/components/InternetStatus';
import { Animated, StyleSheet } from 'react-native';

const App = () => {
  const [user, setUser] = useState();
  const [status, setStatus] = useState('loading');
  const contentAnim = useRef(new Animated.Value(-20)).current; // Initial position for content (no offset)

  // Function to handle banner height changes
  const handleBannerHeightChange = (height) => {
    if (height === -20) {
      // delayed 1 second
      // setTimeout(() => {
      // Slow animation for hiding the banner
      Animated.timing(contentAnim, {
        toValue: height, // Adjust content position based on the banner height
        duration: 600, // Slow animation (1000ms)
        useNativeDriver: true,
      }).start();
      // }, 1000);
    } else {
      // Regular animation for showing the banner
      Animated.timing(contentAnim, {
        toValue: height,
        duration: 300, // Default animation (300ms)
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    async function runEffect() {
      try {
        const userDetails = await loadUser();
        setUser(userDetails);
      } catch (error) {
        console.log('Failed to load user', error);
      }
      setStatus('idle');
    }
    runEffect();
  }, []);

  if (status === 'loading') {
    return <SplashScreen />;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        {/* InternetStatus Component */}
        <InternetStatus onBannerHeightChange={handleBannerHeightChange} />

        {/* Main Content */}
        <Animated.View
          style={[
            styles.content,
            { transform: [{ translateY: contentAnim }] }, // Slide the navigation content up or down

          ]}
        >
          {user ? <AppStack /> : <AuthStack />}
        </Animated.View>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1, // Make sure it fills the screen
  },
});

export default App;
