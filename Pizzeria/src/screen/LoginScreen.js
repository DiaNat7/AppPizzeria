import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

export default function LoginScreen(navigation) {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [Password, setPassword] = useState(false);

  const isValid =
    (usuario === "diana" && Password === "1234") ||
    (usuario === "meli" && Password === "5678") ||
    (usuario === "lesly" && Password === "9012") ||
    (usuario === "jair" && Password === "3456");

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
        <Text style={styles.title}>Bienvenidos a pizzeria patitos</Text>
        <Text style={styles.subtitle}>LOG IN</Text>
        <TextInput
          placeholder="usuario"
          value={usuario}
          onChangeText={setUsuario}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {!!error && <Text style={styles.error}>{error}</Text>}

        <Pressable style={styles.btn} onPress={onLogin}>
          <Text style={styles.btnText}>Iniciar Sesión</Text>
        </Pressable>

        <Pressable style={[styles.btn, styles.exit]} onPress={() => {}}>
          <Text style={styles.btnText}>EXIT</Text>
        </Pressable>
      </View>
    </View>
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
  },
  subtitle: { fontSize: 26, marginVertical: 20 },
  input: {
    width: "100%",
    padding: 12,
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  error: { marginTop: 6, color: "red" },
  btn: {
    marginTop: 14,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    borderWidth: 1,
  },
  exit: { alignSelf: "flex-end", marginTop: 30 },
  btnText: { fontWeight: "700" },
});
