import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';

export default function InitialStateCard(props) {

    const animation = useRef(new Animated.Value(0)).current;

    const handleAnimation = () => {
        Animated.loop(
            Animated.sequence([
                Animated.delay(300 * props.index),
                Animated.timing(animation, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: false,
                }),
                Animated.timing(animation, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: false,
                }),
            ])
        ).start()
    }

    const boxInterpolation = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [props.theme.colors.card, props.theme.colors.cardAnimated]
    })

    const animatedStyle = {
        backgroundColor: boxInterpolation
    }

    useEffect(() => {
        handleAnimation()
    }, []);

    return (
        <View>
            <Animated.View style={{...styles(props.theme).earningCard, ...animatedStyle}}></Animated.View>
        </View>
    )
}

const styles = theme => StyleSheet.create({
    earningCard: {
        padding: 39,
        margin: 20,
        marginTop: 0,
        borderRadius: 15,
        shadowColor: '#ccc',
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        height: 50,
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