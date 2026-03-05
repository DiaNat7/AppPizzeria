import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useOrders } from "../context/OrdersContext";

export default function OrdenarScreen({ navigation }) {
  const [tipo, setTipo] = useState("");
  const [tamano, setTamano] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [cargando, setCargando] = useState(false);

  const { addOrder } = useOrders();

  const validarCampos = () => {
    if (tipo.trim() === "") {
      Alert.alert("Error", "Falta escribir el tipo de pizza");
      return false;
    }
    if (tamano.trim() === "") {
      Alert.alert("Error", "Pon el tamaño");
      return false;
    }
    if (cantidad.trim() === "") {
      Alert.alert("Error", "La cantidad no puede ir vacía");
      return false;
    }
    const cantidadNum = parseInt(cantidad);
    if (isNaN(cantidadNum) || cantidadNum <= 0) {
      Alert.alert("Error", "La cantidad debe ser un número positivo");
      return false;
    }
    return true;
  };

  const guardarOrden = () => {
    if (!validarCampos()) return;
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      Alert.alert(
        "Listo",
        `Orden guardada:\n${cantidad} pizza(s) ${tamano} de ${tipo}`,
        [
          {
            text: "OK",
            onPress: () => {
              setTipo("");
              setTamano("");
              setCantidad("");
              navigation.navigate("Ordenes");
            },
          },
        ],
      );
    }, 1000);
    addOrder(tipo, tamano, cantidad);
  };

  return (
    <ImageBackground
      source={require("./patito2.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>PATIORDEN</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Tipo de pizza:</Text>
          <TextInput
            style={styles.input}
            placeholder="ej. Pepperoni, Hawaiana, Mexicana"
            placeholderTextColor="#a89070"
            value={tipo}
            onChangeText={setTipo}
          />

          <Text style={styles.label}>Tamaño:</Text>
          <TextInput
            style={styles.input}
            placeholder="chica / mediana / grande"
            placeholderTextColor="#a89070"
            value={tamano}
            onChangeText={setTamano}
          />

          <Text style={styles.label}>Cantidad:</Text>
          <TextInput
            style={styles.input}
            placeholder="solo números"
            placeholderTextColor="#a89070"
            value={cantidad}
            onChangeText={(text) => setCantidad(text.replace(/[^0-9]/g, ""))}
            keyboardType="numeric"
          />
        </View>

        <View style={styles.botonesContainer}>
          <Pressable
            style={[styles.btn, styles.btnGuardar]}
            onPress={guardarOrden}
            disabled={cargando}
          >
            <Text style={styles.btnTexto}>
              {cargando ? "GUARDANDO..." : "GUARDAR ORDEN"}
            </Text>
          </Pressable>

          <Pressable
            style={[styles.btn, styles.btnLimpiar]}
            onPress={() => {
              setTipo("");
              setTamano("");
              setCantidad("");
            }}
          >
            <Text style={styles.btnTexto}>LIMPIAR</Text>
          </Pressable>
        </View>

        <Pressable
          style={styles.exit}
          onPress={() => navigation.replace("Login")}
        >
          <Text style={styles.exitText}>SALIR</Text>
        </Pressable>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    padding: 20,
    paddingTop: 50,
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#5a3e1b",
  },
  card: {
    backgroundColor: "rgba(255, 240, 150, 0.82)",
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
    borderWidth: 1.5,
    borderColor: "#e8c84a",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 10,
    color: "#5a3e1b",
    fontWeight: "600",
  },
  input: {
    borderWidth: 1.5,
    borderColor: "#e8c84a",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: "rgba(255,252,220,0.9)",
    color: "#5a3e1b",
  },
  botonesContainer: {
    gap: 12,
    marginBottom: 20,
  },
  btn: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1.5,
  },
  btnGuardar: {
    backgroundColor: "#e8a020",
    borderColor: "#c47a10",
  },
  btnLimpiar: {
    backgroundColor: "rgba(255, 240, 150, 0.9)",
    borderColor: "#e8c84a",
  },
  btnTexto: {
    color: "#5a3e1b",
    fontWeight: "bold",
    fontSize: 16,
  },
  exit: {
    marginTop: 30,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#c47a10",
    alignSelf: "flex-end",
    width: "40%",
    marginBottom: 30,
  },
  exitText: {
    color: "white",
    fontWeight: "600",
  },
});
