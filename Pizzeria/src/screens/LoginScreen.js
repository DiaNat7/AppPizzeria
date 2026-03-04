import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";

export default function LoginScreen({ navigation }) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState("");

  const isValid =
    (usuario === "diana" && contrasena === "1234") ||
    (usuario === "meli" && contrasena === "5678") ||
    (usuario === "lesly" && contrasena === "9012") ||
    (usuario === "jair" && contrasena === "3456");

  const onLogin = () => {
    if (isValid) {
      setError("");
      navigation.replace("Menu");
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenidos a Pizzeria Patitos</Text>
        <Text style={styles.subtitle}>LOG IN</Text>

        <TextInput
          placeholder="Usuario"
          value={usuario}
          onChangeText={setUsuario}
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Contraseña"
          value={contrasena}
          onChangeText={setContrasena}
          style={styles.input}
          secureTextEntry
        />

        {!!error && <Text style={styles.error}>{error}</Text>}

        <Pressable style={styles.btn} onPress={onLogin}>
          <Text style={styles.btnText}>Iniciar Sesión</Text>
        </Pressable>

        <Pressable
          style={[styles.btn, styles.exit]}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.btnText}>EXIT</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  content: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 20,
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: 26,
    fontWeight: "700",
    marginVertical: 20,
    color: "#2c3e50",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
    fontSize: 16,
  },
  error: {
    marginTop: 6,
    color: "red",
    fontSize: 14,
  },
  btn: {
    marginTop: 14,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#27ae60",
    width: "100%",
    alignItems: "center",
  },
  exit: {
    backgroundColor: "#e74c3c",
    alignSelf: "flex-end",
    marginTop: 30,
    width: "auto",
  },
  btnText: {
    fontWeight: "700",
    color: "white",
    fontSize: 15,
  },
});
