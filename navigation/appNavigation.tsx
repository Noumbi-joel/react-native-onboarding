import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import { RootStackParamList } from "../types";
import { useLayoutEffect, useState } from "react";
import { getItem } from "../utils/storage";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigation() {
  const [showOnboarding, setShowOnboarding] = useState<boolean | null>(null);

  const checkIfAlreadyOnboarded = async () => {
    const onboarded = await getItem("onboarded");

    if (onboarded == "1") {
      setShowOnboarding(false);
    } else {
      setShowOnboarding(true);
    }
  };

  useLayoutEffect(() => {
    checkIfAlreadyOnboarded();
  }, []);

  if (showOnboarding === null) {
    return null;
  }

  if (showOnboarding) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Onboarding">
          <Stack.Screen
            name="Onboarding"
            options={{ headerShown: false }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Onboarding"
            options={{ headerShown: false }}
            component={OnboardingScreen}
          />
          <Stack.Screen
            name="Home"
            options={{ headerShown: false }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
