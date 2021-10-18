import React, { useEffect, useState } from 'react';
import { RefreshControl, Text, View, StyleSheet, TouchableOpacity, ScrollView, Modal, Alert, Image } from 'react-native';

import { coinList } from '../assets/coinlist';
import { load_api_key } from '../tools/fetches';
import InitialStateCard from '../components/InitialStateCard';
import EarningsCard from '../components/EarningsCard';
import EarningsModal from '../components/EarningsModal';

export default function EarningsScreen() {
    let api_key;
    const currency = 'usd';
    const sortCase = 'value';
    // const sortCase = 'balance';

    const [initialState, setInitialState] = useState(true);

    const [comp, setComp] = useState(null);
    const [refreshing, setRefreshing] = React.useState(false);

    //modal states
    const [modalVisible, setModalVisible] = useState(false);
    const [modalObj, setModalObj] = useState({});



    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        run().then(() => setRefreshing(false));
    }, []);

    const threshold = 8;

    

    const call_endpoint = async (api_key) => {
        if (!api_key || api_key == undefined) {
            return;
        }

        try {
            const req = await fetch(`https://prohashing.com/api/v1/wallet?apiKey=${api_key}`);
            let res = await req.json();
            if (res.status == 'success') {
                setComp(await renderBalances(res.data.balances))
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
    

    const renderBalances = async (balances) => {
        if (Object.entries(balances).length == 0) {
            return (<Text>No outstanding balances.</Text>)
        }

        var sortable = [];

        for (var coin in balances) {
            balances[coin].value = await get_value(balances[coin].abbreviation, balances[coin].balance)
            sortable.push([coin, balances[coin]]);
        }

        //for now, sort by coin balance
        sortable.sort(function(a, b) {
            if (sortCase == "balance") {
                return b[1].balance - a[1].balance;
            } else if (sortCase == "value") {
                return b[1].value - a[1].value;
            }
        });

        return (
            sortable.map((item, index) => (
                <EarningsCard key={index} item={item} threshold={threshold} onOpenModal={() => loadItemToModal(item)} />
            ))
        )
    }

    const get_value = async (symbol, balance) => {

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
                console.log(res);
                return amt;
            }
        } else {
            // console.log("no coingecko object for " + symbol);
            return amt;
        }
    }

    async function run() {
        setRefreshing(true)
        api_key = await load_api_key()
        await call_endpoint(api_key)
        setRefreshing(false)
    }

    useEffect(() => {
        run()
    }, [])

    return (
        <View style={styles.earningsContainer}>

            <Text style={{paddingTop: 50, paddingBottom: 20, fontSize: 20, fontWeight: '700', textAlign: 'center'}}>Earnings</Text>

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
        backgroundColor: '#ddd',
    },
    earningsList: {
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