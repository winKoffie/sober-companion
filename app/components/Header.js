import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from '../config/colors';

function Header({ text }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text style={styles.content}>{ text }</Text>
           </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        backgroundColor: colors.cream,
        padding:15,
        marginBottom:2,
        fontWeight: "bold",
        elevation: 30
    },
    content:{
        fontSize: 18,
        color:colors.secondary
    }
    
})
export default Header;