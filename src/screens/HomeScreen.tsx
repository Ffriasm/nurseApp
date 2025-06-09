import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";
import Carousel from "../components/carousel/carousel";
import AuthButtons from "../components/authButtons/AuthButtons";
import Logo from "../components/logo/Logo";

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Logo size={200} />

        <Text style={styles.title}>Enfermería a Domicilio</Text>
        <Text style={styles.subtitle}>
          Profesionales de salud confiables en la puerta de tu casa.
        </Text>

        <View style={styles.carouselContainer}>
          <Carousel />
        </View>

        <AuthButtons
          onRegisterPress={() => navigation.navigate("ChooseUserTypeScreen")}
          onLoginPress={() => navigation.navigate("Login")}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scroll: {
    flexGrow: 1,
    backgroundColor: "#f0f9ff",
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#2E86AB",
    marginTop: 16,
    marginBottom: 8,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  carouselContainer: {
    width: "100%",
    height: 300,
    marginBottom: 10,
  },
});