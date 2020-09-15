import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { getStorage, updateStorage } from '../../asyncstorage';

import ButtonAction from '../../components/ButtonAction';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Main from '../../components/Main';

function GastosOutros({ route }) {

    const navigation = useNavigation();

    const [valor, setValor] = useState('');
    const [descricao, setDescricao] = useState('');


    async function handleSalvar() {
        const storage = await getStorage(route.params.dados.id.toString());

        let atualizardb = JSON.parse(storage);

        atualizardb.push({
            id: Date.now(),
            outrosData: Date.now(),
            outrosValor: valor,
            outrosDescricao: descricao,
        });

        await updateStorage(route.params.dados.id.toString(), atualizardb);

        console.log(atualizardb);

        // Alert.alert('salvo com sucesso');
    }

    function navigationVoltar() {
        navigation.navigate('Gastos');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header titulo={'Outros'} voltar={true} onPressProps={navigationVoltar} />
            <Main titulo={'Gastos com veículo'}>
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
        </View>
    )
}

export default GastosOutros;