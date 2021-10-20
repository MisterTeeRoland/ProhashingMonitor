import React, { useEffect, useState } from 'react';
import { RefreshControl, Text, View, StyleSheet, TouchableOpacity, ScrollView, Modal, Alert, Image } from 'react-native';
import { useTheme } from '@react-navigation/native';

import { coinList } from '../assets/coinlist';
import { load_keys } from '../tools/fetches';
import InitialStateCard from '../components/InitialStateCard';
import EarningsCard from '../components/EarningsCard';
import EarningsModal from '../components/EarningsModal';

import * as Updates from 'expo-updates';

export default function EarningsScreen() {
    let api_key;
    let current_earnings = 0;
    const sortCase = 'value';
    // const sortCase = 'balance';
    
    const { colors } = useTheme();

    const [initialState, setInitialState] = useState(true);

    const [comp, setComp] = useState(null);
    const [refreshing, setRefreshing] = React.useState(false);

    const [currency, setCurrency] = useState('usd');
    const [totalValue, setTotalValue] = useState(0.00);

    const [threshold, setThreshold] = useState(0.001);

    //modal states
    const [modalVisible, setModalVisible] = useState(false);
    const [modalObj, setModalObj] = useState({});

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        run().then(() => setRefreshing(false));
    }, []);

    const call_endpoint = async (api_key, currency, threshold) => {
        if (!api_key || api_key == undefined) {
            return;
        }

        try {
            const req = await fetch(`https://prohashing.com/api/v1/wallet?apiKey=${api_key}`);
            let res = await req.json();
            if (res.status == 'success') {
                setComp(await renderBalances(res.data.balances, currency, threshold))
                setInitialState(false)
            } else {
                throw Error('no response');
            }
        } catch (e) {
            throw Error(e)
        }
    }

    const loadItemToModal = (item) => {

        const abbv = item[1].abbreviation.toLowerCase();
        const source = `https://cryptoicon-api.vercel.app/api/icon/${abbv}`

        setModalObj({
            title: item[1].name,
            image: source,
            balance: item[1].balance,
            abbv: item[1].abbreviation,
            earnings24: item[1].paid24h,
            eligiblePayout: item[1].unpaid,
            threshold: item[1].payoutThreshold,
            earnings: item[1].value,
        })
        
        setModalVisible(true);
    }

    const clearEarningsModal = () => {

        setModalObj({
            title: '',
            image: '',
            balance: 0.00,
            abbv: '',
            earnings24: 0.00,
            eligiblePayout: 0.00,
            threshold: 0.00,
            earnings: 0.00,
        })
        
        setModalVisible(false);
    }
    
    const renderBalances = async (balances, currency, threshold) => {

        if (Object.entries(balances).length == 0) {
            return (
                <View>
                    <Text style={{paddingHorizontal: 20, fontWeight: '700', fontSize: 18, color: colors.text}}>No current balance.</Text>
                    <Text style={{paddingHorizontal: 20, paddingTop: 20, fontWeight: '700', color: colors.text}}>Make sure you have entered a valid Prohashing API key in the Settings tab and that your miner(s) are connected and running.</Text>
                </View>
            )
        }

        var sortable = [];

        current_earnings = 0;

        for (var coin in balances) {
            let value = await get_value(balances[coin].abbreviation, balances[coin].balance, currency)
            current_earnings += value;
            balances[coin].value = value;
            sortable.push([coin, balances[coin]]);
        }

        setTotalValue(current_earnings);

        //for now, sort by coin balance
        sortable.sort(function(a, b) {
            if (sortCase == "balance") {
                return b[1].balance - a[1].balance;
            } else if (sortCase == "value") {
                return b[1].value - a[1].value;
            }
        });

        let filtered = sortable.filter((item) => item[1].value >= threshold);

        return (
            filtered.map((item, index) => (
                <EarningsCard key={index} item={item} currency={currency} onOpenModal={() => loadItemToModal(item)} />
            ))
        )
    }

    const get_value = async (symbol, balance, currency) => {

        let amt = 0;
        let obj = coinList.find(o => o.symbol === symbol.toLowerCase());

        if (obj) {

            const req = await fetch(`https://api.coingecko.com/api/v3/coins/${obj.id}?tickers=true`);
            const res = await req.json();
            
            if (!res.error && res.market_data && res.market_data.current_price) {
                let price = res.market_data.current_price[currency];
                amt = (balance * price)
                return amt;
            } else {
                console.log('coingecko request failed');
                console.log(res);
                return amt;
            }
        } else {
            return amt;
        }
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
        setRefreshing(true)
        let obj = await load_keys()
        setCurrency(obj.currency);
        setThreshold(obj.threshold);
        await call_endpoint(obj.api_key, obj.currency, obj.threshold)
        setRefreshing(false)
    }

    useEffect(() => {
        checkForUpdate();
        run();
    }, [])

    return (
        <View style={{...styles.earningsContainer, backgroundColor: colors.background }}>

            <View style={styles.containerHeader}>
                <Text style={{...styles.headerText, color: colors.title}}>EARNINGS</Text>
                <Text style={{...styles.headerSubtext, color: colors.subtitle}}>Current Value: {totalValue.toFixed(2)} {currency.toUpperCase()}</Text>
            </View>

            { initialState && 
                <View>
                    <InitialStateCard index={1} />
                    <InitialStateCard index={2} />
                    <InitialStateCard index={3} />
                </View>
            }

            { !initialState && 
                <ScrollView style={styles.earningsList} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                        <View>{comp}</View>
                </ScrollView>
            }
            
            <EarningsModal obj={modalObj} visible={modalVisible} onClearModal={clearEarningsModal} />
            
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
    containerHeader: {
        marginHorizontal: 23, 
        paddingTop: 50, 
        paddingBottom: 30,
    },
    headerText: {
        fontSize: 32,
        fontWeight: '700',
    },
    headerSubtext: {
        fontSize: 16,
        fontWeight: '700',
    },
    earningsList: {
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