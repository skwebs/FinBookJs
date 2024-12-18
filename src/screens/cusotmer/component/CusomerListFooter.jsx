import React from 'react';
import { Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native';


const CusomerListFooter = ({ navigation }) => {

  const onPressHandler = () => {
    navigation.navigate('AddCustomer');
  };

  return (
    <View style={styles.footer}>
      {/* <TouchableHighlight style={{ flex: 1 }} onPress={onPressHandler}>
        <View style={[styles.buttonBox, { backgroundColor: 'red' }]}>
          <Text style={styles.buttonTxt}>Add new Customer</Text>
        </View>
      </TouchableHighlight> */}

      <View style={{ display: 'flex', width: '100%' }}>
        <Button onPress={() => onPressHandler()} title="Add New Customer" color="#c00" />
      </View>
    </View>
  );
};
export default CusomerListFooter;


const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 10,
    paddingBottom: 15,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    // gap: 15,
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
});
