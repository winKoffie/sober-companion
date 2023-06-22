import React, { useContext, useEffect, useState } from "react";
import Screen from "../components/Screen";
import { FlatList } from "react-native";
import Community from "../components/Community";
import MessagesScreen from "../screens/MessagesScreen";
import ListItemSeparater from "../components/ListItemSeparater";
import { realDatabase} from "../config/firebase";
import { getDatabase, onValue, ref, off} from "firebase/database";
import AuthContext from "../auth/context";
import Header from "../components/Header";




function CommunityScreen() {
  const [posts, setPosts] = useState([]);
  const {user,logout}= useContext(AuthContext)

const database = getDatabase();

 useEffect(() => {
    // Fetch the user posts from the Firebase database

    try {
      const fetchPosts = () => {
        const postRef = ref(realDatabase, 'posts');

        onValue(postRef, (snapshot) => {
          const data = snapshot.val();

          if (data) {
            const postsArray = Object.entries(data).map(([id, post]) => ({ id, ...post }));
            setPosts(postsArray);
            console.log(data);
          }
        });
      };

      fetchPosts();
      // Unsubscribe from the Firebase database when the component unmounts
      return () => {
        ref(realDatabase, 'posts').off();
      };

    } catch (error) {
      // Handle the error appropriately, such as logging or displaying an error message
      console.log('Error fetching posts:', error);
    }
  }, []);
 
  return (
    <Screen>
      <>
        <Header text="Community"/>
    
      <FlatList
        data={posts}
        keyExtractor={(post) => post.id}
        renderItem={({ item }) => (
          <Community 
          image = { item.image }
          name = { item.name }
          postTime = { item.postTime }     
          post = { item.post }
          
          />
        )}
      />
      </>
    
    </Screen>
  );
}



export default CommunityScreen;
