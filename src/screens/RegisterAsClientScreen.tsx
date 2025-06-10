import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import Icon from "react-native-vector-icons/Feather";
import { db } from "../data/database";
import { UserType } from "../data/interfaces/types";

const RegisterAsClientScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const emailIsValid = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const passwordIsValid = (password: string) =>
    /^(?=.*[A-Z]).{8,}$/.test(password);

  const handleRegister = async () => {
    if (!name.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    if (!emailIsValid(email)) {
      Alert.alert("Error", "Correo electrónico no válido");
      return;
    }

    if (!passwordIsValid(password)) {
      Alert.alert(
        "Error",
        "La contraseña debe tener al menos 8 caracteres y una letra mayúscula"
      );
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert("Error", "Las contraseñas no coinciden");
      return;
    }

    

    try {
    const user = {
      id: "",
      name: `${name} ${lastName}`,
      email,
      type: UserType.Client,
      createdAt: new Date(),
    };

    await db.userRepo.createUser(user, password);

    Alert.alert("Registro exitoso", "Bienvenido a la app");
  } catch (error: any) {
    console.error(error);
    Alert.alert("Error", error.message || "No se pudo registrar");
  }
    
  };

  const passwordsMatch =
    password && confirmPassword && password === confirmPassword;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Usuario</Text>

      <TextInput
        placeholder="Nombre"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Apellido"
        value={lastName}
        onChangeText={setLastName}
        style={styles.input}
      />
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Contraseña"
          value={password}
          onChangeText={setPassword}
          style={styles.passwordInput}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Icon
            name={showPassword ? "eye-off" : "eye"}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          style={styles.passwordInput}
          secureTextEntry={!showConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowConfirmPassword(!showConfirmPassword)}
        >
          <Icon
            name={showConfirmPassword ? "eye-off" : "eye"}
            size={20}
            color="#666"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.validationPlaceholder}>
        {email.length > 0 &&
          (emailIsValid(email) ? (
            <Text style={{ color: "green" }}>✔ Correo electrónico válido</Text>
          ) : (
            <Text style={{ color: "red" }}>✘ Correo electrónico no válido</Text>
          ))}
        {password.length > 0 &&
          (passwordIsValid(password) ? (
            <Text style={{ color: "green" }}>✔ Contraseña válida</Text>
          ) : (
            <Text style={{ color: "red" }}>
              ✘ La contraseña debe tener al menos 8 caracteres y una letra
              mayúscula
            </Text>
          ))}
        {confirmPassword.length > 0 && (
          <Text
            style={{
              color: passwordsMatch ? "green" : "red",
              marginBottom: 10,
            }}
          >
            {passwordsMatch
              ? "✔ Contraseñas coinciden"
              : "✘ Las contraseñas no coinciden"}
          </Text>
        )}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>¿Ya tienes cuenta? Inicia sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterAsClientScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  validationPlaceholder: {
    minHeight: 20,
    marginBottom: 8,
    justifyContent: "center",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#2E86AB",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  link: {
    textAlign: "center",
    marginTop: 16,
    color: "#2E86AB",
  },
});
