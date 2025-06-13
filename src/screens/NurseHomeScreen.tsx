import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const NurseHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido, Profesional</Text>
      <Text style={styles.subtitle}>Aquí puedes ver las solicitudes activas.</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Ver Servicios Disponibles</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NurseHomeScreen;

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
    backgroundColor: "#28A745",
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