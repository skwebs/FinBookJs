// import React, { useEffect, useState } from 'react';
// import { FlatList, StyleSheet, View } from 'react-native';
// import CusomerListFooter from './component/CusomerListFooter';
// import { allCustomer } from '../../services/customerServices';
// import HorizontalHeaderOption from './component/HorizontalHeaderOption';
// import SplashScreen from '../SplashScreen';
// import CustomerCard from './component/CustomerCard';

// const CustomerListScreen2 = ({ navigation }) => {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchItems = async () => {
//     try {
//       const { data: customer } = await allCustomer();
//       setItems(customer);
//     } catch (error) {
//       console.error('Error fetching items:', error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Fetch items on component mount
//   useEffect(() => {
//     fetchItems();
//   }, []);

//   const handleCustomerPress = (customerId) => {
//     navigation.navigate('Transaction', { customerId });
//   };

//   const renderItem = ({ item }) => (
//     <CustomerCard item={item} onPress={handleCustomerPress} />
//   );

//   if (loading) {
//     return <SplashScreen />;
//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.HorizontalHeaderOptionWrapper}>
//         <HorizontalHeaderOption />
//       </View>
//       <FlatList
//         // refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
//         data={items}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={renderItem}
//       />
//       <CusomerListFooter navigation={navigation} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flex: 1,
//     backgroundColor: '#efefef',
//   },
//   HorizontalHeaderOptionWrapper: {
//     paddingVertical: 10,
//   },

// });

// export default CustomerListScreen2;


import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import CusomerListFooter from './component/CusomerListFooter';
import { allCustomer } from '../../services/customerServices';
import HorizontalHeaderOption from './component/HorizontalHeaderOption';
import SplashScreen from '../SplashScreen';
import CustomerCard from './component/CustomerCard';
import AddCustomer from './component/AddCustomer'; // Import your AddCustomer component

const CustomerListScreen2 = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

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

  // Fetch items on component mount
  useEffect(() => {
    fetchItems();
  }, []);

  const handleCustomerPress = (customerId) => {
    navigation.navigate('Transaction', { customerId });
  };

  const renderItem = ({ item }) => (
    <CustomerCard item={item} onPress={handleCustomerPress} />
  );

  const handleAddCustomer = async (newCustomer) => {
    setModalVisible(false); // Close modal after adding
    // Refresh customer list
    await fetchItems();
  };

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.HorizontalHeaderOptionWrapper}>
        <HorizontalHeaderOption />
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
      <CusomerListFooter navigation={navigation} />
      {/* Add button to open modal */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addButtonText}>+ Add Customer</Text>
      </TouchableOpacity>

      {/* Modal for adding a customer */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <AddCustomer
            onClose={() => setModalVisible(false)}
            onAddCustomer={handleAddCustomer}
          />
        </View>
      </Modal>
    </View>
  );
};

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
});

export default CustomerListScreen2;
