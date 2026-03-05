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
  Modal,
} from "react-native";
import { useOrders } from "../context/OrdersContext";

const CustomComboBox = ({ label, options, value, onSelect, placeholder }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.comboContainer}>
      <Text style={styles.label}>{label}</Text>
      <Pressable style={styles.input} onPress={() => setModalVisible(true)}>
        <Text style={{ color: value ? "#5a3e1b" : "#aaa", fontSize: 16 }}>
          {value || placeholder}
        </Text>
      </Pressable>

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setModalVisible(false)}
        >
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecciona una opción</Text>
            {options.map((opcion, index) => (
              <Pressable
                key={index}
                style={styles.modalOption}
                onPress={() => {
                  onSelect(opcion);
                  setModalVisible(false);
                }}
              >
                <Text style={styles.modalOptionText}>{opcion}</Text>
              </Pressable>
            ))}
            <Pressable
              style={styles.modalCancel}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCancelText}>Cancelar</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default function OrdenarScreen({ navigation }) {
  const [tipo, setTipo] = useState("");
  const [tamano, setTamano] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [cargando, setCargando] = useState(false);

  const { addOrder } = useOrders();

  const opcionesPizzas = [
    "Pato Especial",
    "Patitos Pepperoni",
    "Patos Hawaianos",
  ];
  const opcionesTamanos = ["Chica (CH)", "Mediana (M)", "Grande (G)"];

  const validarCampos = () => {
    if (tipo === "") {
      Alert.alert("Error", "Falta seleccionar el tipo de pizza");
      return false;
    }
    if (tamano === "") {
      Alert.alert("Error", "Falta seleccionar el tamaño");
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
      addOrder(tipo, tamano, cantidad);
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
            },
          },
        ],
      );
    }, 1000);
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
          <CustomComboBox
            label="Tipo de pizza:"
            placeholder="Toca para seleccionar..."
            options={opcionesPizzas}
            value={tipo}
            onSelect={setTipo}
          />
          <CustomComboBox
            label="Tamaño:"
            placeholder="Toca para seleccionar..."
            options={opcionesTamanos}
            value={tamano}
            onSelect={setTamano}
          />
          <Text style={styles.label}>Cantidad:</Text>
          <TextInput
            style={styles.input}
            placeholder="Escribe cuántas (ej. 2)"
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
  background: { flex: 1 },
  container: { padding: 20, paddingTop: 50, flexGrow: 1 },
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
    padding: 14,
    fontSize: 16,
    backgroundColor: "rgba(255,252,220,0.9)",
    color: "#5a3e1b",
  },
  comboContainer: { marginBottom: 5 },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "#fffde7",
    width: "80%",
    borderRadius: 15,
    padding: 20,
    borderWidth: 1.5,
    borderColor: "#e8c84a",
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#5a3e1b",
  },
  modalOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e8c84a",
  },
  modalOptionText: { fontSize: 16, textAlign: "center", color: "#5a3e1b" },
  modalCancel: {
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: "#e8a020",
    borderRadius: 10,
  },
  modalCancelText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  botonesContainer: { gap: 12, marginBottom: 20 },
  btn: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    borderWidth: 1.5,
  },
  btnGuardar: { backgroundColor: "#e8a020", borderColor: "#c47a10" },
  btnLimpiar: {
    backgroundColor: "rgba(255, 240, 150, 0.9)",
    borderColor: "#e8c84a",
  },
  btnTexto: { color: "#5a3e1b", fontWeight: "bold", fontSize: 16 },
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
  exitText: { color: "white", fontWeight: "600" },
});
