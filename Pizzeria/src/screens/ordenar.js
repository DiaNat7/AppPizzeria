import React, { useState } from "react";
import {View, Text, TextInput, Pressable, StyleSheet, Alert, ScrollView} from "react-native";
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
    if (!validarCampos()) {
      return;
    }

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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>PATIORDEN</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Tipo de pizza:</Text>
        <TextInput
          style={styles.input}
          placeholder="ej. Pepperoni, Hawaiana, Mexicana"
          value={tipo}
          onChangeText={setTipo}
        />

        <Text style={styles.label}>Tamaño:</Text>
        <TextInput
          style={styles.input}
          placeholder="chica / mediana / grande"
          value={tamano}
          onChangeText={setTamano}
        />

        <Text style={styles.label}>Cantidad:</Text>
        <TextInput
          style={styles.input}
          placeholder="solo números"
          value={cantidad}
          onChangeText={(text) => {
            const soloNumeros = text.replace(/[^0-9]/g, "");
            setCantidad(soloNumeros);
          }}
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
          <Text>LIMPIAR</Text>
        </Pressable>
      </View>

      <Pressable
        style={styles.exit}
        onPress={() => navigation.replace("Login")}
      >
        <Text style={styles.exitText}>SALIR</Text>
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: "#f8f8f8",
    flexGrow: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center",
    color: "#2c3e50",
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    marginBottom: 25,
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
    color: "#34495e",
    fontWeight: "500",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  botonesContainer: {
    gap: 12,
    marginBottom: 20,
  },
  btn: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  btnGuardar: {
    backgroundColor: "#27ae60",
    borderColor: "#229954",
  },
  btnLimpiar: {
    backgroundColor: "#f39c12",
    borderColor: "#e67e22",
  },
  btnTexto: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  exit: {
    marginTop: 30,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#e74c3c",
  },
  exitText: {
    color: "white",
    fontWeight: "600",
  },
  note: {
    marginTop: 20,
    color: "#95a5a6",
    fontSize: 12,
    textAlign: "center",
    fontStyle: "italic",
  },
});
