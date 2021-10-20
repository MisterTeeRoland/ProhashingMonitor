import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Picker, Text, View, TextInput, Alert, Switch } from 'react-native';
import { useTheme } from '@react-navigation/native';

import * as Updates from 'expo-updates';

import {set_keys, load_keys} from '../tools/fetches';

export default function SettingsScreen({ route, navigation }) {

    const { colors } = useTheme();
    
    const [api_key, setRealApiKey] = useState('');
    const [apiKey, setApiKey] = useState('');

    const currencies = ['aed', 'ars', 'aud', 'bch', 'bdt', 'bhd', 'bmd', 'bnb', 'brl', 'btc', 'cad', 'chf', 'clp', 'cny', 'czk', 'dkk', 'dot', 'eos', 'eth', 'eur', 'gbp', 'hkd', 'huf', 'idr', 'ils', 'inr', 'jpy', 'krw', 'kwd', 'lkr', 'ltc', 'mmk', 'mxn', 'myr', 'ngn', 'nok', 'nzd', 'php', 'pkr', 'pln', 'rub', 'sar', 'sek', 'sgd', 'thb', 'try', 'twd', 'uah', 'usd', 'vef', 'vnd', 'xag', 'xau', 'xdr', 'xlm', 'xrp', 'yfi', 'zar', 'bits', 'link', 'sats'];
    const [currency, setCurrency] = useState('usd');
    const [currMap, setCurrMap] = useState(null);

    const [threshold, setThreshold] = useState(0.001);

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);


    const saveKeys = async () => {
        let success = await set_keys({api_key, currency, threshold})
        if (success) {
            Alert.alert("Success", "Settings updated.");
        }
    }

    const reset = () => {
        setRealApiKey('');
        setCurrency('usd');
        setThreshold(0.001);
        set_keys({api_key, currency, threshold});
    }

    const updateKey = (text) => {
        setRealApiKey(text);
    }

    const updateCurrency = (text) => {
        setCurrency(text);
    }

    const updateThreshold = (text) => {
        setThreshold(text);
    }

    const render_currencies = () => {
        return (
            currencies.map((item, index) => (
                <Picker.Item label={item.toUpperCase()} value={item} key={index} />
            ))
        )
    }

    async function checkForUpdate() {
        try {
            const update = await Updates.checkForUpdateAsync();
            if (update.isAvailable) {
                await Updates.fetchUpdateAsync();
                // ... notify user of update ...
                Alert.alert(
                    "New update available!",
                    "The app will refresh to apply new changes.",
                    [
                        { text: "OK", onPress: async () => await Updates.reloadAsync() }
                    ]
                );
            }
        } catch (e) {
        }
    }

    useEffect(() => {
        checkForUpdate();
        const load_settings = async() => {
            let obj = await load_keys();
            setRealApiKey(obj.api_key);
            setCurrency(obj.currency);
            setThreshold(obj.threshold);
            setCurrMap(render_currencies())
        }
        load_settings();
    }, [])

    return (
        <View style={styles.container}>

            <View style={{display: 'flex', marginStart: 20, marginEnd: 20, flexDirection: 'row', justifyContent: 'space-between', paddingTop: 50, paddingBottom: 20,}}>
                <Text style={{fontSize: 20, fontWeight: '700', color: colors.title }}>SETTINGS</Text>
            </View>

            <View style={{flexGrow: 1}}>

                <View style={styles.settingsDiv}>
                    <Text style={styles.settingsLabel}>Prohashing API key</Text>
                    <TextInput style={styles.settingsInput} onChangeText={text => updateKey(text)} value={api_key} />
                </View>

                <View style={styles.settingsDiv}>
                    <Text style={styles.settingsLabel}>Default Currency</Text>
                    <View style={styles.settingsInput}>
                        <Picker selectedValue={currency} onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)} >
                            {currMap}
                        </Picker>
                    </View>
                </View>

                <View style={styles.settingsDiv}>
                    <Text style={styles.settingsLabel}>Hide small balances under:</Text>
                    <TextInput style={styles.settingsInput} keyboardType='numeric' onChangeText={text => updateThreshold(text)} value={threshold.toString()}/>
                </View>

                <View style={{...styles.settingsDiv, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={styles.settingsLabel}>Dark Mode</Text>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                </View>
            </View>

            <View>
                <TouchableOpacity style={styles.successButton} onPress={saveKeys}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.cancelButton} onPress={reset}>
                        <Text style={styles.buttonText}>Reset</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b2a33',
        color: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 50,
        width: '100%',
    },
    settingsDiv: {
        marginBottom: 40,
    },
    settingsLabel: {
        fontWeight: '700',
        fontSize: 18,
        color: '#fff',
        textAlign: 'left',
    },
    settingsInput: {
        height: 40,
        maxWidth: 300,
        width: 300,
        borderWidth: 1,
        marginTop: 10,
        paddingHorizontal: 10,
        borderRadius: 15,
        backgroundColor: '#fff',
        borderColor: 'transparent',
        elevation: 3,
    },
    successButton: {
        backgroundColor: '#e68a2e',
        color: "#fff",
        padding: 8,
        marginTop: 20,
        borderRadius: 15,
        height: 40,
        width: 300,
    },
    cancelButton: {
        backgroundColor: '#4a4760',
        padding: 8,
        marginTop: 20,
        borderRadius: 15,
        height: 40,
        width: 300,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
    }
});