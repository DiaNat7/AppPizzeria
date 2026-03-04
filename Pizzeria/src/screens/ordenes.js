import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { useOrders } from "../context/OrdersContext";

export default function ordenes({ navigation }) {
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
          <Text style={[styles.btnText, { color: "white" }]}>Limpiar todo</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
    color: "#1a1a1a",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  cardNum: {
    fontSize: 13,
    fontWeight: "600",
    color: "#aaa",
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  label: {
    color: "#555",
    fontSize: 14,
  },
  value: {
    fontWeight: "600",
    fontSize: 14,
    color: "#1a1a1a",
  },
  empty: {
    alignItems: "center",
    marginTop: 60,
  },
  emptyText: {
    fontSize: 16,
    color: "#aaa",
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
  },
  btnSecondary: {
    backgroundColor: "#e0e0e0",
  },
  btnDanger: {
    backgroundColor: "#ff4d4d",
  },
  btnText: {
    fontWeight: "600",
    color: "#1a1a1a",
    fontSize: 14,
  },
});
