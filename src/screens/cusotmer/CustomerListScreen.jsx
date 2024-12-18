import React, { useEffect, useState } from 'react';
import { addCustomer, allCustomer, updateCustomer } from '../../services/customerServices';
import CustomerCard from './component/CustomerCard';
import { FlatList, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CustomerForm from './component/CustomerForm';
import FullPageLoader from '../../components/FullPageLoader';


export default function ({ navigation }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null); // Track editing

  const fetchItems = async () => {
    try {
      const { data: customer } = await allCustomer();
      setItems(customer);
    } catch (error) {
      console.error('Error fetching items:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddCustomer = async (newCustomer) => {
    await addCustomer(newCustomer);
    setModalVisible(false);
    fetchItems();
  };

  const handleUpdateCustomer = async (updatedCustomer) => {
    await updateCustomer(selectedCustomer.id, updatedCustomer);
    setModalVisible(false);
    setSelectedCustomer(null);
    fetchItems();
  };

  const handleEditPress = (customer) => {
    setSelectedCustomer(customer);
    setModalVisible(true);
  };

  const renderItem = ({ item }) => (
    <CustomerCard
      item={item}
      onPress={() => navigation.navigate('Transaction', { customerId: item.id })}
      onLongPress={() => handleEditPress(item)}
    />
  );

  if (loading) {
    return <FullPageLoader />;
  }


  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyListMessage}>No customers found.</Text>}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => {
          setSelectedCustomer(null);
          setModalVisible(true);
        }}
      >
        <Text style={styles.addButtonText}>+ Add Customer</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <CustomerForm
            initialValues={selectedCustomer}
            onClose={() => setModalVisible(false)}
            onSubmit={selectedCustomer ? handleUpdateCustomer : handleAddCustomer}
            submitText={selectedCustomer ? 'Update' : 'Save'}
            setLoading={setLoading}
          />
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#efefef',
  },
  HorizontalHeaderOptionWrapper: {
    paddingVertical: 10,
  },
  addButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    margin: 10,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  emptyListMessage: {
    flex: 1,
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    padding: 10,
    backgroundColor: 'white',
    width: '90%',
    marginHorizontal: 'auto',
    borderRadius: 10,
    elevation: 2,
    margin: 10,
  },
});
