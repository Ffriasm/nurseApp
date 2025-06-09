import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

interface AuthButtonsProps {
  onRegisterPress: () => void;
  onLoginPress: () => void;
}

const AuthButtons: React.FC<AuthButtonsProps> = ({ onRegisterPress, onLoginPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.registerButton} onPress={onRegisterPress}>
        <Text style={styles.registerText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={onLoginPress}>
        <Text style={styles.loginText}>Iniciar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthButtons;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  registerButton: {
    backgroundColor: '#2E86AB',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  registerText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#000000',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  loginText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});