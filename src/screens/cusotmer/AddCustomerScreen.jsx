import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import FormTextField from '../../components/FormTextField';
import React, { useState } from 'react';
import { addCustomer } from '../../services/customerServices';

const AddCustomerScreen = ({ navigation }) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  const handleAddCustomer = async () => {
    setErrors({});
    const regData = {
      name,
      mobile,
      email,
      address,
    };

    console.log(regData);

    try {
      await addCustomer(regData);
      navigation.replace('Customer');

    } catch (err) {
      if (err.response?.status === 422) {
        console.warn(err.response.data.errors);
        setErrors(err.response.data.errors);
      }
    }
  };

  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>

      <View style={{ padding: 20, rowGap: 16 }}>
        {/* <View>
          <Text style={{ fontWeight: 600, fontSize: 24, color: '#626262' }}>Create an account</Text>
        </View> */}
        <FormTextField
          label="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          errors={errors.name}
        />


        <FormTextField
          label="Mobile No."
          value={mobile}
          onChangeText={(text) => setMobile(text)}
          errors={errors.mobile}
        />

        <FormTextField
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          keyboardType="email-address"
          errors={errors.email}
        />

        <FormTextField
          label="Address"
          value={address}
          onChangeText={(text) => setAddress(text)}
          errors={errors.address}
        />
        <Button title="Add Customer" onPress={handleAddCustomer} />
        <Button color="#c00" title="Go Back" onPress={() => {
          navigation.goBack();
        }} />
      </View>
    </SafeAreaView>
  );
};
export default AddCustomerScreen;
const styles = StyleSheet.create({});
