import { StyleSheet } from "react-native";

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

    TouchableOpacity: {
        flex: 1,
    },

    TOpacity1:{

        width: "14rem",
        height: "4rem",
        borderRadius: 40,
        shadowOpacity: 3,
        shadowRadius: 10,
        marginTop: "2rem",
        paddingVertical: 10,
        shadowColor: '#854B56',
        paddingHorizontal: 20,
        backgroundColor: "#E47D90",
        shadowOffset: { width: 0, height: 4 },
        elevation: 5, // Para sombra funcionar no Android
    },

    TouchableOpacityText: {

        color: '#854B56',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 6,
        fontFamily: 'Andale Mono, monospace,',
    },

})