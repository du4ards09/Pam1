import * as React from 'react';
import {useState} from "react";
import { Text, View, StyleSheet ,Image , TextInput ,Picker} from 'react-native';
import {Checkbox} from "react-native-web";

export default function App() {

  const[nome, setNome] = useState();
  const[telefone, setTel] = useState();
  const[endereco, setEnd] = useState();
  const[email, setEm] = useState();
  


  return (
    <View style={styles.container}>
        <Text style={styles.Text1}>Bem Vindo(a) Usuário(a):</Text>
      <View> 
      <Image
        style={{width: 200, height: 200 ,margin:2 }}
        source={ require("./assets/Logotipo2.png")}
      /> 
      </View>
        <View style={styles.Tabela1}>
        <Text style={styles.Text2}>Digite:</Text>

          <TextInput style={styles.TextInput}
            placeholder="Digite seu Nome:"
            onChangeText={(text) => setNome(text)}
          />
        
          <TextInput style={styles.TextInput}
            placeholder="Digite seu Telefone:"
            onChangeText={(text) => setTel(text)}
          />

          <TextInput style={styles.TextInput}
            placeholder="Digite seu Endereço:"
            onChangeText={(text) => setEnd(text)}
          /> 

         <TextInput style={styles.TextInput}
            placeholder="Digite seu E-mail:"
            onChangeText={(text) => setEm(text)}
         />
      </View>

        <View>
          <Text style={{textAlign:'center', margin: 7,fontFamily:'Wellfleet'}}>Hobby:</Text>
            <Picker style={{width:170,height:30}}>
              <Picker.Item label="Programar" value="Programar"/>
              <Picker.Item label="Ler" value="Ler"/>
              <Picker.Item label="Cantar" value="Cantar"/>
              <Picker.Item label="Dançar" value="Dançar"/>
              <Picker.Item label="Comer" value="Comer"/>
              <Picker.Item label="Viajar" value="Viajar"/>
            </Picker>
        </View>
          <View style={styles.Tabela2}>
            <Text style={styles.Check}>Nome:</Text>
            <Text>{nome}</Text>
            <Text style={styles.Check}>Telefone:</Text>
            <Text>{telefone}</Text>
            <Text style={styles.Check}>Endereço:</Text>
            <Text>{endereco}</Text>
            <Text style={styles.Check}>E-mail:</Text>
            <Text>{email}</Text>
            <Text style={styles.Check}>Hobby:</Text>
            <Text style={styles.Check}>Aceito:</Text>
          </View>
    </View> //principal
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8326E',
    alignItems: 'center',
  },

  Text1: {
     fontFamily:'Wellfleet',
     fontSize: '20px',
     margin: 20,
     color:'#000',
  },

  Text2: {
     fontFamily:'Wellfleet',
     fontSize: '20px',
     margin: 20,
     color:'#000',
     textAlign: 'center',
     borderWidth:2,
     borderRadius:3,
     borderColor: '#FFD9D9',
  },
   
  TextInput: {
    borderWidth: 4,
    fontFamily:'Wellfleet',
    color:'#000000',
    width: '100%',
    height:'30%',
    margin: 3,
    borderRadius:3,
    borderColor: '#FFD9D9',
    marginLeft:1,
  },

  Check:{
    borderStyle: 'solid',
    color:'#000',
    borderRadius:4,
    width: '150px',
  },

  Tabela1: {
    borderColor: '#FFD9D9',
    borderWidth: 2,
    padding: 16,
    borderRadius: 20,
    marginTop: 2,
  },

   Tabela2: {
    borderColor: '#FFD9D9',
    borderWidth: 2,
    padding: 16,
    borderRadius: 20,
    marginTop: 22,
  },
  
});

