import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useUserRepo } from "../data/contexts/UserRepositoryContext";

const ClientHomeScreen = () => {
  const userRepo = useUserRepo();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, Cliente</Text>
      <Text style={styles.subtitle}>Aquí puedes solicitar atención domiciliaria.</Text>

      <TouchableOpacity style={styles.button}>
        <Text onPress={userRepo.logout} style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ClientHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 32,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#2E86AB",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});