import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Animated } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const InternetStatus = () => {
  const [isConnected, setIsConnected] = useState(true); // Assume connected initially
  const [showMessage, setShowMessage] = useState(false); // Control visibility
  const messageOpacity = React.useRef(new Animated.Value(0)).current; // For fade animation

  useEffect(() => {
    // Subscribe to network changes
    const unsubscribe = NetInfo.addEventListener((state) => {
      const connectionStatus = state.isConnected;

      if (connectionStatus !== isConnected) {
        // Update connection state first
        setIsConnected(connectionStatus);

        // Ensure message box reflects updated color
        setTimeout(() => {
          setShowMessage(true);

          // Reset opacity for each new message
          messageOpacity.setValue(1);

          if (connectionStatus) {
            // Automatically hide "Now Connected" after 1 second if reconnected
            setTimeout(() => {
              Animated.timing(messageOpacity, {
                toValue: 0,
                duration: 500, // Fade out over 500ms
                useNativeDriver: true,
              }).start(() => setShowMessage(false));
            }, 1000);
          }
        }, 50); // Small delay to allow backgroundColor to update
      }
    });

    return () => unsubscribe(); // Cleanup subscription
  }, [isConnected, messageOpacity]);

  return (
    <>
      {showMessage && (
        <Animated.View
          style={[
            styles.notification,
            isConnected ? styles.connected : styles.disconnected,
            { opacity: messageOpacity },
          ]}
        >
          <Text style={styles.text}>
            {isConnected ? 'Now Connected' : 'No Internet Connection'}
          </Text>
        </Animated.View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  notification: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 5,
    zIndex: 1000, // Ensure it appears above other components
  },
  connected: {
    backgroundColor: 'green',
    opacity: 0.5,
  },
  disconnected: {
    backgroundColor: 'red',
    opacity: 0.5,
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default InternetStatus;
