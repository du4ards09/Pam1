import styles from './styleHome';
import { Touchable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Text, View, Image, Button,TouchableOpacity } from "react-native-web";

export default function Home(){

    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('./../../../assets/SafariDoAmor-Zoo-kids.png')} style={{ width: 400, height: 400,}}/> 
            </View>
            <View style = {styles.TouchableOpacity}>
                <TouchableOpacity style={styles.TOpacity1} onPress={() => navigation.navigate('Cadastro')}>
                    <Text style={styles.TouchableOpacityText}> Cadastre - se </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}