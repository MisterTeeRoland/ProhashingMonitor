import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, RefreshControl, StyleSheet, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { load_api_key } from '../tools/fetches';
import InitialStateCard from '../components/InitialStateCard';
import WorkersCard from '../components/WorkersCard';
import WorkersModal from '../components/WorkersModal';

export default function WorkersScreen() {

    let api_key;
    const [comp, setComp] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [initialState, setInitialState] = useState(true)

    const [modalVisible, setModalVisible] = useState(false);
    const [modalObj, setModalObj] = useState({});

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        run().then(() => setRefreshing(false));
    }, []);

    const call_endpoint = async (api_key) => {
        if (!api_key || api_key == undefined) {
            return;
        }

        try {
            const req = await fetch(`https://prohashing.com/api/v1/walletEx?apiKey=${api_key}`);
            let res = await req.json();
            if (res.status == 'success') {
                setComp(renderWorkers(res.data.miners))
                setInitialState(false)
            } else {
                throw Error('no response');
            }
        } catch (e) {
            throw Error(e);
        }
    }

    const convert_hashes = (hash_rate) => {
        let arr = ['', 'H/s', 'kH/s', 'MH/s', 'GH/s', 'TH/s', 'PH/s', 'EH/s', 'ZH/s'];
        let i = 0, thresh = 1, diff = 0;
        while (true) {
            if ((hash_rate / thresh) > 1) {
                diff = (hash_rate / thresh).toFixed(2);
                i++;
                thresh *= 1000;
            }
            else {
                break;
            }
        }
        return diff + " " + arr[i];
    }

    const renderWorkers = (miners) => {
        if (miners.length == 0) {
            return (<Text style={{ fontSize: 18, fontWeight: '700', textAlign: 'center' }}>No workers running.</Text>)
        }

        return (
            miners.map((item, index) => (
                <WorkersCard key={index} item={item} onOpenModal={() => loadItemToModal(item)} />
            ))
        )
    }

    const loadItemToModal = (item) => {

        setModalObj({
            title: item.ID,
            algo: item.algo,
            coin: item.coin,
            hash: convert_hashes(item.accepted),
            minRestart: item.minRestartDelay.toFixed(3),
            diff: item.difficulty,
            workRestartPenalty: item.workRestartPenalty
        })

        setModalVisible(true);
    }

    const clearModal = () => {

        setModalObj({
            title: '',
            algo: '',
            coin: '',
            hash: 0,
            minRestart: 0,
            diff: 0,
            workRestartPenalty: 0
        })

        setModalVisible(false);
    }

    async function run() {
        setRefreshing(true);
        api_key = await load_api_key()
        await call_endpoint(api_key)
        setRefreshing(false);
    }

    useEffect(() => {
        run()
    }, [])

    return (
        <View style={styles.workersContainer}>

            <Text style={{paddingTop: 50, paddingBottom: 20, fontSize: 20, fontWeight: '700', textAlign: 'center'}}>Workers</Text>

            { initialState && 
                <View>
                    <InitialStateCard />
                    <InitialStateCard />
                    <InitialStateCard />
                </View>
            }

            { !initialState && 
                <ScrollView style={styles.workersList} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                    <View>{comp}</View>
                </ScrollView>
            }

            <WorkersModal obj={modalObj} visible={modalVisible} onClearModal={clearModal} />

        </View>
    );
}

const styles = StyleSheet.create({
    workersContainer: {
        display: 'flex',
        flex: 1,
        width: '100%',
        backgroundColor: '#ddd',
    },
    workersList: {
        // paddingTop: 20,
    },
    errorText: {
        color: 'red',
        fontWeight: '700'
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        marginVertical: 10,
        borderRadius: 15,
        width: '90%',
        marginHorizontal: '5%',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '700',
        textAlign: 'center',
    },
    
})