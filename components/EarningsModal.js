import React, { useRef } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

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
            justifyContent: "flex-start",
            width: "100%",
            alignContent: "center",
            borderBottomWidth: 1,
            borderBottomColor: "#656b78",
            marginBottom: 10,
            paddingBottom: 20,
          }}
        >
          {props.obj.image !== "" && (
            <Image
              style={{ ...styles(props.theme).modalImage, alignSelf: "center" }}
              source={{ uri: props.obj.image }}
            />
          )}

          <View
            style={{
              alignSelf: "center",
              flexDirection: "column",
              alignItems: "flex-start",
              paddingLeft: 10,
            }}
          >
            <Text
              style={{
                ...styles(props.theme).modalTitle,
                color: props.theme.colors.text,
              }}
            >
              {props.obj.title}
            </Text>

            <Text
              style={{
                ...styles(props.theme).modalSubtitle,
                color: props.theme.colors.text,
              }}
            >
              {props.obj.balance} {props.obj.abbv}
            </Text>
          </View>
        </View>

        <View style={styles(props.theme).modalInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).modalLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            CURRENT{"\n"}VALUE
          </Text>
          <View>
            <Text
              style={{
                ...styles(props.theme).modalValue,
                color: props.theme.colors.text,
                textAlign: "right",
              }}
            >
              ${props.obj.earnings}
            </Text>
            <Text
              style={{
                ...styles(props.theme).modalValue,
                color: props.theme.colors.text,
                fontSize: 11,
                textAlign: "right",
              }}
            >
              1 {props.obj?.currency?.toUpperCase() ?? ""} = ${props.obj.rate}{" "}
              {props.obj.abbv}
            </Text>
          </View>
        </View>

        <View style={styles(props.theme).modalInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).modalLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            PAID OUT IN{"\n"}LAST 24 HOURS
          </Text>
          <View>
            <Text
              style={{
                ...styles(props.theme).modalValue,
                color: props.theme.colors.text,
              }}
            >
              {props.obj.earnings24}
            </Text>
            <Text
              style={{
                color: props.theme.colors.subtitle,
                textAlign: "right",
                fontSize: 11,
                fontWeight: "700",
              }}
            >
              {props.obj.abbv}
            </Text>
          </View>
        </View>

        <View style={styles(props.theme).modalInfoDiv}>
          <Text
            style={{
              ...styles(props.theme).modalLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            ELIGIBLE{"\n"}FOR PAYOUT
          </Text>
          <View>
            <Text
              style={{
                ...styles(props.theme).modalValue,
                color: props.theme.colors.text,
              }}
            >
              {props.obj.eligiblePayout}
            </Text>

            <Text
              style={{
                color: props.theme.colors.subtitle,
                textAlign: "right",
                fontSize: 11,
                fontWeight: "700",
              }}
            >
              {props.obj.abbv}
            </Text>
          </View>
        </View>

        <View
          style={{
            ...styles(props.theme).modalInfoDiv,
          }}
        >
          <Text
            style={{
              ...styles(props.theme).modalLabel,
              color: props.theme.colors.subtitle,
            }}
          >
            ON-CHAIN
            {"\n"}PAYOUT THRESHOLD
          </Text>
          <View>
            <Text
              style={{
                ...styles(props.theme).modalValue,
                color: props.theme.colors.text,
              }}
            >
              {props.obj.threshold}
            </Text>

            <Text
              style={{
                color: props.theme.colors.subtitle,
                textAlign: "right",
                fontSize: 11,
                fontWeight: "700",
              }}
            >
              {props.obj.abbv}
            </Text>
          </View>
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
    },
    modalSubtitle: {},
    modalInfoDiv: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignContent: "center",
      marginBottom: 10,
      paddingBottom: 10,
      borderBottomWidth: 1,
      borderBottomColor: "#656b78",
    },
    modalLabel: {
      fontWeight: "700",
      fontSize: 12,
      alignSelf: "center",
    },
    modalValue: {
      textAlign: "right",
      fontSize: 16,
      fontWeight: "700",
    },
  });
