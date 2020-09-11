import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },   
    // botão
    btnAdicionarVeiculo: {
        backgroundColor: '#8257E6',
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        borderRadius: 3,
        borderWidth: 0,
        marginBottom: 16,

       shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,        
        elevation: 5,

    },
    btnAdicionarVeiculoText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700',

    },
    // cardTouchable
    cardTouchable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 76,
    },
    cardNome: {
        color:'#000',
        fontWeight: '700',
        fontSize: 20
    },
    cardPlaca: {
        fontSize: 16,
        color: '#707070',
    },
    cardContainer: {
        justifyContent: 'space-evenly',
    },
    cardOleoContainer: {
        justifyContent: 'flex-end',
    },
    cardProximaTroca: {
        fontSize: 10,
        color: '#707070',
    },
    cardOleo: {
        fontSize: 12,
        color: '#8257E6',
        display: 'flex',
        textAlign: 'right',
    },
    list: {
        marginBottom: 100
    }
})