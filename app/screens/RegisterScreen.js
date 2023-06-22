import React, { useState,useEffect } from "react";
import { 
  StyleSheet, 
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView 
} from "react-native";
import { updateProfile, createUserWithEmailAndPassword } from "firebase/auth";




import { useNavigation } from "@react-navigation/core";
import { ref as databaseRef,set } from "firebase/database";
import { ref as storageRef } from "firebase/storage";


import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getDownloadURL, uploadBytes } from "firebase/storage";



import {auth, realDatabase, storage } from "../config/firebase";
import Screen from "../components/Screen";
import SubmitButton from "../components/SubmitButton";
import AppTextInput from "../components/AppTextInput";
import colors from "../config/colors";


function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture,setProfilePicture]= useState(null);
  const [addiction,setAddiction]= useState("");
  
  const navigation = useNavigation();
   // request permision
     const requestPermision = async()=>{
      const {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
       if (!status == "granted") alert("You need to enable permision  to access library");
    }
      useEffect(()=>{
      requestPermision();
    },[]);

    // Select Image Function
     const selectImage = async ()=>{
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
              mediaTypes: ImagePicker.MediaTypeOptions.Images,
              quality: 1,
            });
           if (!result.canceled) setProfilePicture(result.assets[0].uri);
            
        } catch (error) {
            console.log("error reading an image:",error); 
        }
    }

const register = async () => {


  try {
    // Register User
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    if (user) {
      // Upload profile picture
      const response = await fetch(profilePicture);
      const blob = await response.blob();
      const imageRef = storageRef(storage, `profilePictures/${user.uid}`);
      const uploadTask = await uploadBytes(imageRef, blob);

      // Get the download URL of the uploaded picture
      const downloadURL = await getDownloadURL(uploadTask.ref);

      // Update user profile with name and photoURL
      await updateProfile(user, {
        displayName: name,
        photoURL: downloadURL,
      });

    // Store the username and addiction in the Realtime Database
      const userRef = databaseRef(realDatabase, `users/${user.uid}`);
      const userData = {
        name: name,
        addiction: addiction,
      };
      await set(userRef, userData);

      // Additional logic after successful registration
      console.log('User registered successfully!', user.displayName);

      navigation.navigate("Login");
    }
  } catch (error) {
    console.log('Error registering user:', error);
  }
};
  
  
    
  return (
    <Screen style={styles.container}>
      <ScrollView>
       <TouchableOpacity style={styles.imageContainer} onPress={selectImage}>
        <View style={styles.profile}>
          {!profilePicture && (
            <MaterialCommunityIcons name="camera" size={40} color={colors.medium} />
          )}
          {profilePicture && <Image source={{ uri: profilePicture }} style={styles.image} />}
          <Text style={styles.imageText}>Upload Image</Text>
        </View>
      </TouchableOpacity>
      
      <AppTextInput
        autoCorrect={false}
        icon="account"
        name="name"
        placeholder="Name"
        onChangeText={(text)=>setName(text)}
      />

      <AppTextInput
        autoCorrect={false}
        icon="cancel"
        name="addiction"
        placeholder="Addiction"
        onChangeText={(text)=>setAddiction(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="email"
        keyboardType="email-address"
        value={email}
        placeholder="Email"
        textContentType="emailAddress"
        onChangeText={(text) => setEmail(text)}
      />
      <AppTextInput
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        value={password}
        placeholder="Password"
        secureTextEntry
        textContentType="password"
        onChangeText={(text) => setPassword(text)}
      />
      <SubmitButton title="Register" handleSubmit={register} />
      <View style={styles.signInContainer}>
      <Text style={styles.question}>Have an account?</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Login")}>
        <Text  style={styles.signIn}>Sign In</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 90
  },
   imageContainer:{
    justifyContent:"center",
    alignItems:"center",
    marginBottom:30,
  },
  profile:{
    justifyContent:"center",
    alignItems:"center",
  },
  imageText: {
    fontSize: 18, 
    marginVertical:10,
    fontWeight:"normal"
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 100 
  },
 
  signInContainer:{
    paddingTop:5,
    flexDirection: "row",
    justifyContent:"center",
    alignItems:"center"
  },
  question:{
    fontSize:15,
    paddingRight:4,
    fontWeight:"light",
  },
  signIn:{fontSize:15,color:colors.primary}
});

export default RegisterScreen;
