import React, { useState } from 'react';
import { Alert, Modal, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import TransactionForm from './TransactionForm';

const TransactionFooter = ({ customerId }) => {

  // const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const onPress = (id) => {
    // Test if customerId is passed correctly
    if (id) {
      Alert.alert('Customer ID:', id.toString());
      console.log(id);  // Log the correct prop name
    } else {
      Alert.alert('No customer ID provided');
      console.log('No customer ID provided');
    }
  };

  return (
    <View style={styles.footer}>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <Pressable onPress={() => setModalVisible(false)} style={styles.modalContainer}>
          <TransactionForm />
        </Pressable>
      </Modal>

      <TouchableHighlight style={{ flex: 1 }} onPress={() => setModalVisible(true)}>
        <View style={[styles.buttonBox, { backgroundColor: 'red' }]}>
          <Text style={styles.buttonTxt}>Debit</Text>
        </View>
      </TouchableHighlight>

      <TouchableHighlight style={{ flex: 1 }} onPress={() => setModalVisible(true)}>
        <View style={[styles.buttonBox, { backgroundColor: 'green' }]}>
          <Text style={styles.buttonTxt}>Credit</Text>
        </View>
      </TouchableHighlight>


    </View >
  );
};

export default TransactionFooter;

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
    backgroundColor: 'white',
    elevation: 5,
    borderTopColor: 'rgba(0,0,0,0.1)',
    borderTopWidth: 1,
  },
  buttonBox: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
  },
  buttonTxt: {
    fontWeight: '800',
    color: 'white',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    // backgroundColor: 'white',
  },
});
