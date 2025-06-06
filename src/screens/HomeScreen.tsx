import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
};


const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a Enfermería a Domicilio</Text>
      <Button
        title="Ir a Login"
        onPress={() => navigation.navigate('Login')}
        color="#3182CE"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f9ff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#3182CE',
    textAlign: 'center'
  }
});

export default HomeScreen;