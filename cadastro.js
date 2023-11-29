import styles from './cadastroStyle';
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";

export default function Cadastro(){

    const navigation = useNavigation();

    const [nome, setNome] = useState();
    const [idade, setId] = useState();
    const [email, setEm] = useState();
    const [animal, setAp] = useState();
    const [telefone, setTel] = useState();

    function cadastrar(){

        AsyncStorage.setItem('nome', nome);
        AsyncStorage.setItem('email', email);
        AsyncStorage.setItem('idade', idade);
        AsyncStorage.setItem('animal', animal);
        AsyncStorage.setItem('telefone', telefone);
        navigation.navigate('Saudacao')
      }

    return (
        <View style={styles.container}>
          <View style={styles.logo2}>
            <Image source={require('./../../../assets/SafariDoAmor-Zoo-kids.png')} style={{ width: 200, height: 200, }} />
          </View>
          <View style={styles.form}>
            <TextInput style={styles.TextInput} placeholder="Digite seu nome" onChangeText={text => setNome(text)}/>
            <TextInput style={styles.TextInput} placeholder="Digite sua Idade:" onChangeText={(text) => setId(text)}/>
            <TextInput style={styles.TextInput} placeholder="Digite seu Telefone:" onChangeText={(text) => setTel(text)}/>
            <TextInput style={styles.TextInput} placeholder="Digite seu E-mail:" onChangeText={(text) => setEm(text)}/>
            <TextInput style={styles.TextInput} placeholder="Qual seu animal preferido:" onChangeText={(text) => setAp(text)}/>
            <TouchableOpacity style={styles.button} onPress={cadastrar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
          <StatusBar style="auto"/>
        </View>
    );
}