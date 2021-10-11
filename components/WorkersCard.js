import React from 'react'
import { Text, View } from 'react-native';

export default function WorkersCard(props) {
    return (
        <View style={{ marginBottom: 20, }}>
            <Text>{props.item.ID}</Text>
            <Text>{props.item.algo} {props.item.coin}</Text>
        </View>
    )
}