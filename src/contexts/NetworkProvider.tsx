import React, { createContext, useState, useEffect, useContext } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { View, Text } from 'react-native';

const NetworkContext = createContext({ isConnected: true });

export const NetworkProvider = ({ children }: { children: React.ReactNode }) => {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected ?? true);
    });
    return () => unsubscribe();
  }, []);

  return (
    <NetworkContext.Provider value={{ isConnected }}>
      {!isConnected && (
        <View style={{ backgroundColor: 'red', padding: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>No Internet Connection</Text>
        </View>
      )}
      {children}
    </NetworkContext.Provider>
  );
};

export const useNetwork = () => useContext(NetworkContext);
