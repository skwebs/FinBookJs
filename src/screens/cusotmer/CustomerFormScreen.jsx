import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, View } from 'react-native';
import FormTextField from '../../components/FormTextField';
import { addCustomer, updateCustomer } from '../../services/customerServices';

const CustomerFormScreen = ({ navigation, route }) => {
  const { mode = 'add', initialData = {} } = route.params || {};

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (mode === 'edit' && initialData) {
      setName(initialData.name || '');
      setEmail(initialData.email || '');
      setMobile(initialData.mobile || '');
      setAddress(initialData.address || '');
    }
  }, [mode, initialData]);

  const handleSubmit = async () => {
    setErrors({});
    const formData = { name, mobile, email, address };

    // Basic client-side validation
    if (!name || !mobile) {
      setErrors({
        name: !name ? 'Name is required' : null,
        mobile: !mobile ? 'Mobile number is required' : null,
      });
      return;
    }

    try {
      if (mode === 'add') {
        await addCustomer(formData);
      } else if (mode === 'edit') {
        await updateCustomer(initialData.id, formData);
      }
      navigation.replace('Customer'); // Navigate to customer list
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <FormTextField
          label="Name"
          value={name}
          onChangeText={setName}
          errors={errors.name}
        />
        <FormTextField
          label="Mobile No."
          value={mobile}
          onChangeText={setMobile}
          keyboardType="phone-pad"
          errors={errors.mobile}
        />
        <FormTextField
          label="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          errors={errors.email}
        />
        <FormTextField
          label="Address"
          value={address}
          onChangeText={setAddress}
          errors={errors.address}
        />
        <Button
          title={mode === 'add' ? 'Add Customer' : 'Update Customer'}
          onPress={handleSubmit}
        />
        <Button
          color="#c00"
          title="Go Back"
          onPress={() => navigation.goBack()}
        />
      </View>
    </SafeAreaView>
  );
};

export default CustomerFormScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  form: {
    rowGap: 16,
  },
});
