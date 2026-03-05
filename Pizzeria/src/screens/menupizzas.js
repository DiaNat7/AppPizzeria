import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet,Alert,ScrollView, Modal} from "react-native";
import { useOrders } from "../context/OrdersContext";

const CustomComboBox = ({ label, options, value, onSelect, placeholder }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.comboContainer}>
      <Text style={styles.label}>{label}</Text>
      <Pressable
        style={styles.input}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: value ? "#1a1a1a" : "#aaa", fontSize: 16 }}>
          {value || placeholder}
        </Text>
      </Pressable>

      <Modal transparent={true} visible={modalVisible} animationType="fade">
        <Pressable style={styles.modalOverlay} onPress={() => setModalVisible(false)}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Selecciona una opción</Text>
            {options.map((opcion, index) => (
              <Pressable  key={index} style={styles.modalOption} onPress={() => { onSelect(opcion); setModalVisible(false); }}>
                <Text style={styles.modalOptionText}>{opcion}</Text>
              </Pressable>
            ))}
            <Pressable style={styles.modalCancel} onPress={() => setModalVisible(false)}>
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

  const opcionesPizzas = ["Pato Especial", "Patitos Peperoni", "Patos Hawaianos"];
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
            text: "OK", onPress: () => {setTipo(""); setTamano(""); setCantidad(""); navigation.navigate("Ordenes");
             },
          },
        ]
      );
    }, 1000);

    addOrder(tipo, tamano, cantidad);
  };

  return (
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
  );
}

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
    padding: 14,
    fontSize: 16,
    backgroundColor: "#fafafa",
  },
  comboContainer: {
    marginBottom: 5,
  },
  // Estilos del Modal (Combobox)
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: "80%",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#2c3e50",
  },
  modalOption: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalOptionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#34495e",
  },
  modalCancel: {
    marginTop: 15,
    paddingVertical: 12,
    backgroundColor: "#e74c3c",
    borderRadius: 10,
  },
  modalCancelText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  // Estilos de Botones
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
});