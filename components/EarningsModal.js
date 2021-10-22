import React from "react";
import {StyleSheet, Modal, View, Text, Image, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';

export default function EarningsModal(props) {

    const { colors } = useTheme();

    const clearModal = (e) => {
        props.onClearModal(e);
    }

    return (
        <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}
                onRequestClose={() => { clearModal(); }}
                style={styles.bottomModal}
            >
                <View style={{...styles.modalBody, backgroundColor: colors.modalBg}}>
                    <View style={{flexGrow: 1}}>
                        <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%', alignContent: 'center'}}>
                            <Image style={styles.modalImage} source={{ uri: props.obj.image }} />
                        </View>
                        <Text style={{...styles.modalTitle, color: colors.text}}>{props.obj.title}</Text>

                        <View style={styles.modalInfoDiv}>
                            <Text style={{...styles.modalLabel, color: colors.subtitle}}>CURRENT VALUE</Text>
                            <Text style={{...styles.modalValue, color: colors.text}}>${props.obj.earnings}</Text>
                        </View>

                        <View style={styles.modalInfoDiv}>
                            <Text style={{...styles.modalLabel, color: colors.subtitle}}>CURRENT BALANCE</Text>
                            <Text style={{...styles.modalValue, color: colors.text}}>{props.obj.balance} {props.obj.abbv}</Text>
                        </View>

                        <View style={styles.modalInfoDiv}>
                            <Text style={{...styles.modalLabel, color: colors.subtitle}}>PAID OUT IN LAST 24 HOURS</Text>
                            <Text style={{...styles.modalValue, color: colors.text}}>{props.obj.earnings24} {props.obj.abbv}</Text>
                        </View>
                        
                        <View style={styles.modalInfoDiv}>
                            <Text style={{...styles.modalLabel, color: colors.subtitle}}>ELIGIBLE FOR PAYOUT</Text>
                            <Text style={{...styles.modalValue, color: colors.text}}>{props.obj.eligiblePayout} {props.obj.abbv}</Text>
                        </View>

                        <View style={styles.modalInfoDiv}>
                            <Text style={{...styles.modalLabel, color: colors.subtitle}}>ON-CHAIN PAYOUT THRESHOLD</Text>
                            <Text style={{...styles.modalValue, color: colors.text}}>{props.obj.threshold} {props.obj.abbv}</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity onPress={clearModal} style={{backgroundColor: colors.primary, borderRadius: 15, marginTop: 10, marginBottom: 40, padding: 10}}>
                            <Text style={{fontWeight: '700', color: 'white', textAlign: 'center'}}>CLOSE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    bottomModal: {
    },
    modalBody: {
        paddingTop: 22,
        paddingHorizontal: 22,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        maxHeight: 600,
        minHeight: 500,
        height: 'auto',
        position: 'absolute',
        bottom: -15,
        width: '100%',
        borderRadius: 15,
        elevation: 10,
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between'
    },
    modalImage: {
        width: 60,
        height: 60,
        marginHorizontal: 'auto',
        marginTop: 4,
        alignContent: 'center',
        justifyContent: 'center'
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        marginTop: 15,
        marginBottom: 40,
    },
    modalInfoDiv: {
        marginBottom: 20,
    },
    modalLabel: {
        fontWeight: '700',
        fontSize: 12,
    },
    modalValue: {
        fontSize: 18,
        fontWeight: '700'
    }
})