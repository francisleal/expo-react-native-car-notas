import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';

function BarGastos(props) {

    const navigation = useNavigation();

    function navigationGastos() {
        navigation.navigate('Gastos');
    }

    function navigationHistorico() {
        navigation.navigate('Histórico', { historico: props.id });
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={navigationGastos}>
                {
                    props.home ?
                        <>
                            <FontAwesome5 name={'car'} size={18} color={'#8257E6'} />
                            <Text style={{ fontSize: 11, marginTop: 4, color: '#8257E6' }}>Menu</Text>
                        </>
                        :
                        <>
                            <FontAwesome5 name={'car'} size={18} color={'#707070'} />
                            <Text style={{ fontSize: 11, marginTop: 4, color: '#707070' }}>Menu</Text>
                        </>
                }
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} onPress={navigationHistorico}>
                {
                    props.historico ?
                        <>
                            <FontAwesome5 name={'list'} size={18} color={'#8257E6'} />
                            <Text style={{ fontSize: 11, marginTop: 4, color: '#8257E6' }}>Historico de gastos</Text>
                        </>
                        :
                        <>
                            <FontAwesome5 name={'list'} size={18} color={'#707070'} />
                            <Text style={{ fontSize: 11, marginTop: 4, color: '#707070' }}>Historico de gastos</Text>
                        </>
                }
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        height: 50
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    }
})

export default BarGastos;