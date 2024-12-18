// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Text, StyleSheet, Animated } from 'react-native';
// import NetInfo from '@react-native-community/netinfo';

// const InternetStatus = ({ onBannerHeightChange }) => {
//   const [isConnected, setIsConnected] = useState(true);
//   const slideAnim = useRef(new Animated.Value(20)).current; // Initial position (hidden above screen)

//   useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener((state) => {
//       const connected = state.isConnected;
//       setIsConnected(connected);
//       animateBanner(connected);
//       onBannerHeightChange(connected ? -20 : 0); // Notify parent component about the banner height
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [animateBanner, onBannerHeightChange]);

//   const animateBanner = useCallback(
//     (connected) => {
//       Animated.timing(slideAnim, {
//         toValue: connected ? -20 : 0, // Slide up if connected, slide down if not
//         duration: 300, // Animation duration (in ms)
//         useNativeDriver: true,
//       }).start();
//     },
//     [slideAnim],
//   );



//   return (
//     <Animated.View
//       style={[
//         styles.container,
//         { transform: [{ translateY: slideAnim }] }, // Apply slide animation
//         isConnected ? styles.connectedBg : styles.notConnectedBg,
//       ]}
//     >
//       {!isConnected ? <Text style={styles.text}>Not Connected</Text> : <Text style={styles.text}>Connected</Text>}
//     </Animated.View>
//   );


//   // return (
//   //   <View
//   //     style={[
//   //       styles.container,
//   //       { transform: [{ translateY: slideAnim }] }, // Apply slide animation
//   //     ]}
//   //   >
//   //     {!isConnected && <Text style={styles.text}>No Internet Connection</Text>}
//   //   </View>
//   // );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 20,
//     // backgroundColor: '#d9534f',
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000, // Ensure it appears above other elements
//   },
//   connectedBg: {
//     backgroundColor: '#00aa00', // Red background to indicate error
//   },
//   notConnectedBg: {
//     backgroundColor: '#d9534f', // Red background to indicate error
//   },
//   text: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },

// });

// export default InternetStatus;


// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Text, StyleSheet, Animated } from 'react-native';
// import NetInfo from '@react-native-community/netinfo';

// const InternetStatus = ({ onBannerHeightChange }) => {
//   const [isConnected, setIsConnected] = useState(true);
//   const slideAnim = useRef(new Animated.Value(20)).current; // Initial position (hidden above screen)

//   useEffect(() => {
//     const unsubscribe = NetInfo.addEventListener((state) => {
//       const connected = state.isConnected;
//       setIsConnected(connected);
//       animateBanner(connected);
//       onBannerHeightChange(connected ? -20 : 0); // Notify parent component about the banner height
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, [animateBanner, onBannerHeightChange]);

//   const animateBanner = useCallback(
//     (connected) => {
//       if (connected) {
//         // Add a 1000ms delay before hiding the banner
//         setTimeout(() => {
//           Animated.timing(slideAnim, {
//             toValue: -20, // Slide up if connected
//             duration: 300, // Animation duration
//             useNativeDriver: true,
//           }).start();
//         }, 1000); // Delay of 1000ms
//       } else {
//         Animated.timing(slideAnim, {
//           toValue: 0, // Slide down if not connected
//           duration: 300, // Animation duration
//           useNativeDriver: true,
//         }).start();
//       }
//     },
//     [slideAnim],
//   );

//   return (
//     <Animated.View
//       style={[
//         styles.container,
//         { transform: [{ translateY: slideAnim }] }, // Apply slide animation
//         isConnected ? styles.connectedBg : styles.notConnectedBg,
//       ]}
//     >
//       {!isConnected ? (
//         <Text style={styles.text}>Not Connected</Text>
//       ) : (
//         <Text style={styles.text}>Connected</Text>
//       )}
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     zIndex: 1000, // Ensure it appears above other elements
//   },
//   connectedBg: {
//     backgroundColor: '#00aa00', // Green background to indicate connection
//   },
//   notConnectedBg: {
//     backgroundColor: '#d9534f', // Red background to indicate no connection
//   },
//   text: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
// });

// export default InternetStatus;


import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const InternetStatus = ({ onBannerHeightChange }) => {
  const [isConnected, setIsConnected] = useState(true);
  const slideAnim = useRef(new Animated.Value(20)).current; // Initial position (hidden above screen)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const connected = state.isConnected;
      setIsConnected(connected);
      animateBanner(connected);
      onBannerHeightChange(connected ? -20 : 0); // Notify parent component about the banner height
    });

    return () => {
      unsubscribe();
    };
  }, [animateBanner, onBannerHeightChange]);

  const animateBanner = useCallback(
    (connected) => {
      if (connected) {
        // setTimeout(() => {
        // Slow animation duration for disappearing
        Animated.timing(slideAnim, {
          toValue: -20, // Slide up if connected
          duration: 600, // Slow animation (1000ms)
          useNativeDriver: true,
        }).start();
        // }, 1000);
      } else {
        // Regular animation duration for appearing
        Animated.timing(slideAnim, {
          toValue: 0, // Slide down if not connected
          duration: 300, // Default animation (300ms)
          useNativeDriver: true,
        }).start();
      }
    },
    [slideAnim],
  );

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideAnim }] }, // Apply slide animation
        isConnected ? styles.connectedBg : styles.notConnectedBg,
      ]}
    >
      {!isConnected ? (
        <Text style={styles.text}>Not Connected</Text>
      ) : (
        <Text style={styles.text}>Connected</Text>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000, // Ensure it appears above other elements
  },
  connectedBg: {
    backgroundColor: '#28A745', // Green background to indicate connection
  },
  notConnectedBg: {
    backgroundColor: '#d9534f', // Red background to indicate no connection
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default InternetStatus;
