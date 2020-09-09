import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function ButtonAction(props) {

    const styles = {
        botao: {
            backgroundColor: '#8257E6',
            justifyContent: 'center',
            alignItems: 'center',
            padding: 16,
            borderRadius: 3,
            borderWidth: 0,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2, },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            marginBottom: 16
        },
        textoBotao: {
            color: '#fff',
            fontWeight: 'bold'
        }
    }

    return (
        <TouchableOpacity style={styles.botao} onPress={props.onPressProps}>
            <Text style={styles.textoBotao}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default ButtonAction;