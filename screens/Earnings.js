import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api_key } from './Settings';

import EarningsCard from '../components/EarningsCard';

export default function EarningsScreen() {
    let api_key;
    const [comp, setComp] = useState(null);

    const load_api_key = async () => {
        try {
            const value = await AsyncStorage.getItem('@api_key')
            if (value === null) {
                console.log("no key loaded")
            }
            return value
        } catch (e) {
            // error reading value  
            console.log("error reading value")
            console.log(e)
        }
    }

    const call_endpoint = async (api_key) => {
        if (!api_key || api_key == undefined) {
            return;
        }

        const req = await fetch(`https://prohashing.com/api/v1/wallet?apiKey=${api_key}`);
        let res = await req.json();
        if (res.status == 'success') {
            setComp(renderBalances(res.data.balances))
        } else {
            throw Error('no response');
        }
    }

    const renderBalances = (balances) => {
        if (Object.entries(balances).length == 0) {
            return (<Text>No outstanding balances.</Text>)
        }

        return (
            Object.entries(balances).map((item, index) => (
                <EarningsCard key={index} item={item}/>
            ))
        )
    }

    async function run() {
        api_key = await load_api_key()
        await call_endpoint(api_key)
    }

    useEffect(() => {
        run()
    }, [])

    return (
        <View style={styles.earningsContainer}>
            <ScrollView style={styles.earningsList}>
                <View>{comp}</View>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={run}>
                <Text style={styles.buttonText}>Run Again</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    earningsContainer: {
        display: 'flex',
        flex: 1,
        width: 400,
    },
    earningsList: {
        marginTop: 50,
        marginHorizontal: 50,
    },
    errorText: {
        color: 'red',
        fontWeight: '700'
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        marginVertical: 20,
        width: 300,
        marginHorizontal: 50,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    }
})