// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, View } from 'react-native';
// const FormTextField2 = ({ label, errors = [], ...rest }) => {

//   const [focused, setFocused] = useState(false);
//   return (
//     <View>
//       {label &&
//         <Text style={[styles.label, focused ? styles.focused : styles.unFocused]}>{label}</Text>
//       }

//       <TextInput
//         style={styles.textInput}

//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         {...rest}
//       />
//       {errors.map((err) => (
//         <Text key={err} style={styles.error}>{err}</Text>
//       ))}
//     </View>
//   );
// };
// export default FormTextField2;
// const styles = StyleSheet.create({
//   textInput: {
//     backgroundColor: '#f1f4ff',
//     height: 40,
//     marginTop: 4,
//     borderWidth: 1,
//     borderRadius: 8,
//     padding: 10,
//   },
//   focused: { borderColor: '#2196F3' },
//   unFocused: { borderColor: '#cbd5e1' },
//   label: {
//     color: '#334155',
//     fontWeight: 500,
//   },
//   error: { color: 'red', marginTop: 2 },
// });

// -------------------------------------------------------------------------------------

// import React, { useState } from 'react';
// import { StyleSheet, Text, TextInput, View } from 'react-native';

// const FormTextField2 = ({ label, errors = [], placeholder, ...rest }) => {
//   const [focused, setFocused] = useState(false);

//   return (
//     <View style={styles.inputContainer}>
//       {label && (
//         <Text
//           style={[
//             styles.label,
//             focused ? styles.focused : styles.unFocused,
//             errors.length ? styles.errorLabel : null, // Apply special style if there are errors
//           ]}
//         >
//           {label}
//         </Text>
//       )}

//       <TextInput
//         style={[styles.textInput, errors.length ? styles.errorInput : null]} // Add error styling if errors exist
//         placeholder={placeholder}
//         onFocus={() => setFocused(true)}
//         onBlur={() => setFocused(false)}
//         {...rest}
//       />

//       {/* Display errors if any */}
//       {errors.length > 0 && (
//         <View style={styles.errorContainer}>
//           {errors.map((err, index) => (
//             <Text key={index} style={styles.errorText}>{err}</Text>
//           ))}
//         </View>
//       )}
//     </View>
//   );
// };

// export default FormTextField;

// const styles = StyleSheet.create({
//   inputContainer: {
//     marginBottom: 16, // Adds space between input fields
//   },
//   label: {
//     color: '#334155',
//     fontWeight: '500',
//     marginBottom: 4, // Space between label and input
//   },
//   focused: {
//     color: '#2196F3',
//     borderColor: '#2196F3',
//   },
//   unFocused: {
//     color: '#cbd5e1',
//   },
//   textInput: {
//     backgroundColor: '#f1f4ff',
//     height: 40,
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//   },
//   errorLabel: {
//     color: 'red', // Changes label color if there's an error
//   },
//   errorInput: {
//     borderColor: 'red', // Adds red border when there's an error
//   },
//   errorContainer: {
//     marginTop: 4, // Space between input and errors
//   },
//   errorText: {
//     color: 'red',
//     fontSize: 12,
//   },
// });

// -------------------------------------------------------------------------------------


import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Use this instead of Expo's icons

const FormTextField2 = ({ label, errors = [], placeholder, ...rest }) => {
  const [focused, setFocused] = useState(false);
  const [text, setText] = useState(''); // local state to manage text input

  // Function to handle clearing the text input
  const handleClear = () => {
    setText('');
    rest.onChangeText && rest.onChangeText(''); // If onChangeText is passed, clear it
  };

  return (
    <View style={styles.inputContainer}>
      {label && (
        <Text
          style={[
            styles.label,
            focused || text ? styles.focusedLabel : styles.unFocusedLabel,
            errors.length ? styles.errorLabel : null,
          ]}
        >
          {label}
        </Text>
      )}

      <View style={styles.inputWrapper}>
        <TextInput
          style={[
            styles.textInput,
            errors.length ? styles.errorInput : null,
            focused ? styles.focusedInput : null,
          ]}
          placeholder={focused ? '' : placeholder} // Hide placeholder when focused
          value={text}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChangeText={(inputText) => {
            setText(inputText);
            rest.onChangeText && rest.onChangeText(inputText); // Pass inputText to onChangeText if passed
          }}
          {...rest}
        />
        {text.length > 0 && (
          <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
            <Icon name="cancel" size={20} color="#8e8e8e" />
          </TouchableOpacity>
        )}
      </View>

      {/* Display error messages */}
      {errors.length > 0 && (
        <View style={styles.errorContainer}>
          {errors.map((err, index) => (
            <Text key={index} style={styles.errorText}>{err}</Text>
          ))}
        </View>
      )}
    </View>
  );
};

export default FormTextField2;

const styles = StyleSheet.create({
  inputContainer: {
    // marginBottom: 16, // Space between input fields
  },
  label: {
    color: '#334155',
    fontWeight: '500',
    // marginBottom: 8, // More space between label and input field
    fontSize: 16, // Adjust label font size
    transition: '0.3s ease', // Smooth transition effect for floating label
  },
  focusedLabel: {
    // fontSize: 12,
    // top: -12, // Moves the label above the input when focused
    // left: 8,
    color: '#2196F3',
  },
  unFocusedLabel: {
    // fontSize: 16,
    color: '#cbd5e1',
  },
  errorLabel: {
    color: 'red', // Color changes if there are errors
  },
  inputWrapper: {
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
  textInput: {
    backgroundColor: '#f1f4ff',
    // height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    borderColor: '#334155',
    fontSize: 16,
  },
  focusedInput: {
    borderColor: '#2196F3', // Blue border on focus
  },
  errorInput: {
    borderColor: 'red', // Red border on error
  },
  clearButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: -10 }],
    padding: 5,
  },
  errorContainer: {
    marginTop: 4, // Space between input and errors
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 2,
  },
});
