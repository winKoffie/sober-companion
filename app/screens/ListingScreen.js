import React from "react";
import Screen from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";
import Community from "../components/Community";

const Posts = [
  {
    id: 1,
    title: "hello",
    message: "Hello, I am new here.",
    image: require("../images/2.jpeg"),
  },
  {
    id: 2,
    title: "hello",
    message: "Hello, I am new here.",
    image: require("../images/2.jpeg"),
  },
  {
    id: 3,
    title: "hello",
    message: "Hello, I am new here.",
    image: require("../images/2.jpeg"),
  },
];

function ListingScreen(props) {
  return (
    <Screen>
      <FlatList
        data={Posts}
        keyExtractor={(post) => post.id.toString}
        renderItem={({ item }) => (
          <Community
            image={item.image}
            title={"Subject:" + item.title}
            subTitle={item.message}
          />
        )}
      />
    </Screen>
  );
}

export default ListingScreen;
