import React, { useState } from 'react';
import { View, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { getStorage, updateStorage } from '../../asyncstorage';

import ButtonAction from '../../components/ButtonAction';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Main from '../../components/Main';

function GastosProximaTrocaOleo({ route }) {


    const navigation = useNavigation();

    const [km, setKm] = useState('');


    async function handleSalvar() {
        if (km === '') {

        } else {
            const storage = await getStorage('meuscarrossavenote');

            let db = JSON.parse(storage);

            let atualizarProximaTroca = db.map(atualizar => {
                if (atualizar.id === route.params.dados.id) {
                    atualizar['oleo'] = km
                }
                return atualizar
            });

            await updateStorage('meuscarrossavenote', atualizarProximaTroca);

            Alert.alert('Próxima troca de óleo salvo com sucesso');
        }
    }

    function navigationVoltar() {
        navigation.navigate('Gastos');
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <Header titulo={'Próxima troca de oleo'} voltar={true} onPressProps={navigationVoltar} />
            <Main titulo={'Troca de oleo'}>
                <Input
                    type='numeric'
                    legend={'Km'}
                    placeholder={'0'}
                    value={km}
                    propsOnChangeText={setKm}
                />

                <ButtonAction text={'Salvar'} onPressProps={handleSalvar} />
            </Main>
        </View>
    )
}

export default GastosProximaTrocaOleo;