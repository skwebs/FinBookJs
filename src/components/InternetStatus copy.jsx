import React, { useState, useEffect, useRef, useCallback } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const InternetStatus = () => {
  const [isConnected, setIsConnected] = useState(true);
  const slideAnim = useRef(new Animated.Value(-20)).current; // Initial position (hidden above screen)

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      const connected = state.isConnected;
      setIsConnected(connected);
      animateBanner(connected);
    });

    return () => {
      unsubscribe();
    };
  }, [animateBanner]);

  // const animateBanner = (connected) => {
  //   Animated.timing(slideAnim, {
  //     toValue: connected ? -50 : 0, // Slide up if connected, slide down if not
  //     duration: 300, // Animation duration (in ms)
  //     useNativeDriver: true,
  //   }).start();
  // };


  const animateBanner = useCallback(
    (connected) => {
      Animated.timing(slideAnim, {
        toValue: connected ? -20 : 0, // Slide up if connected, slide down if not
        duration: 300, // Animation duration (in ms)
        useNativeDriver: true,
      }).start();
    },
    [slideAnim],
  );

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideAnim }] }, // Apply slide animation
      ]}
    >
      <Text style={styles.text}>No Internet Connection</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    // position: 'absolute',
    // top: 0, // Position at the top of the screen
    // left: 0,
    // right: 0,
    height: 20,
    backgroundColor: '#d9534f', // Red background to indicate error
    justifyContent: 'center',
    alignItems: 'center',
    // zIndex: 1000, // Ensure it appears above other elements
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default InternetStatus;
