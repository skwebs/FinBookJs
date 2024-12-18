import React from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

const TransactionItem = ({ item }) => {
  const isDebit = item.type === 'debit'; // for conditional styling

  const onPress = () => {
    console.log('short', item.id);
  };
  const onLongPress = () => {
    console.log('long', item.id);
    Alert.alert('On Long Press');
  };


  return (
    <Pressable onPress={onPress} onLongPress={onLongPress}>
      {({ pressed }) => (
        <View style={[styles.transactionCardContainer, pressed && styles.pressedBg]}>
          <View>
            <View style={styles.contentWrapper}>
              <Text style={styles.datetime}>{item.datetime}</Text>
              <Text style={[styles.amount, isDebit ? styles.debitAmount : styles.creditAmount]}>
                {item.amount}
              </Text>
              <Text style={styles.balance}>99,99,999</Text>
              <Text style={styles.txnType}>Dr</Text>
            </View>
            <View style={styles.particularContainer}>
              <Text style={styles.particular}>{item.particulars}</Text>
            </View>
          </View>
        </View>
      )}
    </Pressable>
  );
};

export default TransactionItem;

const styles = StyleSheet.create({
  transactionCardContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 5,
    // iOS Shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    // Android Shadow
    elevation: 3,
    backgroundColor: '#fff',
  },
  pressedBg: {
    backgroundColor: '#f6f6f6',
  },
  contentWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datetime: {
    flex: 9,
  },
  amount: {
    flex: 5,
    textAlign: 'right',
    fontWeight: '500',
  },
  debitAmount: {
    color: 'green',
  },
  creditAmount: {
    color: 'red',
  },
  balance: {
    flex: 5,
    textAlign: 'right',
    fontWeight: '500',
  },
  txnType: {
    flex: 1,
    textAlign: 'center',
    fontWeight: '500',
    color: 'red',
  },
  particularContainer: {
    marginTop: 5,
  },
  particular: {
    color: '#aaa',
    fontSize: 10,
  },
});
