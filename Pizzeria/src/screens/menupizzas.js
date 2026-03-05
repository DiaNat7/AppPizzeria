import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
  StyleSheet,
  ImageBackground,
} from "react-native";

const pizzas = [
  {
    nombre: "Especial",
    descripcion:
      "Nuestra pizza estrella con ingredientes especiales de la casa",
    precios: { Chica: "$100", Mediana: "$150", Grande: "$200" },
  },
  {
    nombre: "Pepperoni",
    descripcion: "Clásica y deliciosa, cargada de pepperoni y queso derretido",
    precios: { Chica: "$100", Mediana: "$150", Grande: "$200" },
  },
  {
    nombre: "PatiHawaianos",
    descripcion:
      "El toque dulce del piñón con jamón y queso sobre salsa de tomate",
    precios: { Chica: "$100", Mediana: "$150", Grande: "$200" },
  },
];

export default function MenuPizza({ navigation }) {
  return (
    <ImageBackground
      source={require("./patito2.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>PATIMENU </Text>
        <Text style={styles.subtitle}>¡Elige tu pizza favorita!</Text>

        {pizzas.map((pizza, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.pizzaNombre}>{pizza.nombre}</Text>
            <Text style={styles.pizzaDesc}>{pizza.descripcion}</Text>

            <View style={styles.preciosRow}>
              {Object.entries(pizza.precios).map(([tamano, precio]) => (
                <View key={tamano} style={styles.precioBox}>
                  <Text style={styles.tamanoText}>{tamano}</Text>
                  <Text style={styles.precioText}>{precio}</Text>
                </View>
              ))}
            </View>
          </View>
        ))}

        <View style={styles.nota}>
          <Text style={styles.notaText}>
            Todos nuestros productos son frescos y hechos con amor
          </Text>
        </View>

        <Pressable style={styles.exit} onPress={() => navigation.goBack()}>
          <Text style={styles.exitText}>← Volver</Text>
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
    paddingTop: 60,
    flexGrow: 1,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    color: "#5a3e1b",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#7a5c30",
    marginBottom: 30,
    fontWeight: "500",
  },
  card: {
    backgroundColor: "rgba(255, 240, 150, 0.82)",
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    borderWidth: 1.5,
    borderColor: "#e8c84a",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  pizzaNombre: {
    fontSize: 18,
    fontWeight: "800",
    color: "#5a3e1b",
    marginBottom: 6,
  },
  pizzaDesc: {
    fontSize: 13,
    color: "#7a5c30",
    marginBottom: 14,
    lineHeight: 18,
  },
  preciosRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 8,
  },
  precioBox: {
    flex: 1,
    backgroundColor: "rgba(255,252,220,0.9)",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#e8c84a",
    paddingVertical: 8,
    alignItems: "center",
  },
  tamanoText: {
    fontSize: 12,
    color: "#7a5c30",
    fontWeight: "600",
    marginBottom: 2,
  },
  precioText: {
    fontSize: 16,
    fontWeight: "800",
    color: "#c47a10",
  },
  nota: {
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: "rgba(255, 240, 150, 0.82)",
    borderRadius: 12,
    padding: 14,
    borderWidth: 1.5,
    borderColor: "#e8c84a",
  },
  notaText: {
    textAlign: "center",
    color: "#5a3e1b",
    fontSize: 13,
    fontWeight: "500",
  },
  exit: {
    backgroundColor: "#c47a10",
    padding: 14,
    borderRadius: 12,
    alignItems: "center",
    width: "50%",
    alignSelf: "center",
  },
  exitText: {
    color: "white",
    fontWeight: "700",
    fontSize: 15,
  },
});
