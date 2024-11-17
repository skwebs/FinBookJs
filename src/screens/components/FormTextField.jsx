import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'
const FormTextField = ({ label, errors = [], ...rest }) => {


  const [focused, setFocused] = useState(false)
  return (
    <View>
      {label &&
        <Text style={{
          color: "#334155",
          fontWeight: 500
        }}>{label}</Text>
      }

      <TextInput
        style={{
          backgroundColor: "#f1f4ff",
          height: 40,
          marginTop: 4,
          borderWidth: 1,
          borderRadius: 8,
          borderColor: focused ? "#2196F3" : "#cbd5e1",
          padding: 10
        }}

        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...rest}
      />
      {errors.map((err) => (
        <Text key={err} style={{ color: 'red', marginTop: 2 }}>{err}</Text>
      ))}
    </View>
  );
}
export default FormTextField
const styles = StyleSheet.create({})