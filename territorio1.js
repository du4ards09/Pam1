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
        
        {image:  <Image source={require('./../../../assets/oncaPintada.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
        titulo:'Onça Pintada',
        cont:'A onça-pintada ou jaguar, também conhecida como onça-preta, é uma espécie de mamífero carnívoro da família dos felídeos encontrada nas Américas. É o terceiro maior felino do mundo, após o tigre e o leão, e o maior do continente americano. ',},
        //2
        {image:  <Image source={require('./../../../assets/jacare-cagados.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
        titulo:'Jacare e Cágados',
        cont: 'Pode viver até 50 anos. Os jacarés são animais ecologicamente importantes, pois fazem o controle biológico de outras espécies de animais, pois se alimentam dos animais mais velhos e fracos que não conseguem escapar de seu ataque. Além disso, suas fezes servem de alimento a peixes e outros seres vivos aquáticos.',},
          //3
        {image:  <Image source={require('./../../../assets/Elefante.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
        titulo:'Elefante',
        cont: 'Boa memoria, persistência, determinação, solidariedade, sociabilidade, amizade, companheirismo, postura, autoridade, longevidade, sabedoria e majestade são algumas das qualidades que representa. A cultura ocidental considera o elefante como o animal que representa o peso, a lentidão e a falta de jeito.',},   
          //4
        {image:  <Image source={require('./../../../assets/Flamingo.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
        titulo:'Flamingo',
        cont: 'Flamingos ou flamingos são um tipo de ave pernalta da família Phoenicopteridae, que é a única família existente na ordem Phoenicopteriformes. Existem quatro espécies de flamingos distribuídas pelas Américas e duas espécies nativas da Afro-Eurásia. Um grupo de flamingos é chamado de "exuberância".',},
          //5
        {image:  <Image source={require('./../../../assets/onçaParda.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
        titulo:'Onça Parda',
        cont: 'A onça-parda ou puma, também conhecida no Brasil por suçuarana e leão-baio, é um mamífero carnívoro da família dos felídeos e gênero Puma, nativo da América. Foi originalmente classificada no gênero Felis, mas estudos genéticos demonstram que a espécie evoluiu em uma linhagem próxima à chita e ao gato-mourisco.', },
          //6
        {image:  <Image source={require('./../../../assets/pequenosFelinos.jpg')} style={styles.imgModal} /> ,//<Image style={{width:280, height:280,marginBottom:8}} source={require('./assets/oncaPintada.jpg')} />,
        titulo:'Pequenos Felinos',
        cont: 'Os felinos fazem parte da grande família de mamíferos carnívoros, que vai desde o gato doméstico até o leão, o rei da selva. Todos apresentam garras longas e encurvadas e alguns deles possuem unhas retrateis, ou seja, quando o animal as encolhe, elas são envolvidas pelas dobras da pele.',},
    ]); 

    function carregar(modal){
        setVisivel(true);
        setAnimal(modal);
    }

    return(
        <View style = {styles.container}>
            <View style ={styles.territorio}>
                <TouchableOpacity style={styles.buttonTer} title="territorio1"  onPress={() =>  carregar(0)}>
                    <Image source={require('./../../../assets/Animais/7.png')} style={styles.imgTer} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTer} title="territorio1"  onPress={() =>  carregar(1)}>
                    <Image source={require('./../../../assets/Animais/9.png')} style={styles.imgTer} /> 
                </TouchableOpacity>
            </View>
            <View style ={styles.territorio}>
                <TouchableOpacity style={styles.buttonTer} title="territorio1" onPress={() =>  carregar(2)}>
                    <Image source={require('./../../../assets/Animais/10.png')} style={styles.imgTer} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTer} title="territorio1" onPress={() =>  carregar(3)}>
                    <Image source={require('./../../../assets/Animais/11.png')} style={styles.imgTer} /> 
                </TouchableOpacity>
            </View>
            <View style ={styles.territorio}>
                <TouchableOpacity style={styles.buttonTer} title="territorio1" onPress={() =>  carregar(4)}>
                    <Image source={require('./../../../assets/Animais/8.png')} style={styles.imgTer} /> 
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonTer} title="territorio1" onPress={() =>  carregar(5)}>
                    <Image source={require('./../../../assets/Animais/12.png')} style={styles.imgTer} /> 
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