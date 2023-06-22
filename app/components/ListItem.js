import React from "react";

import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
} from "react-native";
import {
  GestureHandlerRootView,
  Swipeable,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

import AppText from "./appText/AppText";
import colors from "../config/colors";

function ListItem({
  image,
  title,
  subTitle,
  onPress,
  renderRightActions,
  IconComponent,
}) {
  return (
    <TouchableWithoutFeedback>
      <GestureHandlerRootView>
        <Swipeable renderRightActions={renderRightActions}>
          <TouchableHighlight
            underlayColor={colors.light}
            onPress={onPress}
          >
            <View style={styles.container}>
              {IconComponent}
              {image && <Image style={styles.image} source={{uri: image}} />}
              <View style={styles.detailContainer}>
                {title && <AppText style={styles.text}>{title}</AppText>}
                {subTitle && <AppText>{subTitle}</AppText>}
              </View>
            </View>
          </TouchableHighlight>
        </Swipeable>
      </GestureHandlerRootView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    paddingTop: 50,
  },
  detailContainer: { marginLeft: 10, justifyContent: "center" },
  text: { fontWeight: "bold" },
});
export default ListItem;
