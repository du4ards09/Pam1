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
        
        {image:  <Image source={require('./../../../assets/avesMataAtlantica.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
        titulo:'Aves da Mata Atlântica',
        cont:'A Mata Atlântica é uma das regiões mais biodiversas do mundo, abrigando uma variedade incrível de aves. Entre as espécies presentes, destacam-se aves como a saíra-sete-cores, o sabiá-laranjeira, o beija-flor-de-peito-azul, a araponga e o tiê-sangue. Essas aves desempenham papéis vitais nos ecossistemas da Mata Atlântica, contribuindo para a polinização de plantas, dispersão de sementes e equilíbrio da fauna. No entanto, a Mata Atlântica enfrenta sérios desafios devido à perda de habitat, sendo crucial a conservação dessas áreas para a preservação dessas aves e de toda a diversidade biológica associada a esse ecossistema único.',},
        //2
        {
            image:  <Image source={require('./../../../assets/coruja.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Coruja',
          cont: 'conteudo 2',
         
        },
          //3
        {
            image:  <Image source={require('./../../../assets/formiga.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Formigueiro',
            cont: 'conteudo 3',
           
          },   
          //4
        {
            image:  <Image source={require('./../../../assets/mico.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Mico',
            cont: 'conteudo 4',
           
          },
          //5
        {
            image:  <Image source={require('./../../../assets/sapinho.png')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
            titulo:'Invertebrados',
            cont: 'conteudo 5',
           
          },
          //6
        {
            image: 'imagem6',//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/jacare-cagados.jpg')} />,
            titulo:'Papagaio',
            cont: 'conteudo 6',
           
          },
          //7
        {
            image: 'imagem5',//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/jacare-cagados.jpg')} />,
            titulo:'Anfibios',
            cont: 'conteudo 5',
           
          },
          //8
        {
            image: 'imagem6',//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/jacare-cagados.jpg')} />,
            titulo:'Serpente',
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
                
                    <TouchableOpacity style={styles.buttonTer} title="territorio2" onPress={() =>  carregar(0)}>
                        <Image source={require('./../../../assets/Animais/14.png')} style={styles.imgTer} /> 
                        <Text style={styles.textAnimal}> Arara </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonTer} title="territorio2" onPress={() =>  carregar(1)}>
                        <Image source={require('./../../../assets/Animais/13.png')} style={styles.imgTer} /> 
                        <Text style={styles.textAnimal}>Coruja</Text>
                    </TouchableOpacity>

            </View>
            <View style ={styles.territorio}>
                
                <TouchableOpacity style={styles.buttonTer} title="territorio2" onPress={() =>  carregar(2)}>
                    <Image source={require('./../../../assets/territorio-2/foormiga-Kids.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Formigueiro</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTer} title="territorio2" onPress={() =>  carregar(3)}>
                    <Image source={require('./../../../assets/territorio-2/mico-Kids.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Micos</Text>

                </TouchableOpacity>

            </View>
            <View style ={styles.territorio}>
                
                <TouchableOpacity style={styles.buttonTer} title="territorio2" onPress={() =>  carregar(4)}>
                    <Image source={require('./../../../assets/territorio-2/minhoca-Kids.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Invertebrados</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTer} title="territorio2" onPress={() =>  carregar(5)}>
                    <Image source={require('./../../../assets/territorio-2/papagaio-Kids.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Papagaio</Text>

                </TouchableOpacity>

            </View>

            <View style ={styles.territorio}>
                
                <TouchableOpacity style={styles.buttonTer} title="territorio2" onPress={() =>  carregar(4)}>
                    <Image source={require('./../../../assets/territorio-2/sapo-Kids.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Anfibios</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonTer} title="territorio2" onPress={() =>  carregar(5)}>
                    <Image source={require('./../../../assets/territorio-2/serpente-Kids.png')} style={styles.imgTer} /> 
                    <Text style={styles.textAnimal}>Serpentes</Text>

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