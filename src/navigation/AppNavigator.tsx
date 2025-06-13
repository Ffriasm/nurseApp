import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterAsClientScreen from "../screens/RegisterAsClientScreen";
import RegisterAsNurseScreen from "../screens/RegisterAsNurseScreen";
import ChooseUserTypeScreen from "../screens/ChooseUserTypeScreen";
import ClientHomeScreen from "../screens/ClientHomeScreen";
import NurseHomeScreen from "../screens/NurseHomeScreen";
import { useAuth } from "../data/contexts/AuthContext";
import { UserType } from "../data/interfaces/types";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator();
export type RootStackParamList = {
  Login: undefined;
  ChooseUserTypeScreen: undefined;
  RegisterAsClient: undefined;
  RegisterAsNurse: undefined;
  Home: undefined;
  ClientHome: undefined;
  NurseHome: undefined;
};

export default function AppNavigator() {
  const { user, loading } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {user ? (
          user.type === UserType.Client ? (
            <Stack.Screen
              name="ClientHome"
              options={{ headerShown: false }}
              component={ClientHomeScreen}
            />
          ) : (
            <Stack.Screen
              name="NurseHome"
              options={{ headerShown: false }}
              component={NurseHomeScreen}
            />
          )
        ) : (
          <>
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={HomeScreen}
            />
            <Stack.Screen
              name="Login"
              options={{ headerShown: false }}
              component={LoginScreen}
            />
            <Stack.Screen
              name="RegisterAsClient"
              options={{ headerShown: false }}
              component={RegisterAsClientScreen}
            />
            <Stack.Screen
              name="RegisterAsNurse"
              options={{ headerShown: false }}
              component={RegisterAsNurseScreen}
            />
            <Stack.Screen
              name="ChooseUserTypeScreen"
              options={{ headerShown: false }}
              component={ChooseUserTypeScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
