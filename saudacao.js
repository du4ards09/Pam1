import styles from './saudacaoStyle';
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity, Text, Image } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Saudacao() {
  
  const navigation = useNavigation();
  const [print, setPrint] = useState('');

  AsyncStorage.getItem('nome')
  .then(value => {
    if (value !== null){
      setPrint( value);

    }else {

    }
  })
  .catch(error => {
    setPrint('Erro ao recuperar dados:', error);
  });

  
  return (
    <View style={styles.container}>
        <View style={styles.logo}>
            <Image source={require('./../../../assets/SafariDoAmor-Zoo-kids.png')} style={{ width: 400, height: 400,}}/> 
        </View>
        <Text style={styles.Text}>Bem-vindo(a), {(print)}!</Text>
        <Text style={styles.Text1}>Deseja saber as Novidades ?</Text>
        <View style ={styles.Touchs}>
            <TouchableOpacity style={styles.To} onPress={() => navigation.navigate('Sobre')}>
                <Text style={styles.ToTxt}> Não </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.To} >
                <Text style={styles.ToTxt}> Sim </Text>
            </TouchableOpacity>
        </View> 
        <StatusBar style="auto"/>
    </View>
  );
}
