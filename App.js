import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import React, { useState } from "react";
import { AppLoading } from "expo";

import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

// const loadFonts = async () => {
//   await Font.loadAsync({
//     "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
//     "Roboto-BoldItalic": require("./assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
//   });
// };

export default function App() {
  // const [isReady, setIsReady] = useState(false);
  // if (!isReady) {
  //   return (
  //     <AppLoading startAsync={loadFonts} onFinish={() => setIsReady(true)} />
  //   );
  // }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RegistrationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //   backgroundColor: "#fff",
    //   alignItems: "center",
    //   justifyContent: "center",
  },
});
