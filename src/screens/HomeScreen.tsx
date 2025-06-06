import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../components/header/Header";
import Carousel from "../components/carousel/carousel";

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

type Props = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Header
          showLoginButton
          onLoginPress={() => navigation.navigate("Login")}
        />
      </View>
      <View style={styles.bodyContainer}>
        <View  style={styles.carouselContainer}>
          <Carousel />
        </View>
        <Text style={styles.title}>Bienvenido a Enfermería a Domicilio</Text>
        <Button
          title="Ir a Login"
          onPress={() => navigation.navigate("Login")}
          color="#3182CE"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,
    backgroundColor: "#f0f9ff",
  },
  headerContainer: {
    width: "100%",
    backgroundColor: "#f0f9ff",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
  },
  bodyContainer:{
    flex: 1,
    
    alignItems: "center",
    backgroundColor: "#f0f9ff",
  },
  carouselContainer:{
    width: "100%",
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#3182CE",
    textAlign: "center",
  },
});

export default HomeScreen;
