// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import * as Font from "expo-font";
// import React, { useState } from "react";
// import { AppLoading } from "expo";

// import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
// import LoginScreen from "./Screens/LoginScreen/LoginScreen";

// // const loadFonts = async () => {
// //   await Font.loadAsync({
// //     "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
// //     "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
// //     "Roboto-BoldItalic": require("./assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
// //   });
// // };

// export default function App() {
//   // const [isReady, setIsReady] = useState(false);
//   // if (!isReady) {
//   //   return (
//   //     <AppLoading
//   //       startAsync={loadFonts}
//   //       onFinish={() => setIsReady(true)}
//   //       onError={console.warn}
//   //     />
//   //   );
//   // }
//   return (
//     <View style={styles.container}>
//       <StatusBar style="auto" />
//       <RegistrationScreen />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // fontFamily: "Roboto-Bold",
//     //   backgroundColor: "#fff",
//     //   alignItems: "center",
//     //   justifyContent: "center",
//   },
// });

// import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [isAuth, setisAuth] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
          "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
          "Roboto-BoldItalic": require("./assets/fonts/Roboto/Roboto-BoldItalic.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar style="auto" />
      <RegistrationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: "Roboto-Bold",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
