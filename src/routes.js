import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from '@expo/vector-icons';

import Inicio from './pages/Inicio';
import MinhaConta from './pages/MinhaConta';
import MediaKm from './pages/MediaKm';
import Gastos from './pages/Gastos';
import Historico from './pages/Historico';
import DadosVeiculo from './pages/DadosVeiculo';

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator();

let namePage = 'Inicial';

function Tabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;

                    if (route.name === 'Inicio') {
                        iconName = 'car-side';
                    } else if (route.name === 'MinhaConta') {
                        iconName = 'user-alt';
                        namePage = 'MinhaConta'
                    } else if (route.name === 'MediaKm') {
                        iconName = 'gas-pump';
                    }
                    return <FontAwesome5 name={iconName} size={18} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#8257E6',
                inactiveTintColor: '#707070',
            }}>
            <Tab.Screen name="Inicio" component={Inicio} />
            <Tab.Screen name="MediaKm" component={MediaKm} />
            <Tab.Screen name="MinhaConta" component={MinhaConta} />
        </Tab.Navigator>
    );
}

function TabsGastos() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === 'Gastos') {
                    iconName = 'car-crash';
                } else if (route.name === 'Historico') {
                    iconName = 'list';
                }
                return <FontAwesome5 name={iconName} size={20} color={color} />;
            },
        })}
            tabBarOptions={{
                activeTintColor: '#8257E6',
                inactiveTintColor: 'gray',
            }}>
            <Tab.Screen name="Gastos" component={Gastos} />
            <Tab.Screen name="Historico" component={Historico} />
        </Tab.Navigator>
    );
}

function Routes() {

    let headerStyle = {
        headerStyle: {
            backgroundColor: '#8257E6'
        },
        headerTintColor: '#fff',
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Início" screenOptions={{ headerShown: false }}>
                <Stack.Screen options={headerStyle} name="Início" component={Tabs} />
                <Stack.Screen options={headerStyle} name="Gastos" component={TabsGastos} />
                <Stack.Screen options={headerStyle} name="DadosVeiculo" component={DadosVeiculo} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;