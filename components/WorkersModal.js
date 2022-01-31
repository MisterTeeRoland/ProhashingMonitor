import React from "react";
import { StyleSheet, Modal, View, Text, TouchableOpacity } from "react-native";

export default function WorkersModal(props) {
  const clearModal = (e) => {
    props.onClearModal(e);
  };

  return (
    <View
      style={{
        ...styles(props.theme).modalBody,
        backgroundColor: props.theme.colors.modalBg,
      }}
    >
      <View style={{ flexGrow: 1 }}>
        <Text
          style={{
            ...styles(props.theme).modalTitle,
            color: props.theme.colors.text,
          }}
        >
          {props.obj.title}
        </Text>

        <View style={styles(props.theme).workerInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).workerLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            ALGORITHM
          </Text>
          <Text
            style={{
              ...styles(props.theme).workerValue,
              color: props.theme.colors.text,
            }}
          >
            {props.obj.algo}
          </Text>
        </View>

        <View style={styles(props.theme).workerInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).workerLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            CURRENT COIN
          </Text>
          <Text
            style={{
              ...styles(props.theme).workerValue,
              color: props.theme.colors.text,
            }}
          >
            {props.obj.coin}
          </Text>
        </View>

        <View style={styles(props.theme).workerInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).workerLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            LAST HASHRATE{"\n"}ACCEPTED
          </Text>
          <Text
            style={{
              ...styles(props.theme).workerValue,
              color: props.theme.colors.text,
            }}
          >
            {props.obj.hash}
          </Text>
        </View>

        <View style={styles(props.theme).workerInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).workerLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            CURRENT{"\n"}DIFFICULTY
          </Text>
          <Text
            style={{
              ...styles(props.theme).workerValue,
              color: props.theme.colors.text,
            }}
          >
            {props.obj.diff}
          </Text>
        </View>

        <View style={styles(props.theme).workerInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).workerLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            MIN WORK{"\n"}RESTART DELAY
          </Text>
          <Text
            style={{
              ...styles(props.theme).workerValue,
              color: props.theme.colors.text,
            }}
          >
            {props.obj.minRestart} seconds
          </Text>
        </View>

        <View style={styles(props.theme).workerInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).workerLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            WORK RESTART{"\n"}PENALTY
          </Text>
          <Text
            style={{
              ...styles(props.theme).workerValue,
              color: props.theme.colors.text,
            }}
          >
            {props.obj.restartPenalty ?? "N/A"}
          </Text>
        </View>
      </View>
      <View style={{ marginBottom: 40, marginTop: 20 }}>
        <TouchableOpacity
          onPress={clearModal}
          style={{
            backgroundColor: props.theme.colors.primary,
            padding: 10,
            borderRadius: 15,
          }}
        >
          <Text
            style={{ color: "white", textAlign: "center", fontWeight: "700" }}
          >
            CLOSE
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = (theme) =>
  StyleSheet.create({
    bottomModal: {},
    modalBody: {
      borderRadius: 4,
      borderColor: "rgba(0, 0, 0, 0.1)",
      width: "100%",
      borderRadius: 15,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    modalImage: {
      width: 60,
      height: 60,
      marginHorizontal: "auto",
      marginTop: 4,
      alignContent: "center",
      justifyContent: "center",
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: "700",
      borderBottomWidth: 1,
      borderBottomColor: "#656b78",
      marginTop: 15,
      marginBottom: 10,
      paddingBottom: 20,
    },
    workerInfoDiv: {
      marginBottom: 10,
      paddingBottom: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      borderBottomWidth: 1,
      borderBottomColor: "#656b78",
    },
    workerLabel: {
      fontWeight: "700",
      fontSize: 12,
    },
    workerValue: {
      textAlign: "right",
      fontSize: 16,
      fontWeight: "700",
      alignSelf: "center",
    },
  });
