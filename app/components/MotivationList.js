import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "./appText/AppText";
import colors from "../config/colors";
import ListItemSeparater from "./ListItemSeparater";

function MotivationList({ title, message }) {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
         <AppText style={styles.title}>{title}</AppText>
      </View>
         <AppText style={styles.message}>{message}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     marginBottom:15,
     borderRadius:5,
     borderColor:colors.lightGrey,
     borderWidth: 1,
     marginHorizontal:5,
    },
  titleContainer:{
    borderBottomWidth:1,
    borderColor:colors.lightGrey,
    justifyContent: 'flex-start',
    alignItems: "flex-end", 
    paddingRight: 20,
    height: 35,
    backgroundColor: '#f5f5f5'
    },
  title: {
    marginTop: 5,
    fontWeight:'100' ,
    color: colors.grey,
    fontSize: 12 
  },
  message: {
    fontWeight: "light",
    color: colors.fadedBlack,
    marginLeft:10,
    lineHeight:30,
    height:70,
    fontWeight: '100',
    paddingVertical: 10,
    fontSize:15

  },
});

export default MotivationList;
