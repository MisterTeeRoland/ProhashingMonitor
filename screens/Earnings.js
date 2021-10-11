import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function EarningsScreen() {
    let view;
    const [balances, setBalances] = useState([]);

    if (balances.length > 0) {
        view = <Text>Balances Screen</Text>
    } else {
        view = <Text>No outstanding balances.</Text>
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {view}
        </View>
    );
}