import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { createUserWithEmailAndPassword, getAuth, signOut } from "firebase/auth";
import { createStackNavigator } from "@react-navigation/stack";
import { collection, addDoc } from "firebase/firestore"; 
import { database } from "../config/firebase";


import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { View } from "react-native";
import { FlatList } from "react-native";
import colors from "../config/colors";
import Icon from "../components/Icon";
import ListItemSeparater from "../components/ListItemSeparater";
import { useNavigation } from "@react-navigation/core";
import AuthContext from "../auth/context";

const menuItem = [
  {
    title: "Sober",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];


function AccountScreen(props) {
const authContext = useContext(AuthContext);
const auth = getAuth();

const signOut = async ()=>{
 const out = await signOut(auth).then(()=>{
  }).catch((error)=> console.log(error))

   authContext.setUser();

}
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          image={auth.currentUser.photoURL}
          title={auth.currentUser.displayName}
          subTitle={auth.currentUser.email}
        />
      </View>
      <View>
        <FlatList
          data={menuItem}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparater}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log out"
        IconComponent={<Icon name="logout" backgroundColor="#FFE66D" />}
        onPress={signOut}
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  screen: { backgroundColor: colors.light },
});

export default AccountScreen;
