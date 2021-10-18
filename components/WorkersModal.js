import React from "react";
import { StyleSheet, Modal, View, Text, TouchableOpacity } from 'react-native';

export default function WorkersModal(props) {

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
                <View style={styles.modalBody}>
                    <View style={{ flexGrow: 1, }}>
                        <Text style={styles.modalTitle}>{props.obj.title}</Text>

                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>ALGORITHM</Text>
                                <Text style={styles.workerValue}>{props.obj.algo}</Text>
                            </View>
                            
                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>CURRENT COIN</Text> 
                                <Text style={styles.workerValue}>{props.obj.coin}</Text>
                            </View>

                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>HASHRATE</Text>
                                <Text style={styles.workerValue}>{props.obj.hash}</Text>
                            </View>
                        </View>

                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,}}>
                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>DIFFICULTY</Text>
                                <Text style={styles.workerValue}>{props.obj.diff}</Text>
                            </View>

                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>MIN RESTART DELAY</Text>
                                <Text style={styles.workerValue}>{props.obj.minRestart} seconds</Text>
                            </View>

                            <View></View>
                        </View>

                        <View style={{marginTop: 20}}>
                            <View style={styles.workerInfoDiv}>
                                <Text style={styles.workerLabel}>WORK RESTART PENALTY</Text>
                                <Text style={styles.workerValue}>{props.obj.restartPenalty}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginBottom: 40, marginTop: 20 }}>
                        <TouchableOpacity onPress={clearModal} style={{backgroundColor: 'blue', padding: 10, borderRadius: 15,}}>
                            <Text style={{color: 'white', textAlign: 'center', fontWeight: '700'}}>Close</Text>
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
    }
});