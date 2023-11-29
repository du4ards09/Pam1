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
          image:  <Image source={require('./../../../assets/chimpanzé.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
          titulo:'Chimpanzé',
          cont:'conteudo',
         
        },
        //2
        {
            image:  <Image source={require('./../../../assets/orangutango.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Orangotango',
          cont: 'conteudo 2',
         
        },
          //3
        {
            image:  <Image source={require('./../../../assets/primatas brasileiros 2.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Primatas',
            cont: 'conteudo 3',
           
          },   
          //4
        {
            image:  <Image source={require('./../../../assets/muriqui do sul 3.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Muriqui-do-Sul',
            cont: 'conteudo 4',
           
          },
         
      ]); 

      function carregar(modal){
        setVisivel(true);
        setAnimal(modal);
     }

    return(
        <View style = {styles.container}>
           
            <View style ={styles.territorio}>
                
                <TouchableOpacity style={styles.buttonTer} title="territorio6" onPress={() =>  carregar(0)}>
                    <Image source={require('./../../../assets/macaquinho.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Chimpanzé</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTer} title="territorio6" onPress={() =>  carregar(1)}>
                    <Image source={require('./../../../assets/macaquinho.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Orangotango</Text>

                </TouchableOpacity>

            </View>
            <View style ={styles.territorio}>
                
                <TouchableOpacity style={styles.buttonTer} title="territorio6" onPress={() =>  carregar(2)}>
                    <Image source={require('./../../../assets/macaquinho.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Primatas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTer} title="territorio6" onPress={() =>  carregar(3)}>
                    <Image source={require('./../../../assets/macaquinho.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Muriqui-do-Sul</Text>

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