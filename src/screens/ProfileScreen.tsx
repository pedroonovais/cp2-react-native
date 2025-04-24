import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { RootStackParamList } from "../navigation/RootNavigation";

type ProfileScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Profile"
>;

export default function ProfileScreen() {
  const navigation = useNavigation<ProfileScreenNavigationProp>();
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Bem-vindo ao seu perfil!</Text>

      <Text style={{ fontSize: 20, color: "white", marginTop: 20, marginBottom: 20 }}>Fica professor!!!</Text>

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
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
});
