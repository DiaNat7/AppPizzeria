import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function ClientesScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./patito2.jpg")}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.spacerTop} />
      <Text style={styles.title}>BIENVENID@S</Text>
      <Text style={styles.title}>PATICLIENTES</Text>
      <View style={styles.spacerMid} />
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("MenuPizz")}
      >
        <Text style={styles.btnText}>MENÚ</Text>
      </Pressable>
      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Ordenar")}
      >
        <Text style={styles.btnText}>ORDEN</Text>
      </Pressable>
      <View style={styles.spacerBottom} />
      <Pressable
        style={[styles.btn, styles.exit]}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.exitText}>EXIT</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    alignItems: "center",
  },
  spacerTop: {
    height: 100,
  },
  spacerMid: {
    height: 150,
  },
  spacerBottom: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#5a3e1b",
    textAlign: "center",
    marginBottom: 20,
    width: "100%",
  },
  btn: {
    width: "100%",
    padding: 14,
    borderWidth: 1.5,
    borderColor: "#e8c84a",
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
    backgroundColor: "rgba(255, 240, 150, 0.75)",
  },
  btnText: {
    fontWeight: "700",
    fontSize: 15,
    color: "#5a3e1b",
  },
  exit: {
    backgroundColor: "#e8a020",
    borderColor: "#c47a10",
    marginBottom: 80,
    width: "40%",
    alignSelf: "flex-end",
  },
  exitText: {
    fontWeight: "700",
    fontSize: 15,
    color: "white",
  },
});
