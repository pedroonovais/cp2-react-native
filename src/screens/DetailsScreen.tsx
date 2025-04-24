import { useNavigation, useRoute } from "@react-navigation/native";
import { StyleSheet, Button, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type DetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Details"
>;

export default function DetailsScreen() {
  const navigation = useNavigation<DetailsScreenNavigationProp>();

  return (
    <View style={styles.view}>
      <Text style={styles.text} >Essa é a tela de Detalhes</Text>

      <Button
        color="purple"
        title="Voltar para Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});