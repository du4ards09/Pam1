import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image,Button,TouchableOpacity,Modal } from "react-native-web";
import styles from './StyleTer.js';
import { useNavigation } from "@react-navigation/native";

export default function Sobre(){

    const[visivel,setVisivel]= useState (false)
    const[modal,setModal]= useState(0)
    const[animal,setAnimal]= useState(0)
    const[modalAnimal,setModalAnimal] = useState([
        
        {
          image:  <Image source={require('./../../../assets/oncaPintada.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
          titulo:'Rinoceronte',
          cont:'conteudo',
         
        },
        //2
        {
          image: 'imagem2',//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/jacare-cagados.jpg')} />,
          titulo:'Zebra',
          cont: 'conteudo 2',
         
        },
          //3
        {
            image: 'imagem3',//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/jacare-cagados.jpg')} />,
            titulo:'Girafa',
            cont: 'conteudo 3',
           
          },   
          //4
        {
            image:  <Image source={require('./../../../assets/suricata.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Suricata',
            cont: 'conteudo 4',
           
          },
          //5
        {
            image:  <Image source={require('./../../../assets/dromedario.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Dromedario',
            cont: 'conteudo 5',
           
          },
          //6
        {
            image:  <Image source={require('./../../../assets/leao2.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Leões',
            cont: 'conteudo 6',
           
          },
          //7
        {
            image:  <Image source={require('./../../../assets/tigre.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Tigres',
            cont: 'conteudo 5',
           
          },
          //8
        {
            image: 'imagem6',//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/jacare-cagados.jpg')} />,
            titulo:'Hipopotamo',
            cont: 'conteudo 6',
           
          },
      ]); 

      function carregar(modal){
        setVisivel(true);
        setAnimal(modal);
     }
    return(
        <View style = {styles.container}>
           
            <View style ={styles.territorio}>
                
                    <TouchableOpacity style={styles.buttonTer} title="territorio4" onPress={() =>  carregar(0)}>
                        <Image source={require('./../../../assets/zebrinha.png')} style={styles.imgTer} /> 
                        <Text style={styles.textAnimal}>Rinoceronte</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonTer} title="territorio4" onPress={() =>  carregar(1)}>
                        <Image source={require('./../../../assets/zebrinha.png')} style={styles.imgTer} /> 
                        <Text style={styles.textAnimal}>Zebra</Text>

                    </TouchableOpacity>

            </View>
            <View style ={styles.territorio}>
                
                <TouchableOpacity style={styles.buttonTer} title="territorio4" onPress={() =>  carregar(2)} >
                    <Image source={require('./../../../assets/zebrinha.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Girafa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTer} title="territorio4" onPress={() =>  carregar(3)} >
                    <Image source={require('./../../../assets/zebrinha.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Suricata</Text>

                </TouchableOpacity>

            </View>
            <View style ={styles.territorio}>
                
                <TouchableOpacity style={styles.buttonTer} title="territorio4" onPress={() =>  carregar(4)}>
                    <Image source={require('./../../../assets/zebrinha.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Dromedario</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTer} title="territorio4" onPress={() =>  carregar(5)}>
                    <Image source={require('./../../../assets/zebrinha.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Leões</Text>

                </TouchableOpacity>

            </View>
            <View style ={styles.territorio}>
                
                <TouchableOpacity style={styles.buttonTer} title="territorio4" onPress={() =>  carregar(6)}>
                    <Image source={require('./../../../assets/zebrinha.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Tigres</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTer} title="territorio4" onPress={() =>  carregar(7)}>
                    <Image source={require('./../../../assets/zebrinha.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Hipopotamo</Text>

                </TouchableOpacity>

            </View>

            <Modal visible={visivel} animationType="fade" >
                <View style={styles.modal}>
                    
                    {modalAnimal[animal].image}
                    <Text style={styles.textTitulo}> {modalAnimal[animal].titulo}  </Text>
                    <Text style={styles.text}> {modalAnimal[animal].cont}  </Text>

                    <TouchableOpacity style={styles.Button}  onPress={() => setVisivel(false)}>
                        <Text style={styles.ButtonTxt}>Sair</Text>
                    </TouchableOpacity>

              
                </View>
            </Modal>
     

            <StatusBar style="auto"/>

        </View>
     


    );
}