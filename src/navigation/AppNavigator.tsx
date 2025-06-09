import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterAsClientScreen from "../screens/RegisterAsClientScreen";
import RegisterAsNurseScreen from "../screens/RegisterAsNurseScreen";
import ChooseUserTypeScreen from "../screens/ChooseUserTypeScreen";

const Stack = createStackNavigator();
export type RootStackParamList = {
  Login: undefined;
  ChooseUserTypeScreen: undefined;
  RegisterAsClient: undefined;
  RegisterAsNurse: undefined;
  Home: undefined;
};

export default function AppNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
            <Stack.Screen name="RegisterAsClient" options={{ headerShown: false }} component={RegisterAsClientScreen} />
            <Stack.Screen name="RegisterAsNurse" options={{ headerShown: false }} component={RegisterAsNurseScreen} />
            <Stack.Screen name="ChooseUserTypeScreen" options={{ headerShown: false }} component={ChooseUserTypeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}