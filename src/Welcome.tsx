import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export function Welcome({ handleGetUser }: { handleGetUser: () => void }) {
  const [input, setInput] = useState("");
  const [user, setUser] = useState("");

  function handleShowUser() {
    if (input === "") {
      setUser("");
      return;
    }
    let message = "Welcome " + input;
    setUser(message);
    handleGetUser();
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Digite seu nome..."
        value={input}
        onChangeText={setInput}
        style={styles.input}
      />

      <Button title="Login" onPress={handleShowUser} />

      {user !== "" && <Text>{user}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    marginTop: 24,
    gap: 8,
  },
  input: {
    borderWidth: 1,

    padding: 4,
  },
});
