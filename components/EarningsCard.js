import React from 'react'
import { Text, View } from 'react-native';

export default function EarningsCard(props) {
    return (
        <View style={{ marginBottom: 20, }}>
            <Text>{props.item[1].name}</Text>
            <Text>{props.item[1].balance} {props.item[1].abbreviation}</Text>
        </View>
    )

}