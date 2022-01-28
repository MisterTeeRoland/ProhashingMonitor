import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Picker,
  Text,
  View,
  TextInput,
  Alert,
  Switch,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import APIKeyDirections from "../components/APIKeyDirections";
import { set_keys, load_keys } from "../tools/fetches";

// export default function SettingsScreen({navigation, route}) {
export default function SettingsScreen(props) {
  const [api_key, setRealApiKey] = useState(props.apiKey);

  const currencies = [
    "aed",
    "ars",
    "aud",
    "bch",
    "bdt",
    "bhd",
    "bmd",
    "bnb",
    "brl",
    "btc",
    "cad",
    "chf",
    "clp",
    "cny",
    "czk",
    "dkk",
    "dot",
    "eos",
    "eth",
    "eur",
    "gbp",
    "hkd",
    "huf",
    "idr",
    "ils",
    "inr",
    "jpy",
    "krw",
    "kwd",
    "lkr",
    "ltc",
    "mmk",
    "mxn",
    "myr",
    "ngn",
    "nok",
    "nzd",
    "php",
    "pkr",
    "pln",
    "rub",
    "sar",
    "sek",
    "sgd",
    "thb",
    "try",
    "twd",
    "uah",
    "usd",
    "vef",
    "vnd",
    "xag",
    "xau",
    "xdr",
    "xlm",
    "xrp",
    "yfi",
    "zar",
    "bits",
    "link",
    "sats",
  ];
  const [currency, setCurrency] = useState(props.currency);
  const [currMap, setCurrMap] = useState(null);

  const [threshold, setThreshold] = useState(props.threshold);

  const [showDirections, setShowDirections] = useState(false);

  const [isEnabled, setIsEnabled] = useState(props.theme.dark);

  const toggleSwitch = async (active) => {
    setIsEnabled(active);
    let theme = active ? "dark" : "light";
    let success = await set_keys({
      api_key,
      currency,
      threshold: threshold.toString(),
      theme,
    });
    if (success) {
      changeSettings({ api_key, currency, threshold, theme });
    }
  };

  const saveKeys = async () => {
    let theme = isEnabled ? "dark" : "light";
    let success = await set_keys({
      api_key,
      currency,
      threshold: threshold.toString(),
      theme,
    });
    if (success) {
      Alert.alert("Success", "Settings updated.");
      changeSettings({ api_key, currency, threshold, theme });
    }
  };

  const changeSettings = (e) => {
    props.onSettingsChanged(e);
  };

  const reset = async () => {
    setRealApiKey("");
    setCurrency("usd");
    setThreshold(0.001);
    setIsEnabled(false);
    let success = await set_keys({
      api_key: "",
      currency: "usd",
      threshold: "0.001",
      theme: "light",
    });
    if (success) {
      Alert.alert("Success", "Settings reset.");
    }
  };

  const updateKey = (text) => {
    setRealApiKey(text);
  };

  const updateCurrency = (text) => {
    setCurrency(text);
  };

  const updateThreshold = (text) => {
    setThreshold(text);
  };

  const render_currencies = () => {
    return currencies.map((item, index) => (
      <Picker.Item label={item.toUpperCase()} value={item} key={index} />
    ));
  };

  const showAPIDirections = () => {
    setShowDirections(true);
  };

  const hideAPIDirections = () => {
    setShowDirections(false);
  };

  useEffect(() => {
    setCurrMap(render_currencies());
  }, []);

  return (
    <ScrollView style={styles(props.theme).container}>
      <View>
        <View style={styles(props.theme).containerHeader}>
          <Text
            style={{
              ...styles(props.theme).headerText,
              color: props.theme.colors.title,
            }}
          >
            SETTINGS
          </Text>
        </View>

        <View>
          <View
            style={{
              ...styles(props.theme).settingsDiv,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <View>
              <Text
                style={{
                  ...styles(props.theme).settingsLabel,
                  textAlign: "left",
                  width: "100%",
                }}
              >
                Prohashing
              </Text>
              <Text
                style={{
                  ...styles(props.theme).settingsLabel,
                  textAlign: "left",
                  width: "100%",
                }}
              >
                API key:{" "}
                <MaterialCommunityIcons
                  name="account-question"
                  color={props.theme.colors.text}
                  size={20}
                  onPress={showAPIDirections}
                />
              </Text>
            </View>
            <TextInput
              style={styles(props.theme).settingsInput}
              onChangeText={(text) => updateKey(text)}
              value={api_key}
            />
          </View>

          <View
            style={{
              ...styles(props.theme).settingsDiv,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Text style={styles(props.theme).settingsLabel}>
              Default Currency:
            </Text>
            <View
              style={{
                ...styles(props.theme).settingsInput,
                paddingBottom: 50,
              }}
            >
              <Picker
                selectedValue={currency}
                onValueChange={(itemValue, itemIndex) => setCurrency(itemValue)}
                style={styles(props.theme).pickerStyles}
              >
                {currMap}
              </Picker>
            </View>
          </View>

          <View
            style={{
              ...styles(props.theme).settingsDiv,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={{
                  ...styles(props.theme).settingsLabel,
                  textAlign: "left",
                  width: "100%",
                }}
              >
                Hide small
              </Text>
              <Text
                style={{
                  ...styles(props.theme).settingsLabel,
                  textAlign: "left",
                  width: "100%",
                }}
              >
                balances under:
              </Text>
            </View>

            <TextInput
              style={styles(props.theme).settingsInput}
              keyboardType="numeric"
              onChangeText={(text) => updateThreshold(text)}
              value={threshold.toString()}
            />
          </View>

          <View
            style={{
              ...styles(props.theme).settingsDiv,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignContent: "center",
            }}
          >
            <Text style={styles(props.theme).settingsLabel}>Dark Mode</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#917cff" }}
              thumbColor={isEnabled ? "#5dd9df" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={styles(props.theme).successButton}
            onPress={saveKeys}
          >
            <Text style={styles(props.theme).buttonText}>SAVE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles(props.theme).cancelButton}
            onPress={reset}
          >
            <Text style={styles(props.theme).buttonText}>RESET</Text>
          </TouchableOpacity>
        </View>
      </View>

      {showDirections && (
        <APIKeyDirections
          onCloseModal={hideAPIDirections}
          theme={props.theme}
        />
      )}
    </ScrollView>
  );
}

const styles = (theme) =>
  StyleSheet.create({
    container: {
      display: "flex",
      flex: 1,
      width: "100%",
      backgroundColor: theme.colors.background,
    },
    containerHeader: {
      marginHorizontal: 23,
      paddingTop: 50,
      paddingBottom: 10,
    },
    headerText: {
      fontSize: 32,
      fontWeight: "700",
      marginBottom: 20,
    },
    settingsDiv: {
      marginBottom: 30,
      paddingHorizontal: 20,
    },
    settingsLabel: {
      color: theme.colors.text,
      fontWeight: "700",
      fontSize: 18,
      textAlign: "left",
      alignSelf: "center",
    },
    settingsInput: {
      height: 40,
      borderWidth: 1,
      marginTop: 10,
      paddingHorizontal: 10,
      borderRadius: 15,
      backgroundColor: theme.colors.inputBg,
      color: theme.colors.inputColor,
      borderColor: "transparent",
      elevation: 3,
      width: 125,
    },
    successButton: {
      backgroundColor: theme.colors.primary,
      color: "#fff",
      padding: 8,
      marginTop: 20,
      borderRadius: 15,
      height: 40,
      marginHorizontal: 20,
    },
    cancelButton: {
      backgroundColor: theme.colors.tertiary,
      padding: 8,
      marginTop: 20,
      borderRadius: 15,
      height: 40,
      marginHorizontal: 20,
    },
    buttonText: {
      color: "#000",
      textAlign: "center",
      fontWeight: "700",
    },
    pickerStyles: {
      color: theme.colors.inputColor,
    },
  });
