import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFCCD3',
    },

    logo: {

        flex: 1,
        marginTop: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
    },

    Text: {

        color: '#854B56',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '6rem',
        fontFamily: 'Andale Mono, monospace,',
    },

    Text1: {

        color: '#854B56',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Andale Mono, monospace,',
    },


    Touchs: {
        
        flex: 1,
        marginTop: 16,
        flexDirection: 'row', // Para alinhar os botões lado a lado
        justifyContent: 'space-between', // Espaço uniforme entre os botões
    },

    To: {
       
        width: '4rem', // Largura
        height: '2rem', // Altura
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        backgroundColor: '#E47D90',
        elevation: 5, // Para sombra funcionar no Android
        borderRadius: 50, // Um valor grande para criar uma forma oval
    },

    ToTxt: {

        fontSize: 12,
        marginTop: 8,
        color: "#854B56",
        fontWeight: 'bold',
        fontFamily: 'Andale Mono, monospace,',
    },
})