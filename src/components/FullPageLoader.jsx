// import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
// const FullPageLoader = () => {
//   return (
//     <>
//       <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//         <View style={{ width: 60, height: 60, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
//           <ActivityIndicator size={45} />
//         </View>
//       </View>
//     </>
//   );
// };
// export default FullPageLoader;
// const styles = StyleSheet.create({})


import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

const FullPageLoader = ({
  visible = true, // Controls whether the loader is shown
  size = 45, // Size of the ActivityIndicator
  color = '#000', // Color of the ActivityIndicator
  overlayColor = 'rgba(0,0,0,0.4)', // Background color of the overlay
  message = '', // Optional message below the loader
}) => {
  if (!visible) { return null; }

  return (
    <View style={[styles.overlay, { backgroundColor: overlayColor }]}>
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={size} color={color} />
        {message ? <Text style={styles.message}>{message}</Text> : null}
      </View>
    </View>
  );
};

export default FullPageLoader;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderContainer: {
    // width: 70,
    display: 'flex',
    flexDirection: 'row',
    // height: 70,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    elevation: 5, // Shadow for Android
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  message: {
    marginHorizontal: 10,
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
});
