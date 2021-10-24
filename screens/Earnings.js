import React, { useEffect, useState } from 'react';
import { RefreshControl, Text, View, StyleSheet, TouchableOpacity, ScrollView, Modal, Alert, Image } from 'react-native';

import { coinList } from '../assets/coinlist';
import { load_keys } from '../tools/fetches';
import InitialStateCard from '../components/InitialStateCard';
import EarningsCard from '../components/EarningsCard';
import EarningsModal from '../components/EarningsModal';
import ErrorView from '../components/ErrorView';



export default function EarningsScreen(props) {

    let current_earnings = 0;
    const sortCase = 'value';
    // const sortCase = 'balance';

    const [loadText, setLoadText] = useState("");

    const [initialState, setInitialState] = useState(true);

    const [comp, setComp] = useState(null);
    const [refreshing, setRefreshing] = React.useState(false);
    const [totalValue, setTotalValue] = useState(0.00);

    //modal states
    const [modalVisible, setModalVisible] = useState(false);
    const [modalObj, setModalObj] = useState({});

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        run().then(() => setRefreshing(false));
    }, []);

    const call_endpoint = async (api_key, currency, threshold) => {
        if (!api_key || api_key == undefined) {
            setComp(<ErrorView error='Missing API key.' msg='Please enter your Prohashing API key in the Settings tab.' theme={props.theme} />)
            setInitialState(false);
            return;
        }

        try {
            setLoadText("...getting account data...");
            const req = await fetch(`https://prohashing.com/api/v1/wallet?apiKey=${api_key}`);
            let res = await req.json();
            if (res.code == 200) {
                setComp(await renderBalances(res.data.balances, currency, threshold))
            } else if (res.code == 400) {
                setComp(<ErrorView error='Invalid API Key.' msg='Please verify you have entered the correct API key in the Settings tab.' theme={props.theme} />)
            } else {
                setComp(<ErrorView error='Generic Error.' msg='Please restart the app and try again.' theme={props.theme} />)
            }
        } catch (e) {
            setComp(<ErrorView error='Error.' msg='Please make sure you have an active internet connection and try again.' theme={props.theme} />)
        }
        setInitialState(false)
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

        setLoadText("...getting coin balances...");

        if (Object.entries(balances).length == 0) {
            return (
                <View>
                    <Text style={{paddingHorizontal: 20, fontWeight: '700', fontSize: 18, color: theme.colors.text}}>No current balance.</Text>
                    <Text style={{paddingHorizontal: 20, paddingTop: 20, fontWeight: '700', color: theme.colors.text}}>Make sure you have entered a valid Prohashing API key in the Settings tab and that your miner(s) are connected and running.</Text>
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

        let filtered = sortable.filter((item) => item[1].value >= +threshold);

        if (filtered.length > 0) {
            return (
                filtered.map((item, index) => (
                    <EarningsCard key={index} item={item} currency={currency} theme={props.theme} onOpenModal={() => loadItemToModal(item)} />
                ))
            )
        } else {
            if (sortable.length > 0) {
                return (<ErrorView error={'Small balances hidden'} msg={'All of your current coin balances are below your threshold. Decrease your threshold in the Settings tab to see more.'} theme={props.theme} />)
            } else {
                return (<ErrorView error={'No balances'} msg={'You have no current balance. Start mining coins to earn.'} theme={props.theme} />)
            }
        }
    }

    const get_value = async (symbol, balance, currency) => {

        let amt = 0;
        let obj = coinList.find(o => o.symbol === symbol.toLowerCase());

        if (obj) {

            //TODO: you can comma separate all objects and get the whole thing in one call :eyes:
            const req = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${obj.id}&vs_currencies=${currency}`);
            const res = await req.json();
            
            //todo: this is only expecting one coin response. need to refactor for multiple
            if (Object.entries(res).length > 0) {
                for (const [coin, value] of Object.entries(res)) {
                    return value[currency] * balance;
                }
            } else {
                console.log('no coingecko response for '+obj.id);
            }
        } 

        return amt;
    }

    async function run() {
        setRefreshing(true)
        await call_endpoint(props.apiKey, props.currency, props.threshold)
        setRefreshing(false)
        setLoadText("");
    }

    useEffect(() => {
        run();
    }, [props.apiKey, props.threshold, props.currency]);

    return (
        <View style={styles(props.theme).earningsContainer}>

            <View style={styles(props.theme).containerHeader}>
                <Text style={styles(props.theme).headerText}>EARNINGS</Text>
                <Text style={styles(props.theme).headerSubtext}>Current Value: {totalValue.toFixed(2)} {props.currency.toUpperCase()}</Text>
            </View>

            <Text style={styles(props.theme).loadText}>{loadText}</Text>

            { initialState && 
                <View>
                    <InitialStateCard index={1} theme={props.theme} />
                    <InitialStateCard index={2} theme={props.theme} />
                    <InitialStateCard index={3} theme={props.theme} />
                </View>
            }

            { !initialState && 
                <ScrollView style={styles(props.theme).earningsList} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                        <View>{comp}</View>
                </ScrollView>
            }
            
            <EarningsModal obj={modalObj} visible={modalVisible} onClearModal={clearEarningsModal} theme={props.theme} />
            
        </View>
    );
}

const styles = theme => StyleSheet.create({
    earningsContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        width: '100%',
        backgroundColor: theme.colors.background,
    },
    containerHeader: {
        marginHorizontal: 23, 
        paddingTop: 50, 
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 32,
        fontWeight: '700',
        color: theme.colors.title,
    },
    headerSubtext: {
        fontSize: 16,
        fontWeight: '700',
        color: theme.colors.subtitle,
    },
    loadText: {
        fontSize: 12, 
        color: theme.colors.subtitle, 
        textAlign: 'center', 
        marginBottom: 5,
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