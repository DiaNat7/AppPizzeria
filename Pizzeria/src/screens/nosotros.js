import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NosotrosScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("./patito2.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={styles.mainTitle}>PIZZERIA 'PATITOS'</Text>

          <View style={styles.card}>
            <Text style={styles.subtitle}>PATIHISTORIA</Text>
            <Text style={styles.bodyText}>
              'Patitos' nació gracias a un grupo de amigas que decidieron
              convertir su gusto por la pizza en un proyecto propio, el nombre
              refleja nuestro lado divertido y cercano, tal como queremos que
              sea cada visita.
            </Text>

            <Text style={styles.subtitle}>PATIMISIÓN</Text>
            <Text style={styles.bodyText}>
              Ofrecer pizzas de calidad con un servicio cercano y amigable.
            </Text>

            <Text style={styles.subtitle}>PATIVISIÓN</Text>
            <Text style={styles.bodyText}>
              Ser la pizzeria de confianza y preferida en la ciudad, reconocida
              por su sabor y el trato cálido de siempre.
            </Text>

            <Text style={styles.subtitle}>PATIVALORES</Text>
            <Text style={styles.bodyText}>
              • Calidad{"\n"}• Responsabilidad{"\n"}• Compromiso{"\n"}•
              Amabilidad{"\n"}• Cercanía
            </Text>
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
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
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
    color: "#5a3e1b",
    textAlign: "center",
    marginBottom: 30,
  },
  card: {
    backgroundColor: "rgba(255, 240, 150, 0.82)",
    padding: 20,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: "#e8c84a",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    alignItems: "center",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "800",
    color: "#5a3e1b",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  bodyText: {
    fontSize: 13,
    color: "#3b2a10",
    textAlign: "center",
    lineHeight: 20,
  },
  footer: {
    flex: 1,
    justifyContent: "flex-end",
    marginTop: 30,
  },
  exitBtn: {
    backgroundColor: "#c47a10",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 12,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  exitText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
