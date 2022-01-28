import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

export default function EarningsModal(props) {
  const clearModal = (e) => {
    props.onClearModal(e);
  };

  const panelRef = useRef(null);

  return (
    <View
      style={{
        ...styles(props.theme).modalBody,
        backgroundColor: props.theme.colors.modalBg,
      }}
    >
      <View style={{ flexGrow: 1 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
            alignContent: "center",
          }}
        >
          {props.obj.image !== "" && (
            <Image
              style={styles(props.theme).modalImage}
              source={{ uri: props.obj.image }}
            />
          )}
        </View>
        <Text
          style={{
            ...styles(props.theme).modalTitle,
            color: props.theme.colors.text,
          }}
        >
          {props.obj.title}
        </Text>

        <View style={styles(props.theme).modalInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).modalLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            CURRENT VALUE
          </Text>
          <Text
            style={{
              ...styles(props.theme).modalValue,
              color: props.theme.colors.text,
            }}
          >
            ${props.obj.earnings}
          </Text>
        </View>

        <View style={styles(props.theme).modalInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).modalLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            CURRENT BALANCE
          </Text>
          <Text
            style={{
              ...styles(props.theme).modalValue,
              color: props.theme.colors.text,
            }}
          >
            {props.obj.balance} {props.obj.abbv}
          </Text>
        </View>

        <View style={styles(props.theme).modalInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).modalLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            PAID OUT IN LAST 24 HOURS
          </Text>
          <Text
            style={{
              ...styles(props.theme).modalValue,
              color: props.theme.colors.text,
            }}
          >
            {props.obj.earnings24} {props.obj.abbv}
          </Text>
        </View>

        <View style={styles(props.theme).modalInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).modalLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            ELIGIBLE FOR PAYOUT
          </Text>
          <Text
            style={{
              ...styles(props.theme).modalValue,
              color: props.theme.colors.text,
            }}
          >
            {props.obj.eligiblePayout} {props.obj.abbv}
          </Text>
        </View>

        <View style={styles(props.theme).modalInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).modalLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            ON-CHAIN PAYOUT THRESHOLD
          </Text>
          <Text
            style={{
              ...styles(props.theme).modalValue,
              color: props.theme.colors.text,
            }}
          >
            {props.obj.threshold} {props.obj.abbv}
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={clearModal}
          style={{
            backgroundColor: props.theme.colors.primary,
            borderRadius: 15,
            marginTop: 10,
            marginBottom: 40,
            padding: 10,
          }}
        >
          <Text
            style={{ fontWeight: "700", color: "#000", textAlign: "center" }}
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
      textAlign: "center",
      marginTop: 15,
      marginBottom: 40,
    },
    modalInfoDiv: {
      marginBottom: 20,
    },
    modalLabel: {
      fontWeight: "700",
      fontSize: 12,
    },
    modalValue: {
      fontSize: 18,
      fontWeight: "700",
    },
  });
