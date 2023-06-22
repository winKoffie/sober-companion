import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import colors from '../config/colors';
import Screen from '../components/Screen';
import { ScrollView } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppButton from '../components/AppButton';
import { TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

const SoberietyClock = () => {
  const [startDateTime, setStartDateTime] = useState(null);
  const [soberTime, setSoberTime] = useState(null);
  const [isTracking, setIsTracking] = useState(false);

  useEffect(() => {
    if (isTracking) {
      // Calculate sober time on component mount or when tracking is started
      const interval = setInterval(() => {
        calculateSoberTime();
      }, 1000);

      // Clean up the interval on component unmount or when tracking is stopped
      return () => clearInterval(interval);
    }
  }, [isTracking]);

  const calculateSoberTime = () => {
    const currentDateTime = new Date();
    const soberTimeDiff = currentDateTime.getTime() - startDateTime.getTime();
    const days = Math.floor(soberTimeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((soberTimeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((soberTimeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((soberTimeDiff % (1000 * 60)) / 1000);

    setSoberTime({ days, hours, minutes, seconds });
  };

  const handleStartTracking = () => {
    const currentDateTime = new Date();
    setStartDateTime(currentDateTime);
    setIsTracking(true);
  };

  const handleResetTracking = () => {
    setStartDateTime(null);
    setSoberTime(null);
    setIsTracking(false);
  };

  if (!startDateTime) {
    return (
      <Screen>
      <View style={styles.container}>
        <View style={styles.daysContainer}>
        <Text style={styles.title}>My sober streak</Text>
        <Text style={styles.message}>Start your streak</Text>
        </View>
        <TouchableOpacity onPress={handleStartTracking}>
          <MaterialCommunityIcons 
            name='timer' 
            size={50} 
            color={colors.secondary} 
          />
          <Text style={styles.state}>Start</Text>
        </TouchableOpacity>
        
      </View>
      </Screen>
    );
  }

  return (
    <ScrollView>
    <Screen style={styles.container}>
      <View style={styles.daysContainer}>
      <Text style={styles.title}>My sober streak</Text>
      <Text style={styles.days}>{soberTime && soberTime.days}</Text>
      <Text style={styles.dayText}>days</Text>
      </View>
      <View style={styles.time}>
       <Text style={styles.section}> 
        {soberTime && soberTime.hours} hours 
        </Text>
        <Text style={styles.section}> 
        {soberTime && soberTime.minutes} minutes
        </Text>
        <Text style={styles.section}> 
        {soberTime && soberTime.seconds} seconds
        </Text> 
      </View>
      <TouchableOpacity onPress={handleResetTracking}>
          <MaterialCommunityIcons 
            name='restore' 
            size={50} 
            color={colors.secondary} 
          />
          <Text style={styles.state}>Reset</Text>
        </TouchableOpacity>
    </Screen>
      </ScrollView>
  );
  
};



const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20
  },
  title: {
    fontSize: 24,
    fontWeight: '200',
    marginBottom: 20,
    color:colors.white,
  },
  message: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: Colors.white
  },
  time: {
    fontSize: 20,
    marginVertical: 20,
    textAlign: 'center',
    justifyContent:"center",
   
  },
  daysContainer:{
    backgroundColor: colors.secondary,
    height: 500,
    width: '100%',
    justifyContent:"center",
    alignItems:"center"
  },
  days:{
    color: colors.white,
    fontSize: 100,
    fontWeight: '100',
  },
  dayText:{
    color:colors.white,
    fontSize: 30,
    fontWeight: '100'
   },
   button:{
    marginTop:30,
    elevation: 5,
    backgroundColor:colors.grey    

   },
   section:{
    fontWeight:"200",
    fontSize: 20,
    color:colors.secondary,
    fontWeight:'100'
   },
   state:{
    justifyContent:"center",
    alignContent:"center",
    marginLeft: 12,
    color:colors.secondary
   },
   milestoneTitle:{

   }
});

export default SoberietyClock;
