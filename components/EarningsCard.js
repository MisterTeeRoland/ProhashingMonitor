import React, {useEffect, useState} from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { coinList } from '../assets/coinlist';

export default function EarningsCard(props) {

    const abbv = props.item[1].abbreviation.toLowerCase();
    const source = `https://cryptoicon-api.vercel.app/api/icon/${abbv}`

    //figure out whether to render or not based on threshold
    const initialValue = 0.00;
    const threshold = props.threshold;
    const threshValue = initialValue.toFixed(threshold)
    const shouldRender = props.item[1].balance.toFixed(threshold) > threshValue;

    const currency = 'usd';

    const [earned, setEarned] = useState(0.00);

    const openModal = (e) => {
        props.onOpenModal(e);
    }

    const get_value = async (symbol, balance) => {
        var id;

        let amt = 0;
        let obj = coinList.find(o => o.symbol === symbol.toLowerCase());

        if (obj) {

            const req = await fetch(`https://api.coingecko.com/api/v3/coins/${obj.id}?tickers=true`);
            const res = await req.json();
            
            if (!res.error && res.market_data && res.market_data.current_price) {
                let price = res.market_data.current_price[currency];
                amt = (balance * price)
                setEarned(amt);
                return;
            } else {
                console.log(res);
                setEarned(0)
                return;
            }
        } else {
            console.log("no coingecko object for " + symbol);
            setEarned(0);
            return;
        }
    }

    useEffect(() => {
        get_value(props.item[1].abbreviation, props.item[1].balance);
    }, [])
    
    return (
        <View>
            {(shouldRender) &&
                <TouchableOpacity style={styles.earningCard} onPress={() => openModal()}>
                    <View style={{ width: 40, height: 40, marginEnd: 20, }}>
                        <Image style={styles.earningIcon} source={{ uri: source }} />
                    </View>
                    <View style={{ flexGrow: 1 }}>
                        <Text style={styles.earningTitle}>{props.item[1].name}</Text>
                        <Text>{props.item[1].balance.toFixed(8)} {props.item[1].abbreviation}</Text>
                    </View>
                    <View style={styles.earningValue}>
                        <Text style={{ fontSize: 16 }}>${earned.toFixed(2)}</Text>
                    </View>

                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    earningCard: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 20,
        marginTop: 0,
        borderRadius: 15,
        shadowColor: '#ccc',
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    earningIcon: {
        width: '100%',
        height: '100%',
        marginTop: 4,
        marginStart: 4,
    },
    earningTitle: {
        fontWeight: '700',
        fontSize: 18,
    },
    earningValue: {
        paddingTop: 11,
        paddingEnd: 10,
        fontSize: 18,
    }
})