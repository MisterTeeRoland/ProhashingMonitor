import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function ErrorView(props) {
    return (
        <View style={styles(props.theme).errorView}>
            <Text style={styles(props.theme).error}>{props.error}</Text>
            <Text style={styles(props.theme).msg}>{props.msg}</Text>
        </View>
    )
}

const styles = theme => StyleSheet.create({
    errorView: {
        paddingHorizontal: 20,
    },
    error: {
        color: theme.colors.text,
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 10,
    },
    msg: {
        color: theme.colors.text,
    }

})