import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StyleSheet, Button, Image, Text, View } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigation";

type HomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Root"
>;

export default function HomeScreen() {
    const navigation = useNavigation<HomeScreenNavigationProp>();
    return (
        <View style={styles.view}>
          <Text style={styles.text} >Cantora do mês: Dua Lipa</Text>
          <Image 
            source={{ uri: "https://cdn.massa.com.br/uploads/2025/04/20250401192204-dua-lipa-brasil.jpg" }} 
            style={{ height: 250, width: 250 }}
          />

          <View style={{ marginTop: 20, gap: 10, flexDirection: "row" }}>
            {/* Botao para navegar para o perfil */}
            <Button
              color="purple"
              title="Ir para Perfil"
              onPress={() => navigation.navigate("Profile")}
            />
            <Button
              color="purple"
              title="Ir para Detalhes"
              onPress={() => navigation.navigate("Details")}
            />

            
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "white",
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});