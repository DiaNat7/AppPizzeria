import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  ImageBackground,
  BackHandler,
} from "react-native";

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
    <ImageBackground
      source={require("./patito1.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.content}>
        <Text style={styles.title}>Bienvenidos a Pizzeria Patitos</Text>
        <Text style={styles.subtitle}>LOG IN</Text>

        <TextInput
          placeholder="Usuario"
          placeholderTextColor="#a0845c"
          value={usuario}
          onChangeText={setUsuario}
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Contraseña"
          placeholderTextColor="#a0845c"
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
          onPress={() => BackHandler.exitApp()}
        >
          <Text style={styles.btnText}>EXIT</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: "#3b1f0a",
  },
  subtitle: {
    fontSize: 26,
    fontWeight: "700",
    marginVertical: 20,
    color: "#3b1f0a",
  },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1.5,
    borderColor: "#c8a96e",
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "rgba(255,245,220,0.85)",
    fontSize: 16,
    color: "#3b1f0a",
  },
  error: {
    marginTop: 6,
    color: "#7a1a1a",
    fontSize: 14,
    fontWeight: "600",
  },
  btn: {
    marginTop: 14,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#a0845c",
    backgroundColor: "#c8860a",
    width: "100%",
    alignItems: "center",
  },
  exit: {
    backgroundColor: "#7a3b0a",
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
