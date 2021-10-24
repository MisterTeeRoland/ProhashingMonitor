
import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import SettingsScreen from '../screens/Settings'
import EarningsScreen from '../screens/Earnings'
import WorkersScreen from '../screens/Workers'
import { lightTheme, darkTheme } from '../assets/themes'
import { load_keys } from '../tools/fetches';

const Tab = createMaterialBottomTabNavigator();

export default function Navigation() {

    const [apiKey, setApiKey] = useState('')
    const [currency, setCurrency] = useState('usd')
    const [threshold, setThreshold] = useState(0.001)
    const [theme, setTheme] = useState(lightTheme)
    const [loaded, setLoaded] = useState(false)

    const changeSettings = (e) => {
        console.log('settings changed')
        console.log(e);
        setApiKey(e.api_key);
        setCurrency(e.currency);
        setThreshold(e.threshold);
        setTheme(e.theme == 'dark' ? darkTheme : lightTheme);
    }

    useEffect(() => {
        const load_settings = async() => {
            let obj = await load_keys();
            console.log('---navigation---');
            console.log(obj)
            setApiKey(obj.api_key)
            setCurrency(obj.currency)
            setThreshold(obj.threshold)
            setTheme(obj.theme == 'dark' ? darkTheme : lightTheme);
            setLoaded(true)
        }
        load_settings();
    }, []);

    return (
        <NavigationContainer>
            { loaded &&
            <Tab.Navigator
                activeColor={theme.colors.activeColor}
                inactiveColor={theme.colors.inactiveColor}
                barStyle={{ backgroundColor: theme.colors.barColor }}
            >
                <Tab.Screen 
                    name="Earnings" options={{ tabBarLabel: 'Earnings',
                        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="view-list" color={color} size={26} />),
                    }}
                >
                    {props => <EarningsScreen {...props} apiKey={apiKey} currency={currency} threshold={threshold} theme={theme} />}
                </Tab.Screen>
                <Tab.Screen 
                    name="Workers" options={{ tabBarLabel: 'Workers',
                        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="pickaxe" color={color} size={26} />),
                    }}
                >
                    {props => <WorkersScreen {...props} apiKey={apiKey} currency={currency} threshold={threshold} theme={theme} />}
                </Tab.Screen>
                <Tab.Screen 
                    name="Settings" options={{ tabBarLabel: 'Settings',
                        tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="cog" color={color} size={26} />),
                    }}
                >
                    {props => <SettingsScreen {...props} apiKey={apiKey} currency={currency} threshold={threshold} theme={theme} onSettingsChanged={changeSettings} />}
                </Tab.Screen>
            </Tab.Navigator>
        }
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({

})