import { NavigationContainer } from '@react-navigation/native';
import useAuthStore from './src/stores/authStore';
import { loadUser } from './src/services/authServices';
import React, { useEffect, useState } from 'react';
import SplashScreen from './src/screens/SplashScreen';
import AppStack from './src/navigation/AppStack';
import AuthStack from './src/navigation/AuthStack';
import InternetStatus from './src/components/InternetStatus';

const App = () => {
  const { user, setUser } = useAuthStore(); // Access Zustand store
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    async function runEffect() {
      try {
        const userDetails = await loadUser();
        setUser(userDetails); // Set user in Zustand store
      } catch (error) {
        console.log('Failed to load user', error);
      }
      setStatus('idle');
    }
    runEffect();
  }, [setUser]);

  if (status === 'loading') {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <InternetStatus />
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App;
