import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AppText from "../components/appText/AppText";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpeg")}
    >
      <View style={styles.textContainer}>
        <Text style={styles.tagline}>Sober Companion</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#001e3f",
  },
  buttonContainer: {
    padding: 20,
    width: "100%",
  },
  textContainer: {
    position: "absolute",
    top: 150,
  },
  tagline: {
    fontSize: 30,
    fontWeight: 600,
    color: colors.secondary,
  },
});

export default WelcomeScreen;
