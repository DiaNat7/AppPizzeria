import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function MenuPrincipal({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIMENU</Text>

      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Clientes")}
      >
        <Text style={styles.btnText}>PATICLIENTES</Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Ordenes")}
      >
        <Text style={styles.btnText}>PATIEMPLEADOS</Text>
      </Pressable>

      <Pressable
        style={styles.btn}
        onPress={() => navigation.navigate("Nosotros")}
      >
        <Text style={styles.btnText}>PATINOSOTROS</Text>
      </Pressable>

      <Pressable
        style={[styles.btn, styles.exit]}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.btnText}>EXIT</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "#f8f8f8",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 25,
    color: "#2c3e50",
  },
  btn: {
    width: "100%",
    padding: 14,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 12,
    marginBottom: 14,
    alignItems: "center",
    backgroundColor: "white",
  },
  exit: {
    backgroundColor: "#e74c3c",
    borderColor: "#c0392b",
    marginTop: 20,
  },
  btnText: {
    fontWeight: "700",
    fontSize: 15,
    color: "#2c3e50",
  },
});
