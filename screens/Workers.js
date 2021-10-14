import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WorkersCard from '../components/WorkersCard';

export default function WorkersScreen() {

    let api_key;
    const [comp, setComp] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const [modalTitle, setModalTitle] = useState('');
    const [modalAlgorithm, setModalAlgorithm] = useState('');
    const [modalCoin, setModalCoin] = useState('');
    const [modalHash, setModalHash] = useState(0);
    const [modalMinRestart, setModalMinRestart] = useState(0);
    const [modalDifficulty, setModalDifficulty] = useState(0);
    const [modalRestartPenalty, setModalRestartPenalty] = useState(0);

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

        setModalTitle(item.ID);
        setModalAlgorithm(item.algo);
        setModalCoin(item.coin);
        setModalHash(convert_hashes(item.accepted))
        setModalMinRestart(item.minRestartDelay.toFixed(3))
        setModalDifficulty(item.difficulty);
        setModalRestartPenalty(item.workRestartPenalty);

        setModalVisible(true);
    }

    const clearModal = () => {

        setModalTitle('');
        setModalAlgorithm('');
        setModalCoin('');
        setModalHash(0);
        setModalMinRestart(0)
        setModalDifficulty(0);
        setModalRestartPenalty(0);

        setModalVisible(false);
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

            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.button} onPress={run}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>


            <ScrollView style={styles.workersList}>
                <View>{comp}</View>
            </ScrollView>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { clearModal(); }}
                style={styles.bottomModal}
            >
                <View style={styles.modalBody}>
                    <View style={{ flexGrow: 1, }}>
                        <Text style={styles.modalTitle}>{modalTitle}</Text>

                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>ALGORITHM</Text>
                                <Text style={styles.workerValue}>{modalAlgorithm}</Text>
                            </View>
                            
                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>CURRENT COIN</Text> 
                                <Text style={styles.workerValue}>{modalCoin}</Text>
                            </View>

                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>HASHRATE</Text>
                                <Text style={styles.workerValue}>{modalHash}</Text>
                            </View>
                        </View>

                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,}}>
                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>DIFFICULTY</Text>
                                <Text style={styles.workerValue}>{modalDifficulty}</Text>
                            </View>

                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>MIN RESTART DELAY</Text>
                                <Text style={styles.workerValue}>{modalMinRestart} seconds</Text>
                            </View>

                            <View></View>
                        </View>

                        <View style={{marginTop: 20}}>
                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>WORK RESTART PENALTY</Text>
                                <Text style={styles.workerValue}>{modalRestartPenalty}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 40, marginTop: 20 }}>
                        <TouchableOpacity onPress={clearModal} style={{backgroundColor: 'blue', padding: 10, borderRadius: 15,}}>
                            <Text style={{color: 'white', textAlign: 'center', fontWeight: '700'}}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </Modal>

        </View>
    );
}

const styles = StyleSheet.create({
    workersContainer: {
        display: 'flex',
        flex: 1,
        width: '100%',
    },
    topContainer: {
        backgroundColor: '#fff',
        elevation: 10,
        paddingTop: 30,
    },
    workersList: {
        paddingTop: 20,
        backgroundColor: '#ddd'
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
    bottomModal: {
    },
    modalBody: {
        backgroundColor: '#fff',
        paddingTop: 22,
        paddingHorizontal: 22,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        maxHeight: 600,
        minHeight: 400,
        height: 'auto',
        position: 'absolute',
        bottom: -15,
        width: '100%',
        borderRadius: 15,
        elevation: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    modalImage: {
        width: 60,
        height: 60,
        marginHorizontal: 'auto',
        marginTop: 4,
        alignContent: 'center',
        justifyContent: 'center'
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 40,
    },
    workerInfoDiv: {
        marginBottom: 20,
    },
    workerLabel: {
        fontWeight: '700',
        fontSize: 12,
    },
    workerValue: {
        fontSize: 18,
    }
})