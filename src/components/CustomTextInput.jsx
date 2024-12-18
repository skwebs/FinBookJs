import React from 'react';
import { View, TextInput, StyleSheet, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

const CustomTextInput = ({ iconName, placeholder, value, onChangeText, secureTextEntry, style }) => {
  return (
    <View style={[styles.container, style]}>
      {/* <Icon name={iconName} size={24} color="#555" style={styles.icon} /> */}
      <Image style={style.icon} source={require('../assets/images/mail.png')} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 8,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default CustomTextInput;
