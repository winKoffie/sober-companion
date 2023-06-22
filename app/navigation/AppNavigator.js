import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";


import MotivationScreen from "../screens/MotivationScreen";
import AccountScreen from "../screens/AccountScreen";
import CommunityScreen from "../screens/CommunityScreen";
import SoberTime from "../screens/SoberTime";
import NewListingButon from "../components/NewListingButon";
import PostScreen from "../screens/PostScreen";
import SoberietyClock from "../screens/SobrietyClock";

const Tab = createBottomTabNavigator();
// const navigation = createBottomTabNavigator();


const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Progress"
      component={SoberietyClock}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <MaterialCommunityIcons name="timer" size={35} color="#585f6f" />
        ),
      }}
    />
    <Tab.Screen
      name="Community"
      component={CommunityScreen}
      options={{
        // headerTitle: "Community",
        headerShown: false,
        headerTitleAlign: "center",
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="chat-outline"
            size={35}
            color="#585f6f"
          />
        ),
      }}
    />
    <Tab.Screen
      name="PostScreen"
      component = {PostScreen}
      options={({navigation})=>({
        headerShown: false,
        tabBarButton: ()=> 
         <NewListingButon 
           onPress={()=> navigation.navigate("PostScreen")}
         />,
      })}
    />
    <Tab.Screen
      name="Motivation"
      component={MotivationScreen}
      options={{
        headerShown: false,
        headerTitleAlign: "center",
        tabBarIcon: () => (
          <MaterialCommunityIcons name="fire" size={35} color="#585f6f" />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountScreen}
      options={{
        headerShown: false,

        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="account"
            size={35}
            color="#585f6f"
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
