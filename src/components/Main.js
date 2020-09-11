import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

function Main(props) {

    return (
        <View style={styles.main} >

            <View style={styles.titulo}>
                <Text style={styles.tituloTexto}>{props.titulo}</Text>
            </View>

            <View style={styles.section}>
                {props.children}
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    main: {
        flex: 1,
        padding: 16,
    },
    titulo: {
        paddingBottom: 16
    },
    tituloTexto: {
        color: '#707070',
        fontSize: 16
    },
    section: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between'
    }
}

export default Main;