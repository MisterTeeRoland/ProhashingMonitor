
import React from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer, DefaultTheme, DarkTheme, useTheme } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SettingsScreen from '../screens/Settings'
import EarningsScreen from '../screens/Earnings'
import WorkersScreen from '../screens/Workers'

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Navigation() {

    const lightTheme = {
        dark: false,
        colors: {
            primary: '#e68a2e',
            background: '#ddd',
            card: '#fff',
            cardAnimated: '#e5e5e5',
            text: '#222',
            border: '#ccc',
            notification: '#ccc',
            title: '#222',
            subtitle: '#666'
        }
    };
    
    const darkTheme = {
        dark: true,
        colors: {
            primary: '#e68a2e',
            background: '#2b2a33',
            card: '#474464',
            cardAnimated: '#55517e',
            text: '#fff',
            border: '#fff',
            notification: '#fff',
            title: '#fff',
            subtitle: '#ccc',
            modalBg: '#514f66'
        }
    }

    const {colors} = useTheme();

    return (
        <NavigationContainer theme={darkTheme}>
            <Tab.Navigator>
                <Tab.Screen name="Earnings" component={EarningsScreen}
                    options={{
                        tabBarLabel: 'Earnings',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="view-list" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Workers" component={WorkersScreen}
                    options={{
                        tabBarLabel: 'Workers',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="pickaxe" color={color} size={26} />
                        ),
                    }}
                />
                <Tab.Screen name="Settings" component={SettingsScreen}
                    options={{
                        tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (
                            <MaterialCommunityIcons name="cog" color={color} size={26} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

})