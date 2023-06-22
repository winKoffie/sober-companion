import React, { useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import colors from "../config/colors";
import AppText from "./appText/AppText";
import { TouchableWithoutFeedback } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Community({ image, name, post, onPress, postTime }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageNameTime}>
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <View style={styles.nameTime}>
            {name && <AppText style={styles.name}>{name}</AppText>}
            {postTime && <Text style={styles.postTime}>{postTime}</Text>}
          </View>
        </View>
        <View style={styles.detail}>
          {post && <AppText style={styles.post}>{post}</AppText>}
        </View>
        <View style={styles.likes}>
          <TouchableWithoutFeedback onPress={handleLike} disabled={liked}>
            <MaterialCommunityIcons
              name={liked ? "heart" : "heart-outline"}
              size={20}
              style={[styles.like, liked && styles.liked]}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderColor: colors.lightGrey,
    borderBottomWidth: 1,
    margin: 1,
  },
  name: {
    fontWeight: "500",
    fontSize: 14,
  },
  imageNameTime: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginHorizontal: 10,
    borderColor: colors.primary,
    borderWidth: 1,
  },
  post: {
    color: colors.fadedBlack,
    marginHorizontal: 10,
    fontSize: 15,
    lineHeight: 25,
  },
  postTime: {
    color: colors.grey,
    fontSize: 12,
  },
  detail: {
    marginVertical: 5,
  },
  likes: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  like: {
    marginLeft: 20,
    marginTop: 20,
  },
  liked: {
    color: "red", // Change the color to red when liked
  },
});

export default Community;
