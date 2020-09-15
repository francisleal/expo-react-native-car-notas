import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { getStorage, updateStorage } from '../../asyncstorage';

import ButtonAction from '../../components/ButtonAction';
import BarGastos from '../../components/BarGastos';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Main from '../../components/Main';

function GastosMecanicaGeral({ route }) {

    const navigation = useNavigation();

    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');

    async function handleSalvar() {
        if (valor === '' || descricao === '') {
            Alert.alert('Campo em branco');
        } else {
            const storage = await getStorage(route.params.dados.id.toString());

            let atualizardb = JSON.parse(storage);

            atualizardb.push({
                id: Date.now(),
                mecanicaData: Date.now(),
                mecanicaValor: valor,
                mecanicaDescricao: descricao,
            });

            await updateStorage(route.params.dados.id.toString(), atualizardb);

            Alert.alert('salvo com sucesso');
        }
    }

    function navigationVoltar() {
        navigation.navigate('Gastos');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header titulo={'Mecânica geral'} voltar={true} onPressProps={navigationVoltar} />
            <Main titulo={'Gastos com mecânica em geral'}>
                <View>
                    <Input
                        legend={'Descrição'}
                        placeholder={'Descrição'}
                        value={descricao}
                        propsOnChangeText={setDescricao}
                    />
                    <View style={{ padding: 8 }}></View>
                    <Input
                        type='numeric'
                        legend={'valor'}
                        placeholder={'0'}
                        value={valor}
                        propsOnChangeText={setValor}
                    />
                </View>
                <ButtonAction text={'Salvar'} onPressProps={handleSalvar} />
            </Main>

            <BarGastos id={route.params.dados.id} />
        </View>
    )
}

export default GastosMecanicaGeral;