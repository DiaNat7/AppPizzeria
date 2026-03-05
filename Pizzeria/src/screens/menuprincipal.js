import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function MenuPrincipal({ navigation }) {
  return (
    <ImageBackground
      source={require("./patito2.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
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
          <Text style={styles.exitText}>EXIT</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 25,
    color: "#5a3e1b",
  },
  btn: {
    width: "100%",
    padding: 14,
    borderWidth: 1.5,
    borderColor: "#e8c84a",
    borderRadius: 12,
    marginBottom: 14,
    alignItems: "center",
    backgroundColor: "rgba(255, 240, 150, 0.82)",
  },
  exit: {
    borderColor: "#a05e08",
    marginTop: 20,
    width: "40%",
    alignSelf: "flex-end",
  },
  btnText: {
    fontWeight: "700",
    fontSize: 15,
    color: "#5a3e1b",
  },
  exitText: {
    fontWeight: "700",
    fontSize: 15,
    color: "white",
  },
});
