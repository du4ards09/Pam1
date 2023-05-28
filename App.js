
import { Picker, StyleSheet, Text, View, Image , TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import {CheckBox} from 'react-native-web';

export default function App() {
  const [img, setImg] = useState(0);
  const [impressao , setImpresao] = useState("")
  const [forca, setForca] = useState(false)
  const [p1, setP1] = useState(0)
  const [p2, setP2] = useState(0)
  const [pt1, setPt1] = useState(0)
  const [pt2, setPt2] = useState(0)

  const pos =[
    1,
    2,
    3,
  ];

  function jogar(p){
    setP1(p)
    let numAleatorio = Math.floor(Math.random() * 3)+1;
    setP2(numAleatorio)
    if(p==1 && numAleatorio==3){
      let ponto = pt1+1;
      setPt1(ponto)
    }
    if(p==2 && numAleatorio==1){
      let ponto = pt1+1;
      setPt1(ponto)
    }  
    if(p==3 && numAleatorio==2){
      let ponto = pt1+1;
      setPt1(ponto)
    }  
    if(p==3 && numAleatorio==1){
      let ponto1 = pt2+1;
      setPt2(ponto1)
    }  
    if(p==1 && numAleatorio==2){
      let ponto1 = pt2+1;
      setPt2(ponto1)
    } 
    if(p==2 && numAleatorio==3){
      let ponto1 = pt2+1;
      setPt2(ponto1)
    }
  }


  function exibirImagem(numero){
    if(numero==0){
      return(<Image source={require('./assets/caixa floral.png')} style={styles.img2} />)
    }
    if(numero==1){
      return(<Image source={require('./assets/pedra floral.png')} style={styles.img2} />)
    }
    if(numero==2){
      return(<Image source={require('./assets/papel floral.png')} style={styles.img2} />)
    }
    if(numero==3){
      return(<Image source={require('./assets/tesoura floral.png')} style={styles.img2} />)
    }
  }


  function novo(){
    setPt1(0)
    setPt2(0)
    setP1(0)
    setP2(0)
  }

  return (
    <View style={styles.container} >
      <View style={styles.area} >
        <Image source={require('./assets/Pink Floral (1).png')} style={styles.img} />
      </View>

      <View style={styles.area} >
        <Text style={styles.txt} >PLACAR</Text>
        <Text style={styles.txt} > <Text>{pt1}</Text>         <Text>{pt2}</Text> </Text>
      </View>

      <View style={styles.area} >
        <Text>
          {exibirImagem(p1)}
          <TouchableOpacity onPress={()=>jogo()} >  
            <View style={styles.btnArea} >
              <Image source={require('./assets/versus.png')} style={styles.img4} />
            </View>
          </TouchableOpacity>
          {exibirImagem(p2)}
        </Text>
      </View>

      <View style={styles.area} >
        <TouchableOpacity style={styles.botao} onPress={()=>novo()} >  
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>NOVA PARTIDA</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.area} >
        <Text>
          <TouchableOpacity onPress={()=>jogar(1)} >  
            <View style={styles.btnArea} >
              <Image source={require('./assets/pedra floral.png')} style={styles.img2} />
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={()=>jogar(2)} >  
            <View style={styles.btnArea} >
              <Image source={require('./assets/papel floral.png')} style={styles.img2} />
            </View>

          </TouchableOpacity>
          <TouchableOpacity onPress={()=>jogar(3)} >  
            <View style={styles.btnArea} >
              <Image source={require('./assets/tesoura floral.png')} style={styles.img2} />
            </View>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
  );
  }
  
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#FA8072',
    alignItems: 'center',
    justifyContent: 'center',
  },

  btnArea: {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },

  btnTexto: {
    fontSize:18,
    fontWeight:'bold',
    textAlign: 'center',
  },

  botao:{
    backgroundColor:'#FE5655',
    width:230,
    height:50,
    borderWidth:2,
    margin:10
  },

  img:{
    height:120,
    width:370,
  },

  img2:{
    height:70,
    width:90,
    marginLeft:15,
  },


  img4:{
    height:80,
    width:90,
    marginLeft:15,
  },

  area:{
    flex:1,
  },

  txt:{
    color:'#0F9498',
    fontFamily:'arial',
    fontSize:35,
    textAlign:'center',
    fontWeight:'bold'
  }

});

