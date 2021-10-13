import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Modal, Alert, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { coinList } from '../assets/coinlist';
import EarningsCard from '../components/EarningsCard';

export default function EarningsScreen() {
    let api_key;
    const [comp, setComp] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const [modalTitle, setModalTitle] = useState('');
    const [modalImage, setModalImage] = useState('');
    const [modalBalance, setModalBalance] = useState(0.00);
    const [modalAbbv, setModalAbbv] = useState('');
    const [modalEarnings24, setModalEarnings24] = useState(0.00);
    const [modalEligiblePayout, setModalEligiblePayout] = useState(0.00);
    const [modalThreshold, setModalThreshold] = useState(0.00);

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

    const runalert = () => {
        console.log("runtest");
        Alert.alert('test', 'this was pressed');
    }

    const loadItemToModal = (item) => {

        const abbv = item[1].abbreviation.toLowerCase();
        const source = `https://cryptoicon-api.vercel.app/api/icon/${abbv}`

        setModalTitle(item[1].name);
        setModalImage(source);
        setModalBalance(item[1].balance);
        setModalAbbv(item[1].abbreviation);
        setModalEarnings24(item[1].paid24h);
        setModalEligiblePayout(item[1].unpaid);
        setModalThreshold(item[1].payoutThreshold);
        
        setModalVisible(true);
    }

    const clearModal = () => {

        setModalTitle('');
        setModalImage('');
        setModalBalance(0.00);
        setModalAbbv('');
        setModalEarnings24(0.00);
        setModalEligiblePayout(0.00);
        setModalThreshold(0.00);
        
        setModalVisible(false);
    }

    const renderBalances = (balances) => {
        if (Object.entries(balances).length == 0) {
            return (<Text>No outstanding balances.</Text>)
        }

        var sortable = [];

        for (var coin in balances) {
            sortable.push([coin, balances[coin]]);
        }

        //for now, sort by coin balance
        sortable.sort(function(a, b) {
            return b[1].balance - a[1].balance;
        });

        return (
            sortable.map((item, index) => (
                <EarningsCard key={index} item={item} threshold={8} onOpenModal={() => loadItemToModal(item)} />
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

            <View style={styles.topContainer}>
                <TouchableOpacity style={styles.button} onPress={run}>
                    <Text style={styles.buttonText}>Update</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.earningsList}>
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
                    <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%', alignContent: 'center'}}>
                        <Image style={styles.modalImage} source={{ uri: modalImage }} />
                    </View>
                    <Text style={styles.modalTitle}>{modalTitle}</Text>
                    <Text>Current Balance: {modalBalance} {modalAbbv}</Text>
                    <Text>Paid out in last 24 hours: {modalEarnings24} {modalAbbv}</Text>
                    <Text>Eligible for payout: {modalEligiblePayout} {modalAbbv}</Text>
                    <Text>On-chain payout threshold: {modalThreshold} {modalAbbv}</Text>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    earningsContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '100%',
    },
    topContainer: {
        backgroundColor: '#fff',
        elevation: 10,
        paddingTop: 30,
    },
    earningsList: {
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
        minHeight: 500,
        height: 'auto',
        position: 'absolute',
        bottom: -15,
        width: '100%',
        borderRadius: 15,
        elevation: 10,
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
    }
})