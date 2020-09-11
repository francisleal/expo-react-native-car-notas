import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getStorage, setStorage, clearStorage } from '../../asyncstorage';

import ButtonAction from '../../components/ButtonAction';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Main from '../../components/Main';

function DadosVeiculo({ route }) {

    const navigation = useNavigation();

    const [nome, setNome] = useState('');
    const [placa, setPlaca] = useState('');

    async function handleSalvar() {
        const input = { nome, placa, id: Date.now() };

        if (input.nome === '') {
            Alert.alert('Informe o nome do veículo');
        } else if (input.placa === '') {
            Alert.alert('Informe o nome da placa');
        } else {
            await setStorage('meuscarrossavenote', input);
            handleVoltar();
        }
    }

    async function handleListar() {
        let meuscarrossavenote = await getStorage('meuscarrossavenote');
        console.log(meuscarrossavenote);
    }

    function handleLimpar() {
        clearStorage();
    }

    function handleVoltar() {
        navigation.navigate('Inicio');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header titulo={route.params.titulo} voltar={true} onPressProps={handleVoltar} />

            <Main titulo={'Dados do veículo'}>
                <View>
                    <Input
                        legend={'Nome'}
                        placeholder={'Nome'}
                        value={nome}
                        propsOnChangeText={setNome}
                    />

                    <View style={{ padding: 8 }}></View>

                    <Input
                        legend={'Placa'}
                        placeholder={'Placa'}
                        value={placa}
                        propsOnChangeText={setPlaca}
                    />
                </View>

                <View>
                    <ButtonAction text={'Salvar'} onPressProps={handleSalvar} />
                    <ButtonAction text={'listar'} onPressProps={handleListar} />
                    <ButtonAction text={'clear'} onPressProps={handleLimpar} />
                </View>
            </Main>
        </View>
    )
}

export default DadosVeiculo;