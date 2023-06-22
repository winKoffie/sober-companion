import React from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";

import ListItem from "../components/ListItem";

import ListItemSeparater from "../components/ListItemSeparater";
import AppText from "../components/appText/AppText";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import { useState } from "react";
import Screen from "../components/Screen";

 
function MessagesScreen(props) {
  // DELETE ITEM
  const [messages, setMessages] = useState(initialMessage);
  const [refereshing, setRefereshing] = useState(false);
  function handleDelete(message) {
    const newMessages = messages.filter((m) => m.id !== message.id);
    setMessages(newMessages);
  }
  return (
    <Screen>
      <FlatList
        data={initialMessage}
        keyExtractor={(initialMessage) =>
          initialMessage.id.toString()
        }
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction
                onPress={() => handleDelete(item)}
              />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparater}
        refreshing={refereshing}
        onRefresh={() => {
          setMessages(initialMessage);
        }}
      />
    </Screen>
  );
}

export default MessagesScreen;
