import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Text,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import Lottie from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { OnboardingScreenNavigationProp } from "../types";
import { setItem } from "../utils/storage";

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const handleDone = () => {
    navigation.navigate("Home");
    setItem("onboarded", "1");
  };

  const DoneButton = ({ ...props }) => (
    // @ts-ignore
    <TouchableOpacity {...props} className="p-5">
      <Text>Done</Text>
    </TouchableOpacity>
  );

  return (
    // @ts-ignore
    <View className="flex-1">
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={DoneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/animations/boost.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Boost Productivity",
            subtitle: "Subscribe this channel to boost your productivity level",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/animations/work.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Work Seamlessly",
            subtitle: "Get your work done seamlessly without interruption",
          },
          {
            backgroundColor: "#a78b7a",
            image: (
              <View style={styles.lottie}>
                <Lottie
                  source={require("../assets/animations/achieve.json")}
                  autoPlay
                  loop
                />
              </View>
            ),
            title: "Achieve Higher Goals",
            subtitle:
              "By boosting your productivity we help you to achieve higher goals",
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.9,
    height: width * 0.7,
  },
});
