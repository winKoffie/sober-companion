import React from 'react'
import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from '../config/colors'

function NewListingButon({onPress}) {
  return (

    <TouchableOpacity onPress={onPress} style={styles.container}>
      <View>
            <MaterialCommunityIcons 
               name='plus-circle' 
               color={colors.white} 
               size={40}
            />
        </View >   
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center",
        backgroundColor: "#585f6f",
        borderColor: colors.white,
        borderRadius: 40,
        borderWidth:10,
        bottom: 35,
        height: 80,
        justifyContent: "center",
        width: 80
        
    }
})


export default NewListingButon;