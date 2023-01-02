// import React from "react";
// import { View, ImageBackground } from "react-native";
// import { styles } from "./LoginScreenStyle";
// <ImageBackground
//   style={styles.image}
//   source={require("../img/photoBG.jpg")}
// ></ImageBackground>;
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
  Text,
} from "react-native";

export default function App() {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (text) => setLogin(text);
  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const onRegistration = () => {
    Alert.alert("Credentials", `${login} + ${email} + ${password}`);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          resizeMode="cover"
          source={require("../../assets/img/photoBG.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <View style={styles.form}>
              <Text style={styles.textTitle}>Registration</Text>
              <TextInput
                value={login}
                onChangeText={loginHandler}
                placeholder="Login"
                style={styles.input}
              />
              <TextInput
                value={email}
                onChangeText={emailHandler}
                placeholder="E-mail"
                secureTextEntry={true}
                style={styles.input}
              />
              <TextInput
                value={password}
                onChangeText={passwordHandler}
                placeholder="Password"
                secureTextEntry={true}
                style={styles.input}
              />

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                // onPress={handleSubmit}
              >
                <Text style={styles.btnTitle}>Sign up</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Already have an account? LogIn</Text>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  textTitle: {
    fontFamily: "Roboto-Bold",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.01,
    color: "#212121",
    textAlign: "center",
    marginBottom: 33,
    // justifyContent: "center",
    // alignItems: "center",
  },
  form: {
    // position: "relative",
    width: "100%",
    paddingHorizontal: 16,
    paddingTop: 92,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    // marginHorizontal: 40,
  },
  input: {
    fontFamily: "Roboto-Regular",
    // width: "100%",
    // marginLeft: 0,
    // marginRight: 0,
    fontSize: 16,
    lineHeight: 19,
    height: 50,
    marginBottom: 16,
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    marginBottom: 10,
    color: "#212121",
  },
  button: {
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#fff",
  },

  text: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    textAlign: "center",
    marginTop: 16,
    marginBottom: 66,
  },
});
