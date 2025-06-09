import react from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { AppContextProvider } from './src/context/AppContextProvider';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContextProvider>
        <AppNavigator />
      </AppContextProvider>
    </SafeAreaProvider>
  );
}