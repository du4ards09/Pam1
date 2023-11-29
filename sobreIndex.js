import styles from './sobreStyle';
import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { useNavigation } from "@react-navigation/native";
import {View, Image,TouchableOpacity } from "react-native-web";


export default function Sobre(){

    const navigation = useNavigation();

    return(
        <View style = {styles.container}>
            <View style ={styles.territorio}>
                <TouchableOpacity style={styles.buttonTer} onPress={() => navigation.navigate('Territorio1')}>
                    <Image source={require('./../../../assets/Territórios.gif')} style={styles.imgTer} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTer}onPress={() => navigation.navigate('Ter2')}>
                    <Image source={require('./../../../assets/Territórios (2).gif')} style={styles.imgTer}/> 
                </TouchableOpacity>
            </View>
            <View style ={styles.territorio}>
                <TouchableOpacity style={styles.buttonTer} onPress={() => navigation.navigate('Ter3')}>
                    <Image source={require('./../../../assets/Territórios (1).gif')} style={styles.imgTer} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTer}onPress={() => navigation.navigate('Ter4')}>
                    <Image source={require('./../../../assets/Territórios (3).gif')} style={styles.imgTer}/> 
                </TouchableOpacity>
            </View>
            <View style ={styles.territorio}>
                <TouchableOpacity style={styles.buttonTer} onPress={() => navigation.navigate('Ter5')}>
                    <Image source={require('./../../../assets/Territórios (4).gif')} style={styles.imgTer} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTer} onPress={() => navigation.navigate('Ter6')}>
                    <Image source={require('./../../../assets/Territórios (5).gif')} style={styles.imgTer}/> 
                </TouchableOpacity>
            </View>
            <StatusBar style="auto"/>
        </View>
    );
}