import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { getStorage, updateStorage } from '../../asyncstorage';

import ButtonAction from '../../components/ButtonAction';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Main from '../../components/Main';

function GastosCombustivel({ route }) {

    const navigation = useNavigation();

    const [combustivel, setCombustivel] = useState('');


    async function handleSalvar() {

        if (combustivel === '') {
            Alert.alert('Campo em branco');
        } else {
            const storage = await getStorage(route.params.dados.id.toString());

            let atualizardb = JSON.parse(storage);

            atualizardb.push({
                id: Date.now(),
                combustivelData: Date.now(),
                combustivelValor: combustivel
            });

            await updateStorage(route.params.dados.id.toString(), atualizardb);

            console.log(atualizardb);

            // Alert.alert('salvo com sucesso');
        }
    }

    function navigationVoltar() {
        navigation.navigate('Gastos');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header titulo={'Combustível'} voltar={true} onPressProps={navigationVoltar} />
            <Main titulo={'Valor gasto no combustível'}>
                <Input
                    type='numeric'
                    legend={'combustível'}
                    placeholder={'0'}
                    value={combustivel}
                    propsOnChangeText={setCombustivel}
                />

                <ButtonAction text={'Salvar'} onPressProps={handleSalvar} />
            </Main>
        </View>
    )
}

export default GastosCombustivel;