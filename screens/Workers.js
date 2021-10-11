import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WorkersCard from '../components/WorkersCard';

export default function WorkersScreen() {

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

        const req = await fetch(`https://prohashing.com/api/v1/walletEx?apiKey=${api_key}`);
        let res = await req.json();
        if (res.status == 'success') {
            setComp(renderWorkers(res.data.miners))
        } else {
            throw Error('no response');
        }
    }

    const renderWorkers = (miners) => {
        if (miners.length == 0) {
            return (<Text>No workers running.</Text>)
        }

        return (
            miners.map((item, index) => (
                <WorkersCard key={index} item={item} />
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
        <View style={styles.workersContainer}>
            <ScrollView style={styles.workersList}>
                <View>{comp}</View>
            </ScrollView>
            <TouchableOpacity style={styles.button} onPress={run}>
                <Text style={styles.buttonText}>Run Again</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    workersContainer: {
        display: 'flex',
        flex: 1,
        width: 400,
    },
    workersList: {
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