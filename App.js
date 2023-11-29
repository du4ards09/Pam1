import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/Home/home';
import Cadastro from './src/pages/Cadastro/cadastro';
import Saudacao from './src/pages/Saudacao/saudacao';
import Sobre from './src/pages/Sobre/sobreIndex';
import Territorios from './src/pages/Territorios/territorio1';
import Territorios2 from './src/pages/Territorios/territorio2';
import Territorios3 from './src/pages/Territorios/territorio3';
import Territorios4 from './src/pages/Territorios/territorio4';
import Territorios5 from './src/pages/Territorios/territorio5';
import Territorios6 from './src/pages/Territorios/territorio6';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{
          title: "Safari Do Amor",
          headerShown: false,
        }}/>
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{
          title: "Cadastre - se",
          headerTitleStyle:{fontSize:30, color: '#854B56', marginLeft: 40, fontFamily: 'Andale Mono, monospace,', fontWeight: 'bold',},
          headerStyle:{backgroundColor: "#FCB3BE",alignItems:"center",} 
        }}/>
        <Stack.Screen name="Saudacao" component={Saudacao}
          options={{
          title: "Bem Vindo(a) ao Zoo!",
          headerTitleStyle:{fontSize:20, color: '#854B56', marginLeft: 18, fontFamily: 'Andale Mono, monospace,', fontWeight: 'bold',},
          headerStyle:{backgroundColor: "#FCB3BE",alignItems:"center",} 
        }}/>
        <Stack.Screen name="Sobre" component={Sobre}
          options={{
          title: "Menu",
          headerTitleStyle:{fontSize:20, color: '#854B56', marginLeft: 88, fontFamily: 'Andale Mono, monospace,', fontWeight: 'bold',},
          headerStyle:{backgroundColor: "#FCB3BE",alignItems:"center",} 
        }}/>
        <Stack.Screen name="Territorio1" component={Territorios}
        options={{
          title: "Territorio 1",
          headerTitleStyle:{fontSize:30, color: '#854B56', marginLeft: 28, fontFamily: 'Andale Mono, monospace,', fontWeight: 'bold',},
          headerStyle:{backgroundColor: "#FCB3BE",alignItems:"center",} 
        }}/>
        <Stack.Screen name="Ter2" component={Territorios2}
        options={{
          title: "Territorio 2",
          headerTitleStyle:{fontSize:30, color: '#854B56', marginLeft: 28, fontFamily: 'Andale Mono, monospace,', fontWeight: 'bold',},
          headerStyle:{backgroundColor: "#FCB3BE",alignItems:"center",} 
        }}/>
        <Stack.Screen name="Ter3" component={Territorios3}
        options={{
          title: "Territorio 3",
          headerTitleStyle:{fontSize:30, color: '#854B56', marginLeft: 28, fontFamily: 'Andale Mono, monospace,', fontWeight: 'bold',},
          headerStyle:{backgroundColor: "#FCB3BE",alignItems:"center",} 
        }}/>
        <Stack.Screen name="Ter4" component={Territorios4}
        options={{
          title: "Territorio 4",
          headerTitleStyle:{fontSize:30, color: '#854B56', marginLeft: 28, fontFamily: 'Andale Mono, monospace,', fontWeight: 'bold',},
          headerStyle:{backgroundColor: "#FCB3BE",alignItems:"center",} 
        }}/>
        <Stack.Screen name="Ter5" component={Territorios5}
        options={{
          title: "Territorio 5",
          headerTitleStyle:{fontSize:30, color: '#854B56', marginLeft: 28, fontFamily: 'Andale Mono, monospace,', fontWeight: 'bold',},
          headerStyle:{backgroundColor: "#FCB3BE",alignItems:"center",} 
        }}/>
        <Stack.Screen name="Ter6" component={Territorios6}
        options={{
          title: "Territorio 6",
          headerTitleStyle:{fontSize:30, color: '#854B56', marginLeft: 28, fontFamily: 'Andale Mono, monospace,', fontWeight: 'bold',},
          headerStyle:{backgroundColor: "#FCB3BE",alignItems:"center",} 
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


