import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface HeaderProps {
  showLoginButton?: boolean;
  onLoginPress?: () => void;
}

const Header: React.FC<HeaderProps> = ({ showLoginButton = true, onLoginPress }) => {
  return (
    <View style={styles.container}>
      {showLoginButton && (
        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.title}>Iniciar Sesión</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;


const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: '#f0f9ff',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  button: {
    padding: 10,
    backgroundColor: '#000000',
    borderRadius: 5,
    marginBottom: 10,
  },
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
  },
});