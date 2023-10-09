import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../types";
import { removeItem } from "../utils/storage";

const { width } = Dimensions.get("window");

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleReset = () => {
    navigation.navigate("Onboarding");
    removeItem("onboarded");
  };

  return (
    // @ts-ignore
    <View className="flex-1 items-center justify-center">
      <View style={styles.lottie}>
        <Lottie
          source={require("../assets/animations/work.json")}
          autoPlay
          loop
        />
      </View>
      {/* @ts-ignore */}
      <Text className="text-3xl mb-5">Home Page</Text>
      <TouchableOpacity
        onPress={handleReset}
        /* @ts-ignore */
        className="bg-[#34d399] p-2 rounded-lg"
      >
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: width * 0.7,
  },
});
