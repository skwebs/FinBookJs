import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { allTransaction } from '../../services/transactionServices';
import TransactionItem from './TransactionItem';
import SplashScreen from '../SplashScreen';
import TransactionFooter from './TransactionFooter';


const TransactionListScreen = ({ route }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { customerId } = route.params; // Retrieve the customerId passed from navigation



  // Fetch items on component mount
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data: transactions } = await allTransaction(customerId);
        setItems(transactions);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, [customerId]);


  const renderItem = ({ item }) => (
    <>
      <TransactionItem item={item} />
    </>
  );

  if (loading) {
    return (
      <>
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: 60, height: 60, backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 5 }}>
            <ActivityIndicator size={45} />
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transactions for Customer {customerId}</Text>
      <View style={{ flex: 1 }}>
        <FlatList style={{ flex: 1 }}
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={<Text style={{ flex: 1, textAlign: 'center', color: 'red', fontSize: 20, padding: 10, backgroundColor: 'white', width: '90%', marginHorizontal: 'auto', borderRadius: 10, elevation: 2, margin: 10 }}>No transactions found.</Text>}
        />
      </View>
      <TransactionFooter customerId={customerId} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  transactionItem: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default TransactionListScreen;
