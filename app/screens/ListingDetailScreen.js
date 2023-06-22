import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/appText/AppText";
import Community from "../components/Community";
import ListItem from "../components/ListItem";

function ListingDetailScreen(props) {
  return (
    <View>
      <Community image={require("../images/1.jpeg")} />
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Be strong</AppText>
        <AppText>One must be strong</AppText>
        {/* LIST ITEM */}
        <View style={styles.userContainer}>
          <ListItem
            image={require("../images/man_head.jpg")}
            title="Mohammed"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 30 },
  detailContainer: { padding: 20 },
  title: {
    fontSize: 25,
    fontWeight: "600",
  },
  userContainer: { marginVertical: 40 },
});

export default ListingDetailScreen;
