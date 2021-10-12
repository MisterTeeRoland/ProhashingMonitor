import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function EarningsCard(props) {

    const abbv = props.item[1].abbreviation.toLowerCase();
    const source = `https://cryptoicon-api.vercel.app/api/icon/${abbv}`

    //figure out whether to render or not based on threshold
    const initialValue = 0.00;
    const threshold = props.threshold;
    const threshValue = initialValue.toFixed(threshold)
    const shouldRender = props.item[1].balance.toFixed(threshold) > threshValue;

    const openModal = (e) => {
        props.onOpenModal(e);
    }

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
                        <Text style={{ fontSize: 16 }}>$0.00</Text>
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