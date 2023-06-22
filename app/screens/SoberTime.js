import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Dimensions,
} from "react-native";
import { Stopwatch, Timer } from "react-native-stopwatch-timer";
import colors from "../config/colors";
import AppText from "../components/appText/AppText";
import Screen from "../components/Screen";

const screen = Dimensions.get("window");

const SoberTime = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(90000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
    <Screen style={styles.container}>
      <AppText>Track Your Relapse</AppText>

      <View style={styles.sectionStyle}>
        <Stopwatch
          laps
          msecs
          start={isStopwatchStart}
          reset={resetStopwatch}
          options={options}
          getTime={(time) => {
            console.log(time);
          }}
        />
        <TouchableHighlight
          onPress={() => {
            setIsStopwatchStart(!isStopwatchStart);
            setResetStopwatch(false);
          }}
          style={styles.buttonText}
        >
          <AppText style={styles.text}>
            {!isStopwatchStart ? "Start" : "Counting..."}
          </AppText>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => {
            setIsStopwatchStart(false);
            setResetStopwatch(true);
          }}
          style={styles.buttonText}
        >
          <AppText style={styles.text}>Reset</AppText>
        </TouchableHighlight>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  sectionStyle: {
    marginTop: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    width: screen.width / 2,
    height: screen.width / 2,
    borderRadius: screen.width / 2,
    borderColor: colors.secondary,
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    marginTop: 10,
  },
});

const options = {
  text: {
    fontSize: 40,
    color: colors.secondary,
    marginLeft: 7,
  },
};

export default SoberTime;
