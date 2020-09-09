import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Header from '../../components/Header';
import Card from '../../components/Card';

import styles from './styles';

function Inicio() {

    const navigation = useNavigation();

    function navigationGastos() {
        navigation.navigate('Gastos')
    }

    return (
        <View style={styles.container}>
            <Header titulo={'Início'} />

            <View style={styles.main}>
                <View style={styles.titulo}>
                    <Text style={styles.tituloTexto}>Meus carros</Text>
                </View>


                <Card >
                    <TouchableOpacity style={styles.cardTouchable}>
                        <View style={styles.cardContainer}>
                            <Text style={styles.cardNome}>Opalão</Text>
                            <Text style={styles.cardPlaca}>JHC-4330</Text>
                        </View>
                        <View style={styles.cardOleoContainer}>
                            <Text style={styles.cardProximaTroca}>Próxima troca de óleo</Text>
                            <Text style={styles.cardOleo}>79.998</Text>
                        </View>
                    </TouchableOpacity>
                </Card>


                <View>
                    <TouchableOpacity style={styles.btnAdicionarVeiculo}>
                        <Text style={styles.btnAdicionarVeiculoText}>Adicionar novo veículo</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Inicio;