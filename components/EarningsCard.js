import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function EarningsCard(props) {

    const abbv = props.item[1].abbreviation.toLowerCase();
    const source = `https://cryptoicon-api.vercel.app/api/icon/${abbv}`

    const openModal = (e) => {
        props.onOpenModal(e);
    }
    
    return (
        <View>
            <TouchableOpacity style={{...styles(props.theme).earningCard, backgroundColor: props.theme.colors.card}} onPress={() => openModal()}>
                <View style={{ width: 40, height: 40, marginEnd: 20, }}>
                    <Image style={styles(props.theme).earningIcon} source={{ uri: source }} />
                </View>
                <View style={{ flexGrow: 1 }}>
                    <Text style={{ ...styles(props.theme).earningTitle, color: props.theme.colors.text }}>{props.item[1].name}</Text>
                    <Text style={{ ...styles(props.theme).earningBalance, color: props.theme.colors.text }}>{props.item[1].balance.toFixed(8)} {props.item[1].abbreviation}</Text>
                </View>
                <View style={styles(props.theme).earningValue}>
                    <Text style={{ ...styles(props.theme).earningAmount, color: props.theme.colors.text }}>{props.item[1].value.toFixed(2)} {props.currency.toUpperCase()}</Text>
                </View>

            </TouchableOpacity>
        </View>
    )
}

const styles = theme => StyleSheet.create({
    earningCard: {
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
    },
    earningBalance: {

    },
    earningAmount: {
        fontSize: 16,
    }
})