import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabsNavigator from "./BottomTabsNavigator";
import DetailsScreen from "../screens/DetailsScreen";
import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamList = {
    Root: undefined;
    Details: undefined;
    Profile: undefined;
    Home: undefined;
  };

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Root"
                    component={BottomTabsNavigator}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Profile" component={ProfileScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}