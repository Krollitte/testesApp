import { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text, Button } from "react-native";
import { api } from "./services/api";

interface GameProps {
  title: string;
  imageUrl: string;
}

export function Game() {
  const [game, setGame] = useState<GameProps | null>({} as GameProps | null);
  const [errorMessage, setErrorMessage] = useState("");

  async function fetchGame() {
    try {
      const response = await api.get("/next-api/?api=game&id=15");

      setGame({
        title: response.data.title,
        imageUrl: response.data.image_url,
      });
    } catch (error) {
      setErrorMessage("Erro ao buscar dados");
    }
  }

  async function handleFetchGame() {
    try {
      const response = await api.get("/next-api/?api=game&id=2");
      setGame({
        title: response.data.title,
        imageUrl: response.data.image_url,
      });
    } catch (error) {
      setErrorMessage("Erro ao buscar dados");
    }
  }

  useEffect(() => {
    fetchGame();
  }, []);

  return (
    <View style={styles.container}>
      {game && (
        <>
          <Image
            testID="avatar-game"
            source={{ uri: game.imageUrl }}
            style={styles.image}
          />
          <Text>{game.title}</Text>
        </>
      )}
      <Button onPress={handleFetchGame} title="Mudar Game" />
      {errorMessage !== "" && <Text>{errorMessage}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 34,
    gap: 8,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 99,
  },
});
