import React from "react";
import {View,Text,Pressable,StyleSheet,  ScrollView} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';


const MenuPizza = ({ name, prices }) => (
  <View style={styles.menuItemContainer}>
    <Text style={styles.pizzaName}>{name}</Text>
    <View style={styles.pricesRow}>
      {prices.map((price, index) => (
        <Text key={index} style={styles.priceText}>
          {price}
        </Text>
      ))}
    </View>
  </View>
);

export default function PizzaScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.mainTitle}>MENÚ PATIPIZZAS</Text>

        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Nuestras Especialidades:</Text>

          <MenuPizza
            name="Pato Especial:"
            prices={["$230 G", "$180 M", "$150 CH"]}
          />
          <View style={styles.divider} />

          <MenuPizza
            name="Patitos Peperoni:"
            prices={["$200 G", "$160 M", "$130 CH"]}
          />
          <View style={styles.divider} />

          <MenuPizza
            name="Patos Hawaianos:"
            prices={["$210 G", "$170 M", "$140 CH"]}
          />
        </View>

        <View style={styles.footer}>
          <Pressable
            style={styles.exitBtn}
            onPress={() => navigation.replace("Login")}
          >
            <Text style={styles.exitText}>EXIT</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 20,
  },
  mainTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#323232",
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "white",
    padding: 24,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginBottom: 20,
  },
  menuItemContainer: {
    marginBottom: 10,
  },
  pizzaName: {
    fontSize: 16,
    fontWeight: "600",
    color: "darkgray",
    marginBottom: 6,
  },
  pricesRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 16,
    color: "darkgray",
  },
  divider: {
    height: 1,
    backgroundColor: "#eee",
    marginVertical: 15,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center", // En tu Compose lo tenías centrado, lo mantuve así
    marginTop: 40,
  },
  exitBtn: {
    backgroundColor: "#e74c3c",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  exitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
});