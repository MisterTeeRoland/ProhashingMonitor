import React from 'react';
import {View, Text, StyleSheet, Modal, TouchableOpacity} from 'react-native';

export default function APIKeyDirections(props) {

    const closeModal = (e) => {
        props.onCloseModal(e);
    }

    return (
        <Modal
                animationType="slide"
                transparent={true}
                visible={props.visible}
                onRequestClose={() => { clearModal(); }}
                style={styles(props.theme).bottomModal}
            >
                <View style={{...styles(props.theme).modalBody, backgroundColor: props.theme.colors.modalBg}}>
                    <View style={{ flexGrow: 1, }}>
                        <Text style={styles(props.theme).directionTitle}>Where to find your Prohashing API Key</Text>
                        <Text style={styles(props.theme).directionText}>1. Log into your Prohashing.com account.</Text>
                        <Text style={styles(props.theme).directionText}>2. Click the 3 bars on the top right to open the menu.</Text>
                        <Text style={styles(props.theme).directionText}>3. Click "Account".</Text>
                        <Text style={styles(props.theme).directionText}>4. In the Security tab, scroll down to the "API Key Settings" area.</Text>

                        <Text style={{...styles(props.theme).directionText, marginTop: 20}}>If you do not have an existing API key, click "New Key" to generate a new API key.</Text>
                        <Text style={styles(props.theme).directionText}>Copy and paste your API key into the field in this app and then press Save.</Text>
                    </View>
                    <View style={{ marginBottom: 40, marginTop: 30 }}>
                        <TouchableOpacity onPress={closeModal} style={{backgroundColor: props.theme.colors.primary, padding: 10, borderRadius: 15,}}>
                            <Text style={{color: 'white', textAlign: 'center', fontWeight: '700'}}>CLOSE</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </Modal>
    )
}

const styles = theme => StyleSheet.create({
    bottomModal: {
        backgroundColor: 'rgba(0,0,0,0.8)'
    },
    modalBody: {
        backgroundColor: '#fff',
        paddingTop: 22,
        paddingHorizontal: 22,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
        maxHeight: 600,
        minHeight: 400,
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
    workerInfoDiv: {
        marginBottom: 20,
    },
    workerLabel: {
        fontWeight: '700',
        fontSize: 12,
    },
    workerValue: {
        fontSize: 18,
    },
    directionTitle: {
        color: theme.colors.title,
        fontWeight: '700',
        fontSize: 18,
        marginBottom: 10,
    },
    directionText: {
        color: theme.colors.text,
        marginTop: 10,
    }
})