import { Text, StyleSheet } from "react-native";

interface Props {
  title: string;
}
export function Title({ title }: Props) {
  return <Text style={styles.title}>{title}</Text>;
}
const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    color: "red",
    marginBottom: 20,
  },
});
