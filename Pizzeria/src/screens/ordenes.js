import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useOrders } from "../context/OrdersContext";

export default function OrdenesScreen({ navigation }) {
  const { orders, clearOrders } = useOrders();

  const renderOrden = ({ item, index }) => (
    <View style={styles.card}>
      <Text style={styles.cardNum}>Orden #{index + 1}</Text>
      <View style={styles.cardRow}>
        <Text style={styles.label}>Tipo:</Text>
        <Text style={styles.value}>{item.tipo}</Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.label}>Tamaño:</Text>
        <Text style={styles.value}>{item.tamano}</Text>
      </View>
      <View style={styles.cardRow}>
        <Text style={styles.label}>Cantidad:</Text>
        <Text style={styles.value}>{item.cantidad}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground
      source={require("./patito2.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.screen}>
        <Text style={styles.title}>Órdenes del día</Text>
        <Text style={styles.subtitle}>
          {orders.length === 0
            ? "Sin órdenes por ahora"
            : `${orders.length} orden(es) registrada(s)`}
        </Text>

        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrden}
          ListEmptyComponent={
            <View style={styles.empty}>
              <Text style={styles.emptyText}>No hay pedidos todavía</Text>
            </View>
          }
          contentContainerStyle={{ paddingBottom: 20 }}
        />

        <View style={styles.footer}>
          <TouchableOpacity
            style={[styles.btn, styles.btnSecondary]}
            onPress={() => navigation.navigate("Menu")}
          >
            <Text style={styles.btnText}>← Volver</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btn, styles.btnDanger]}
            onPress={clearOrders}
          >
            <Text style={[styles.btnText, { color: "white" }]}>
              Limpiar todo
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  screen: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
    color: "#5a3e1b",
  },
  subtitle: {
    fontSize: 14,
    color: "#7a5c30",
    marginBottom: 20,
    fontWeight: "500",
  },
  card: {
    backgroundColor: "rgba(255, 240, 150, 0.82)",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1.5,
    borderColor: "#e8c84a",
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardNum: {
    fontSize: 13,
    fontWeight: "600",
    color: "#c47a10",
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  label: {
    color: "#7a5c30",
    fontSize: 14,
  },
  value: {
    fontWeight: "600",
    fontSize: 14,
    color: "#5a3e1b",
  },
  empty: {
    alignItems: "center",
    marginTop: 60,
  },
  emptyText: {
    fontSize: 16,
    color: "#7a5c30",
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    gap: 10,
    paddingVertical: 16,
  },
  btn: {
    flex: 1,
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1.5,
  },
  btnSecondary: {
    backgroundColor: "rgba(255, 240, 150, 0.82)",
    borderColor: "#e8c84a",
  },
  btnDanger: {
    backgroundColor: "#c47a10",
    borderColor: "#a05e08",
  },
  btnText: {
    fontWeight: "600",
    color: "#5a3e1b",
    fontSize: 14,
  },
});
