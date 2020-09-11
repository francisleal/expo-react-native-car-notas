import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useIsFocused } from '@react-navigation/native'

import { FontAwesome5 } from '@expo/vector-icons';

import { getStorage, updateStorage } from '../../asyncstorage';

import Header from '../../components/Header';
import Main from '../../components/Main';
import Card from '../../components/Card';

function MinhaConta() {

    const isFocused = useIsFocused();
    const navigation = useNavigation();

    const [listarCarros, setListarCarros] = useState([]);

    useEffect(() => {
        handleListar();
    }, [isFocused]);

    async function handleListar() {
        const meuscarrossavenote = await getStorage('meuscarrossavenote');
        setListarCarros(JSON.parse(meuscarrossavenote));
        // console.log(meuscarrossavenote);
    }

    async function handleExcluir(carro) {
        const excluirCarro = listarCarros.filter(car => car.id !== carro.id);

        setListarCarros(excluirCarro);

        await updateStorage('meuscarrossavenote', excluirCarro);
    }

    function handleEditar(conta) {
        navigation.navigate('DadosVeiculo', { titulo: 'Editar Veiculo'});
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header titulo={'Minha conta'} />

            <Main titulo={'Minha conta'}>
                <View>

                    <FlatList

                        data={listarCarros}
                        keyExtractor={item => item.nome}
                        showsVerticalScrollIndicator={false}

                        renderItem={({ item }) => (
                            <Card >
                                <View style={styles.cardTouchable}>
                                    <View style={styles.cardContainer}>
                                        <Text style={styles.cardNome}>{item.nome}</Text>
                                        <Text style={styles.cardPlaca}>{item.placa}</Text>
                                    </View>

                                    <View style={styles.cardOleoContainer}>
                                        <View style={styles.butoes}>
                                            {/* <TouchableOpacity style={styles.icon} onPress={() => handleEditar(item)}>
                                                <Card>
                                                    <FontAwesome5 name={'pen'} size={18} color={'#8257E6'} />
                                                </Card>
                                            </TouchableOpacity> */}

                                            <TouchableOpacity onPress={() => handleExcluir(item)}>
                                                <Card>
                                                    <FontAwesome5 name={'trash'} size={18} color={'#8257E6'} />
                                                </Card>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Card>
                        )}
                    />
                </View>
            </Main>
        </View>
    )
}

const styles = StyleSheet.create({
    butoes: {
        paddingTop: 8,
        flexDirection: 'row',
    },
    icon: {
        marginRight: 8
    },
    // card
    cardTouchable: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        height: 76,
    },
    cardContainer: {
        justifyContent: 'space-evenly',
    },
    cardNome: {
        color: '#000',
        fontWeight: '700',
        fontSize: 20
    },
    cardPlaca: {
        fontSize: 16,
        color: '#707070',
    },
});

export default MinhaConta;