import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { FontAwesome5 } from '@expo/vector-icons';

import BarGastos from '../../components/BarGastos';
import Header from '../../components/Header';
import Main from '../../components/Main';


function Gastos({ route }) {

    const navigation = useNavigation();

    function navigationVoltar() {
        navigation.navigate('Inicio');
    }

    function navigationProximaTrocaDeOleo() {
        navigation.navigate('Próxima troca de oleo', { dados: route.params.dados });
    }

    function navigationMecanicaGeral() {
        navigation.navigate('Mecânica geral', { dados: route.params.dados });
    }

    function navigationCombustivel() {
        navigation.navigate('Combustível', { dados: route.params.dados });
    }

    function navigationOutros() {
        navigation.navigate('Outros', { dados: route.params.dados });
    }

    return (
        <View style={styles.container}>
            <Header titulo={'Início'} voltar={true} onPressProps={navigationVoltar} />
            <Main>
                <View>
                    <View style={styles.sectionCardButton}>
                        <TouchableOpacity style={styles.cardButton} onPress={navigationProximaTrocaDeOleo}>
                            <FontAwesome5 name={'oil-can'} size={20} color={'#fff'} />
                            <Text style={styles.cardTextButton}>Próxima troca de oleo</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardButton} onPress={navigationCombustivel}>
                            <FontAwesome5 name={'gas-pump'} size={20} color={'#fff'} style={styles.cardIconButton} />
                            <Text style={styles.cardTextButton}>Combustível</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.sectionCardButton}>
                        <TouchableOpacity style={styles.cardButton} onPress={navigationMecanicaGeral}>
                            <FontAwesome5 name={'wrench'} size={20} color={'#fff'} style={styles.cardIconButton} />
                            <Text style={styles.cardTextButton}>Mecânica geral</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.cardButton} onPress={navigationOutros}>
                            <FontAwesome5 name={'cog'} size={20} color={'#fff'} style={styles.cardIconButton} />
                            <Text style={styles.cardTextButton}>Outros</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Main>
            <BarGastos home={true} id={route.params.dados.id} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sectionCardButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardButton: {
        backgroundColor: '#8257E6',
        borderRadius: 5,
        width: 150,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 28,
        padding: 16
    },
    cardTextButton: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
    },
    cardIconButton: {
        marginBottom: 6
    }
});

export default Gastos;