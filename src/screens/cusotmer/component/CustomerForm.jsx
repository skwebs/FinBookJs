import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import BasicTextInput from '../../../components/BasicTextInput';

const CustomerForm = ({ initialValues, onClose, onSubmit, setLoading, submitText = 'Save' }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (initialValues) {
      setName(initialValues.name || '');
      setEmail(initialValues.email || '');
      setMobile(initialValues.mobile || '');
      setAddress(initialValues.address || '');
    }
  }, [initialValues]);

  const handleSubmit = async () => {
    setErrors({});
    const customerData = { name, mobile, email, address };
    setLoading(true);
    try {
      await onSubmit(customerData); // Parent handles submission
    } catch (err) {
      if (err.response?.status === 422) {
        setErrors(err.response.data.errors);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {initialValues ? 'Edit Customer' : 'Add New Customer'}
      </Text>
      <BasicTextInput
        placeholder="Customer Name"
        value={name}
        onChangeText={setName}
        error={errors.name}
      />
      <BasicTextInput
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
        error={errors.mobile}
      />
      <BasicTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        error={errors.email}
      />
      <BasicTextInput
        placeholder="Address"
        value={address}
        onChangeText={setAddress}
        keyboardType="default"
        error={errors.address}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{submitText}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.cancel]} onPress={onClose}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: '#007BFF',
    borderRadius: 5,
    alignItems: 'center',
  },
  cancel: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
  },
});

export default CustomerForm;
