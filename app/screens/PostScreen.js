import React, { useContext, useState } from "react";
import { StyleSheet } from "react-native";
import AuthContext from "../auth/context";

import SubmitButton from "../components/SubmitButton";
import Screen from "../components/Screen";
import AppTextInput from "../components/AppTextInput";
import {auth, realDatabase} from "../config/firebase";
import { useNavigation } from "@react-navigation/core";
import { ref,push } from "firebase/database";



  
  const PostScreen = () => {
       const { user, } = useContext(AuthContext);
       const [post, setPost] = useState(null);
       const navigation = useNavigation();
      
      const createPost = async ()=>{
        
        try {

             const postRef = ref(realDatabase, 'posts');
             const postData = await push(postRef, {
             image: auth.currentUser.photoURL,
             name: auth.currentUser.displayName,
             post: post,
             postTime: new Date().toDateString(),

       })
   
       if(postData){
         console.log("Post has been added", postRef.id);
           navigation.navigate("Community");
           setPost(null);

       }
      
    } catch (error) {
      console.log(error) 
    }

  }

  return (
    <Screen style={styles.container}>
       
        <AppTextInput
          autoCapitalize="sentences"
          autoCorrect
          multiline
          name="description"
          value={post}
          onChangeText={(text) => setPost(text)}
          numberOfLines={5}
          placeholder="What do you have in your mind?"
        />
        <SubmitButton title="Post" handleSubmit={createPost}/>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop:300
  },
});

export default PostScreen;
