import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native'

import Header from '../../components/Header';
import Card from '../../components/Card';
import Main from '../../components/Main';


import { getStorage } from '../../asyncstorage';

import styles from './styles';

function Inicio() {

    const navigation = useNavigation();

    const isFocused = useIsFocused();

    const [listarCarros, setListarCarros] = useState([]);

    useEffect(() => {
        handleListar();
    }, [isFocused]);

    async function handleListar() {
        let meuscarrossavenote = await getStorage('meuscarrossavenote');
        setListarCarros(JSON.parse(meuscarrossavenote));
    }

    function navigationAddNovoVeiculo() {
        navigation.navigate('DadosVeiculo', {titulo: 'Adicionar novo veículo'});
    }

    return (
        <View style={styles.container}>
            <Header titulo={'Início'} />

            <Main titulo={'Meus carros'}>
                <View>
                    <TouchableOpacity style={styles.btnAdicionarVeiculo} onPress={navigationAddNovoVeiculo}>
                        <Text style={styles.btnAdicionarVeiculoText}>Adicionar novo veículo</Text>
                    </TouchableOpacity>

                    <FlatList
                        style={styles.list}
                        data={listarCarros}
                        keyExtractor={item => item.nome}
                        showsVerticalScrollIndicator={false}

                        renderItem={({ item }) => (
                            <Card >
                                <TouchableOpacity style={styles.cardTouchable}>
                                    <View style={styles.cardContainer}>
                                        <Text style={styles.cardNome}>{item.nome}</Text>
                                        <Text style={styles.cardPlaca}>{item.placa}</Text>
                                    </View>
                                    <View style={styles.cardOleoContainer}>
                                        <Text style={styles.cardProximaTroca}>Próxima troca de óleo</Text>
                                        <Text style={styles.cardOleo}>79.998</Text>
                                    </View>
                                </TouchableOpacity>
                            </Card>
                        )}
                    />

                </View>
            </Main>
        </View>
    )
}

export default Inicio;