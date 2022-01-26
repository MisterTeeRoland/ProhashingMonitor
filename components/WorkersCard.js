import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function WorkersCard(props) {
  const convert_hashes = (hash_rate) => {
    let arr = [
      "",
      "H/s",
      "kH/s",
      "MH/s",
      "GH/s",
      "TH/s",
      "PH/s",
      "EH/s",
      "ZH/s",
    ];
    let i = 0,
      thresh = 1,
      diff = 0;
    while (true) {
      if (hash_rate / thresh > 1) {
        diff = (hash_rate / thresh).toFixed(2);
        i++;
        thresh *= 1000;
      } else {
        break;
      }
    }
    return diff + " " + arr[i];
  };

  const openModal = (e) => {
    props.onOpenModal(e);
  };

  return (
    <TouchableOpacity
      style={styles(props.theme).workerCard}
      onPress={() => openModal()}
    >
      <View style={{ flexGrow: 1 }}>
        <Text style={styles(props.theme).workerTitle}>{props.item.ID}</Text>
        <Text style={styles(props.theme).workerDetails}>
          {props.item.algo} - {props.item.coin}
        </Text>
      </View>
      <View style={styles(props.theme).hashValue}>
        <Text style={styles(props.theme).workerHash}>
          {convert_hashes(props.item.accepted)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = (theme) =>
  StyleSheet.create({
    workerCard: {
      padding: 15,
      margin: 20,
      marginTop: 0,
      borderRadius: 15,
      shadowColor: "#000",
      elevation: 10,
      display: "flex",
      flexDirection: "row",
      flex: 1,
      backgroundColor: theme.colors.card,
    },
    earningIcon: {
      width: "100%",
      height: "100%",
      marginTop: 4,
      marginStart: 4,
    },
    workerTitle: {
      fontWeight: "700",
      fontSize: 18,
      color: theme.colors.text,
    },
    workerDetails: {
      color: theme.colors.text,
    },
    hashValue: {
      paddingTop: 11,
      paddingEnd: 10,
      fontSize: 18,
    },
    workerHash: {
      fontSize: 16,
      color: theme.colors.text,
    },
  });
