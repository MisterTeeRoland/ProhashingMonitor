import React from 'react'
import { Animated, Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react/cjs/react.development';
import { useTheme } from '@react-navigation/native';

export default function InitialStateCard(props) {

    const { colors } = useTheme();

    const [animation, setAnimation] = useState(new Animated.Value(0))

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
        outputRange: [colors.card, colors.cardAnimated]
    })

    const animatedStyle = {
        backgroundColor: boxInterpolation
    }

    useEffect(() => {
        handleAnimation()
    }, []);

    return (
        <View>
            <Animated.View style={{...styles.earningCard, ...animatedStyle}}></Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
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