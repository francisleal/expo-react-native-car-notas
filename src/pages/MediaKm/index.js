import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Alert } from 'react-native';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Input from '../../components/Input'
import ButtonAction from '../../components/ButtonAction'

import styles from './styles';

function MediaKm() {

    const [km, setKm] = useState('');
    const [lt, setLt] = useState('');
    const [result, setResult] = useState('0.0');

    const handleCalcular = () => {
        const input = { km, lt };
        const resposta = input.km / input.lt;
        setResult(resposta.toFixed(2));
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
            <View style={styles.main}>

                <View style={styles.section}>
                    <View style={styles.titulo}>
                        <Text style={styles.tituloTexto}>Consumo médio</Text>
                    </View>

                    <Card>
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
                    </Card>

                    <Card>
                        <TouchableOpacity onPress={AlertExemplo}>
                            <Text style={styles.exemplo}>Exemplo</Text>
                        </TouchableOpacity>
                    </Card>
                </View>

                <ButtonAction text={'Calcular'} onPressProps={handleCalcular} />
            </View>
        </View>
    )
}

export default MediaKm;