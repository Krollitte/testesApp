import { useState } from "react";
import { Button, Text, View } from "react-native";

export function Message() {
  const [showMessage, setShowMessage] = useState(false);
  return (
    <View>
      <Text testID="message">
        {showMessage ? "Bem vindo Rafinha" : "Aguardando"}
      </Text>
      <Button title="Acessar" onPress={() => setShowMessage(!showMessage)} />
    </View>
  );
}
