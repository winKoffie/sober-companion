import React from "react";
import { Text, StyleSheet, ImageBackground, SafeAreaView, FlatList } from "react-native";
import MotivationList from "../components/MotivationList";
import Screen from "../components/Screen";
import AppText from "../components/appText/AppText";
import Header from "../components/Header";
import colors from "../config/colors";

const motivation = [
  {
    id: "1",
    title: "Quote",
    message: "Your future is created by what you do today",
  },
  {
    id: "2",
    title: "Motivation",
    message:
      "Not all storms come to disrupt your life, some come to clear your path.",
  },
  {
    id: "3",
    title: "Quote",
    message: "Count Your blessings today not your problem",
  },
  {
    id: "4",
    title: "Motivation",
    message: "It is a beautiful day to be alive! The rest is up to you",
  },
];

function ListingDetailScreen(props) {
  const renderHeader = () => (
    <>
      <Header text="Motivation" />
      <ImageBackground
        source={require('../images/sober1.jpeg')}
        style={styles.backgroundImage}
      >
        <Text style={styles.motivation}>
          You didn't come this far to only make it this far.
        </Text>
      </ImageBackground>
      <AppText style={styles.previous}>Previous days</AppText>
    </>
  );

  const renderItem = ({ item }) => (
    <MotivationList
      title={item.title}
      message={item.message}
    />
  );

  return (
    <Screen style={styles.screen}>
      <FlatList
        data={motivation}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={renderHeader}
        renderItem={renderItem}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.white,
    flex: 1,
  },
  backgroundImage: {
    borderRadius: 10,
    height: 250,
    resizeMode: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  motivation: {
    color: colors.white,
    fontSize: 20,
  },
  previous: {
    fontWeight: '800',
    marginLeft: 10,
    marginVertical: 10,
  },
});

export default ListingDetailScreen;
