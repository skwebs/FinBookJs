import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native';

const IconTextInput = ({
  placeholder,
  secureTextEntry = false,
  iconSource,
  onChangeText,
  value,
  ...props
}) => {
  const [visiblePassword, setVisiblePassword] = useState(secureTextEntry);

  return (
    <View style={styles.container}>
      {/* Icon on the left */}
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={iconSource} />
      </View>
      {/* Input field */}
      <TextInput
        {...props}
        placeholder={placeholder}
        style={styles.input}
        secureTextEntry={visiblePassword}
        value={value}
        onChangeText={onChangeText}
      />
      {/* Toggle for secure text entry (e.g., password visibility) */}
      {secureTextEntry && (
        <Pressable onPress={() => setVisiblePassword((prev) => !prev)} style={styles.toggleIcon}>
          {visiblePassword ? (
            <Image style={styles.toggleImage} source={require('../../assets/images/view.png')} />
          ) : (
            <Image style={styles.toggleImage} source={require('../../assets/images/hide.png')} />
          )}
        </Pressable>
      )}
    </View>
  );
};

export default IconTextInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 7,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    marginRight: 10,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#aaa',
  },
  input: {
    fontSize: 22,
    height: 45,
    padding: 0,
    flex: 1,
  },
  toggleIcon: {
    justifyContent: 'center',
    marginLeft: 10,
  },
  toggleImage: {
    width: 20,
    height: 20,
  },
});





// import React, { useState } from 'react';
// import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native';
// const IconTextInput = () => {

//   const [visiblePassword, setVisiblePassword] = useState(true);

//   return (
//     <View style={{
//       borderWidth: 1,
//       borderColor: '#ccc',
//       paddingHorizontal: 15,
//       paddingVertical: 5,
//       borderRadius: 7,
//       flexDirection: 'row',
//       width: '100%',
//     }}>

//       <View style={{ display: 'flex', justifyContent: 'center', marginRight: 10 }}>
//         <Image style={{ width: 20, height: 20, tintColor: '#aaa' }} source={require('../../assets/images/padlock.png')} />
//       </View>
//       <TextInput placeholder="Name" style={{
//         fontSize: 22,
//         height: 45,
//         padding: 0,
//         flex: 1,
//       }}
//         secureTextEntry={visiblePassword}
//       />
//       <Pressable onPress={() => setVisiblePassword((prev) => !prev)} style={{ display: 'flex', justifyContent: 'center', marginLeft: 10 }}>
//         {visiblePassword ? <Image style={{ width: 20, height: 20 }} source={require('../../assets/images/view.png')} /> : <Image style={{ width: 20, height: 20 }} source={require('../../assets/images/hide.png')} />}
//       </Pressable>
//     </View>
//   );
// };
// export default IconTextInput;
// const styles = StyleSheet.create({});
