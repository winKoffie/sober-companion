import React, { useContext, useState } from "react";
import { StyleSheet, View } from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/core";


import Screen from "../components/Screen";
import AppText from "../components/appText/AppText";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";
import SubmitButton from "../components/SubmitButton";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContext from "../auth/context";

// LOGIN VALIDATION WITH YUP

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("")

const navigation = createStackNavigator;

  const auth = getAuth();
  const signInUser = async ()=>{
    if(email && password){
        await signInWithEmailAndPassword(auth,email,password).then((userCredential)=>{
          const user = userCredential.user;
          console.log("Login Succesful:", user);
          authContext.setUser(user);

          if(user){
            navigation.replace("Progress")
          }

        }).catch((error)=>{ 
          console.log(error)
         });
    }
  }
  return (
    <Screen style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <AppText style={styles.text}>Sober Companion</AppText>
        </View>

        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="email"
          textContentType="emailAddress"
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="password"
          secureTextEntry={true}
          textContentType="password"
        />
        <SubmitButton title="Login" handleSubmit={signInUser}/>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 600,
    color: colors.secondary,
    paddingBottom: 200,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 70,
  },
});

export default LoginScreen;
