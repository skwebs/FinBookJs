import { StyleSheet, Text, TextInput, View } from 'react-native'
const FormTextField = ({ label, errors = [], ...rest }) => {
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
          backgroundColor: "#f1f5f9",
          height: 40,
          marginTop: 4,
          borderWidth: 1,
          borderRadius: 4,
          borderColor: "#cbd5e1",
          padding: 10
        }}
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