import React from "react";
import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import Logo from "../components/logo/Logo";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Logo size={400} />
      <ActivityIndicator size="large" color="#2E86AB" />
      <Text style={styles.text}>Cargando...</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    marginTop: 16,
    fontSize: 16,
    color: "#333",
  },
});