import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function EarningsCard(props) {
  const abbv = props.item[1].abbreviation.toLowerCase();
  const source = `https://raw.githubusercontent.com/jsupa/crypto-icons/main/icons/${abbv}.png`;

  const openModal = (e) => {
    props.onOpenModal(e);
  };

  const coin = props.item[1];
  const value = coin.value.toFixed(2);

  return (
    <View>
      <TouchableOpacity
        style={{
          ...styles(props.theme).earningCard,
          backgroundColor: props.theme.colors.card,
        }}
        onPress={() => openModal()}
      >
        <View style={{ width: 40, height: 40, marginEnd: 20 }}>
          <Image
            style={styles(props.theme).earningIcon}
            source={{ uri: source }}
          />
        </View>
        <View style={{ flexGrow: 1 }}>
          <Text
            numberOfLines={1}
            style={{
              ...styles(props.theme).earningTitle,
              // color: props.theme.colors.text,
              color: "#fff",
            }}
          >
            {coin.name}
          </Text>
          <Text
            style={{
              ...styles(props.theme).earningBalance,
              // color: props.theme.colors.text,
              color: "#fff",
            }}
          >
            {coin.balance.toFixed(8)} {coin.abbreviation}
          </Text>
        </View>
        <View style={{ ...styles(props.theme).earningValue }}>
          <Text
            style={{
              ...styles(props.theme).earningAmount,
              // color: props.theme.colors.text,
              color: "#fff",
            }}
          >
            {value}
          </Text>
          <Text
            style={{
              ...styles(props.theme).earningCurrency,
              // color: props.theme.colors.text,
              color: "#fff",
            }}
          >
            {props.currency.toUpperCase()}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = (theme) =>
  StyleSheet.create({
    earningCard: {
      padding: 15,
      marginHorizontal: 20,
      marginVertical: 10,
      borderRadius: 15,
      shadowColor: "#fff",
      // elevation: 10,
      display: "flex",
      flexDirection: "row",
      flex: 1,
    },
    earningIcon: {
      width: "100%",
      height: "100%",
      marginTop: 4,
      marginStart: 4,
    },
    earningTitle: {
      fontWeight: "700",
      fontSize: 18,
      flex: 1,
    },
    earningValue: {
      paddingTop: 0,
      paddingEnd: 10,
    },
    earningBalance: {},
    earningAmount: {
      fontSize: 16,
      textAlign: "right",
      paddingTop: 2,
    },
    earningCurrency: {
      fontSize: 12,
      textAlign: "right",
      fontWeight: "700",
    },
  });
