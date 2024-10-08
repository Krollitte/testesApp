import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Title } from "./src/Title";

import { Game } from "./src/Game";
import { Welcome } from "./src/Welcome";

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
      <Title title="Rafinha" />
      <Text style={styles.title}>App Contador</Text>
      <View style={styles.counterArea}>
        <TouchableOpacity
          onPress={() => {
            setCounter(counter - 1);
          }}
        >
          <Text>-</Text>
        </TouchableOpacity>
        <Text testID="counter">{counter}</Text>
        <TouchableOpacity
          onPress={() => {
            setCounter(counter + 1);
          }}
        >
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Welcome handleGetUser={() => console.log("clicou")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginTop: 14,
    color: "#000",
  },

  counterArea: {
    flexDirection: "row",
    gap: 14,
    marginTop: 14,
    marginBottom: 14,
  },
});
