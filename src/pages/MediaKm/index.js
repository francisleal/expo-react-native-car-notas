import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert, StyleSheet } from 'react-native';

import ButtonAction from '../../components/ButtonAction'
import Header from '../../components/Header';
import Input from '../../components/Input'
import Card from '../../components/Card';
import Main from '../../components/Main';

function MediaKm() {

    const [km, setKm] = useState('');
    const [lt, setLt] = useState('');
    const [result, setResult] = useState('0.0');

    const handleCalcular = () => {
        const input = { km, lt };

        if (input.km === '' || input.lt === '') {
            Alert.alert('Campo em branco');
        } else {
            const resposta = input.km / input.lt;
            setResult(resposta.toFixed(2));
        }
    }

    const AlertExemplo = () => {
        Alert.alert(
            'A primeira etapa consiste em encher o tanque',
            'Depois disso, zere a quilometragem do seu veículo.',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                { text: 'Próximo', onPress: AlertExemplo2 }
            ],
            { cancelable: false }
        );
    }

    const AlertExemplo2 = () => {
        Alert.alert(
            'Rode o máximo que puder',
            'Depois de rodar muitos quilômetros, vá ao posto e encha o tanque de novo. Observe na bomba de combustível quantos litros foram necessários para completá-lo e anote esse número: ele é fundamental para que o cálculo seja preciso e auxilie você em sua rotina.',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                { text: 'Próximo', onPress: AlertExemplo3 }
            ],
            { cancelable: false }
        );
    }

    const AlertExemplo3 = () => {
        Alert.alert(
            'Faça o cálculo da quilometragem por litro',
            `Com o total de quilômetros rodados em mãos, divida o que foi percorrido pela quantidade de litros que foram necessários para completar o tanque. O cálculo pode ser representado pela seguinte fórmula:
            \n - quilômetros percorridos ÷ litros para completar = quilometragem por litro".`,
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                { text: 'Próximo', onPress: AlertExemplo4 }
            ],
            { cancelable: false }
        );
    }

    const AlertExemplo4 = () => {
        Alert.alert(
            'exemplo',
            'Imagine que você rodou 400km com seu carro. Para completar o tanque, foi preciso abastecer 34 litros. Nesse caso, o automóvel tem um consumo de 11,76 quilômetros/litro.',
            [
                { text: 'OK' }
            ],
            { cancelable: false }
        );
    }

    return (
        <View style={styles.container}>
            <Header titulo={'Média Km/Litro'} />

            <Main titulo={'Consumo médio'}>
                <Card>
                    <View style={{ padding: 8 }}></View>
                    <Input
                        type='numeric'
                        legend={'Quilômetros percorridos'}
                        placeholder={'Km'}
                        value={km}
                        propsOnChangeText={km => setKm(km)}
                    />

                    <View style={{ padding: 8 }}></View>

                    <Input
                        type='numeric'
                        legend={'Litros'}
                        placeholder={'Litros na bomba'}
                        value={lt}
                        propsOnChangeText={lt => setLt(lt)}
                    />

                    <View style={{ padding: 8 }}></View>

                    <Text>Resultado</Text>
                    <Text style={styles.result}>{result}</Text>
                    <View style={{ padding: 8 }}></View>
                </Card>

                <View>
                    <Card>
                        <TouchableOpacity onPress={AlertExemplo}>
                            <Text style={styles.exemplo}>Exemplo</Text>
                        </TouchableOpacity>
                    </Card>
                    <ButtonAction text={'Calcular'} onPressProps={handleCalcular} />
                </View>

            </Main>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    result: {
        color: '#8257E6',
        paddingTop: 8,
        fontSize: 16,
    },
    exemplo: {
        color: '#8257E6',
        textAlign: 'center',
        fontWeight: 'bold'
    },
});

export default MediaKm;