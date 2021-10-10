
import React from 'react';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SettingsScreen from '../components/Settings'
import EarningsScreen from '../components/Earnings'
import WorkersScreen from '../components/Workers'

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
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
    );
}