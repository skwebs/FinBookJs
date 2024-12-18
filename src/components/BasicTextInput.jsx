// import React from 'react';
// import { TextInput, StyleSheet } from 'react-native';

// const BasicTextInput = ({ value, onChangeText, placeholder, keyboardType }) => {
//   return (
//     <TextInput
//       style={styles.input}
//       placeholder={placeholder}
//       value={value}
//       onChangeText={onChangeText}
//       keyboardType={keyboardType}
//     />
//   );
// };

// const styles = StyleSheet.create({
//   input: {
//     width: '100%',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     marginBottom: 15,
//     padding: 5,
//   },
// });

// export default BasicTextInput;

import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';

const BasicTextInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  error,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, error && styles.errorInput]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 5,
  },
  errorInput: {
    borderBottomColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});

export default BasicTextInput;
