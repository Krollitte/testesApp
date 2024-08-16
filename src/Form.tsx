import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");

  function handleLogin(email: string, password: string) {
    if (email === "teste@teste.com" && password === "123123") {
      setUser("Login autorizado");
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="digite seu email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="digite sua senha"
        value={password}
        onChangeText={setPassword}
        style={styles.input}
      />

      <Button title="Login" onPress={() => handleLogin(email, password)} />
      {user !== "" && <Text>{user}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    width: "90%",
    gap: 8,
  },

  input: {
    borderWidth: 1,
    padding: 4,
  },
});
