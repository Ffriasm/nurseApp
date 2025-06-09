import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from "../navigation/AppNavigator";

const ChooseUserTypeScreen: React.FC = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué tipo de cuenta quieres crear?</Text>
      
      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('RegisterAsClient')}
      >
        <Text style={styles.buttonText}>Soy Cliente</Text>
        <Text style={styles.description}>Quiero solicitar servicios de enfermería a domicilio</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.optionButton}
        onPress={() => navigation.navigate('RegisterAsNurse')}
      >
        <Text style={styles.buttonText}>Soy Enfermer@ o TENS</Text>
        <Text style={styles.description}>Quiero ofrecer servicios como profesional registrado</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChooseUserTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 32,
    textAlign: 'center',
  },
  optionButton: {
    backgroundColor: '#f1f9ff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
    color: '#2E86AB',
  },
  description: {
    fontSize: 14,
    color: '#444',
  },
});