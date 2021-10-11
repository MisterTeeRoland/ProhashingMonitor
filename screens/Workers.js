import React, { useState } from 'react';
import { Text, View } from 'react-native';

export default function WorkersScreen() {

    let view;
    const [workers, setWorkers] = useState([])

    if (workers.length > 0) {
        view = <Text>Workers Page</Text>
    } else {
        view = <Text>No workers connected.</Text>
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {view}
        </View>
    );
}