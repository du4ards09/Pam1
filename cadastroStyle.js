import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFCCD3',
    },

    logo2: {

        marginLeft: '1rem',
        marginTop: '1rem',
        alignItems: 'center',
        justifyContent: 'center',
    },

    TextInput: {

        width: '20rem',
        height: '2.5rem',
        borderWidth: 4.5,
        borderRadius: 10,
        marginBottom: 6.0,
        borderColor: '#854B56',
        alignItems: 'center',
        color: '#854B56',
        fontWeight: 'bold',
        fontSize: 14,
        justifyContent: 'center',
        backgroundColor: '#FCB3BE',
        fontFamily: 'Andale Mono, monospace,',
    },

    button: {

        width: "10rem",
        height: "2rem",
        borderRadius: 40,
        shadowOpacity: 3,
        shadowRadius: 10,
        marginTop: "2rem",
        marginLeft: '5.5rem',
        paddingVertical: 10,
        shadowColor: '#854B56',
        paddingHorizontal: 20,
        backgroundColor: "#E47D90",
        shadowOffset: { width: 0, height: 4 },
        elevation: 5, // Para sombra funcionar no Android
    },

    buttonText: {

        color: '#854B56',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Andale Mono, monospace,',
    },

})