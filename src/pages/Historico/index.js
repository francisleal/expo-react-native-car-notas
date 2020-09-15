import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { getStorage, updateStorage } from '../../asyncstorage';

import Main from '../../components/Main';
import Header from '../../components/Header';
import BarGastos from '../../components/BarGastos';

function Historico({ route }) {

    const navigation = useNavigation();

    const [listarHistorico, setListarHistorico] = useState('');
    const [refresh, setRefresh] = useState(Date.now());

    useEffect(() => {
        async function listar() {
            const storage = await getStorage(route.params.historico.toString());
            setListarHistorico(JSON.parse(storage));

            console.log('Historico1', listarHistorico);

            setRefresh(1)

        } listar();

    }, [refresh]);

    function navigationVoltar() {
        navigation.navigate('Inicio');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header titulo={'Histórico'} voltar={true} onPressProps={navigationVoltar} />

            <Main titulo={'Histórico de gastos'}>
                <Text>asdf</Text>
            </Main>

            <BarGastos historico={true} />
        </View>
    )
}

export default Historico;