import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

function Header(props) {

    return (
        <View style={styles.header}>
            {
                props.voltar &&

                <TouchableOpacity style={styles.buttonVoltar} onPress={props.onPressProps}>
                    <FontAwesome5 name="chevron-left" size={16} color="#fff" />
                </TouchableOpacity>
            }

            <Text style={styles.texto}>{props.titulo}</Text>
        </View>
    )
}

const styles = {
    header: {
        height: 70,
        display: "flex",
        backgroundColor: '#8257E6',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16
    },
    buttonVoltar: {
        paddingRight: 16
    },
    texto: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
}

export default Header;