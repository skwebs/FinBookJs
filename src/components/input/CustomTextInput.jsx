import React, { useState } from 'react';
import { Image, Pressable, StyleSheet, TextInput, View } from 'react-native';

const CustomTextInput = ({
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
      {iconSource && <View style={styles.iconContainer}>
        <Image style={styles.icon} source={iconSource} />
      </View>}

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

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#efefef',
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
    backgroundColor: 'red',
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
