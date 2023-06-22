import React from "react";
import { StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native";
import AppText from "./appText/AppText";

const PickerItem = ({ name, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={styles.text}>{name}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    width: "100%",
    padding: 10,
    textAlign: "center",
  },
});

export default PickerItem;
