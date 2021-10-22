import React, { useState, useEffect } from 'react';
import { Text, View, ActivityIndicator, RefreshControl, StyleSheet, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '@react-navigation/native';

import { load_keys } from '../tools/fetches';
import InitialStateCard from '../components/InitialStateCard';
import WorkersCard from '../components/WorkersCard';
import WorkersModal from '../components/WorkersModal';

export default function WorkersScreen() {

    const { colors } = useTheme();

    const [loadText, setLoadText] = useState("");

    let api_key;
    const [comp, setComp] = useState(null);
    const [refreshing, setRefreshing] = useState(false);
    const [initialState, setInitialState] = useState(true)

    const [modalVisible, setModalVisible] = useState(false);
    const [modalObj, setModalObj] = useState({});
    
    const [numWorkers, setNumWorkers] = useState(0);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        run().then(() => setRefreshing(false));
    }, []);

    const call_endpoint = async (api_key) => {
        if (!api_key || api_key == undefined) {
            return;
        }

        try {
            setLoadText("...getting worker data...");
            const req = await fetch(`https://prohashing.com/api/v1/walletEx?apiKey=${api_key}`);
            let res = await req.json();
            if (res.status == 'success') {
                setNumWorkers(res.data.miners.length);
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
            return (
                <View>
                    <Text style={{paddingHorizontal: 20, fontWeight: '700', fontSize: 18, color: colors.text}}>No active workers.</Text>
                    <Text style={{paddingHorizontal: 20, paddingTop: 20, fontWeight: '700', color: colors.text}}>Make sure you have entered a valid Prohashing API key in the Settings tab and that your miner(s) are connected and running.</Text>
                </View>
            )
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

    async function run() {
        setRefreshing(true);
        let obj = await load_keys()
        await call_endpoint(obj.api_key)
        setRefreshing(false);
        setLoadText("");
    }

    useEffect(() => {
        checkForUpdate();
        run()
    }, [])

    return (
        <View style={{...styles.workersContainer, backgroundColor: colors.background}}>

            <View style={styles.containerHeader}>
                <Text style={{...styles.headerText, color: colors.title}}>WORKERS</Text>
                <Text style={{...styles.headerSubtext, color: colors.subtitle}}>Connected: {numWorkers}</Text>
            </View>

            <Text style={{fontSize: 12, color: colors.subtitle, textAlign: 'center', marginBottom: 5,}}>{loadText}</Text>

            { initialState && 
                <View>
                    <InitialStateCard index={1} />
                    <InitialStateCard index={2} />
                    <InitialStateCard index={3} />
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
    },
    containerHeader: {
        marginHorizontal: 23, 
        paddingTop: 50, 
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 32,
        fontWeight: '700',
    },
    headerSubtext: {
        fontSize: 16,
        fontWeight: '700',
    },
    workersList: {
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