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
          image:  <Image source={require('./../../../assets/Axalote2.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
          titulo:'Axalote',
          cont:'conteudo',
         
        },
        //2
        {
            image:  <Image source={require('./../../../assets/Raposinha-do-campo.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Raposa',
          cont: 'conteudo 2',
         
        },
          //3
        {
            image:  <Image source={require('./../../../assets/Cachorro-do-mato.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Cachorro do mato',
            cont: 'conteudo 3',
           
          },   
          //4
        {
            image:  <Image source={require('./../../../assets/Tamanduá-bandeira.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Tamandua Bandeira',
            cont: 'conteudo 4',
           
          },
          //5
        {
            image:  <Image source={require('./../../../assets/Urso-de-óculos.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Urso de oculos',
            cont: 'conteudo 5',
           
          },
          //6
        {
            image:  <Image source={require('./../../../assets/dinossauros.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Dinossauro',
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
                
                    <TouchableOpacity style={styles.buttonTer} title="territorio3" onPress={() =>  carregar(0)} >
                        <Image source={require('./../../../assets/dino.png')} style={styles.imgTer} /> 
                        <Text style={styles.textAnimal}>Axalote</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonTer} title="territorio3" onPress={() =>  carregar(1)}>
                        <Image source={require('./../../../assets/dino.png')} style={styles.imgTer} /> 
                        <Text style={styles.textAnimal}>Raposa</Text>

                    </TouchableOpacity>

            </View>
            <View style ={styles.territorio}>
                
                <TouchableOpacity style={styles.buttonTer} title="territorio3"onPress={() =>  carregar(2)} >
                    <Image source={require('./../../../assets/dino.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Cachorro do mato</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTer} title="territorio3"onPress={() =>  carregar(3)} >
                    <Image source={require('./../../../assets/dino.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Tamandua Bandeira</Text>

                </TouchableOpacity>

            </View>
            <View style ={styles.territorio}>
                
                <TouchableOpacity style={styles.buttonTer} title="territorio3" onPress={() =>  carregar(4)}>
                    <Image source={require('./../../../assets/dino.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Urso de oculos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTer} title="territorio3"onPress={() =>  carregar(5)} >
                    <Image source={require('./../../../assets/dino.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Dinossauro</Text>

                </TouchableOpacity>

            </View>

            <Modal visible={visivel} animationType="fade" >
                <View style={styles.modal}>
                    
                    {modalAnimal[animal].image}
                    <Text style={styles.textTitulo}> {modalAnimal[animal].titulo}  </Text>
                    <Text style={styles.text}> Conteudo: {modalAnimal[animal].cont}  </Text>

                    <TouchableOpacity style={styles.Button}  onPress={() => setVisivel(false)}>
                        <Text style={styles.ButtonTxt}>Sair</Text>
                    </TouchableOpacity>

              
                </View>
            </Modal>
     

            <StatusBar style="auto"/>

        </View>
     


    );
}