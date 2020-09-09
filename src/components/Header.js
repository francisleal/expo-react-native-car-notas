import React from 'react';
import { Text, View } from 'react-native';

function Header(props) {

    return (
        <View style={styles.header}>
            <Text style={styles.texto}>{props.titulo}</Text>
        </View>
    )
}

const styles = {
    header: {
        height: 60,
        display: "flex",
        backgroundColor: '#8257E6',
        justifyContent: 'center',
        padding: 16
    },
    texto: {
        color:'#fff',
        fontSize: 20,
        fontWeight: 'bold'
    }
}

export default Header;