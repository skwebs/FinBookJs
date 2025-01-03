import React, { useContext } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import AuthContext from '../contexts/AuthContext';
import { logout } from '../services/authServices';
import Logo from '../components/Logo';

const HomeScreen = ({ navigation }) => {
  const { user, setUser } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <SafeAreaView style={{ display: 'flex', flex: 1 }}>
      <View style={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Logo />
      </View>
      <View style={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center', fontSize: 24, color: 'gray' }}>Welcome {user.name}</Text>
      </View>
      <View style={{ flex: 1, display: 'flex', flexDirection: 'row' }} />

      <View >
        <View style={{ padding: 50 }}>
          <Button title="Go to Customer List" onPress={() => navigation.navigate('Customer')} />
        </View>
      </View>
      <View >
        <View style={{ padding: 50 }}>
          <Button title="Logout" color='red' onPress={handleLogout} />
        </View>
      </View>

    </SafeAreaView>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({});
