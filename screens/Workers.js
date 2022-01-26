import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  RefreshControl,
  StyleSheet,
  ScrollView,
} from "react-native";

import InitialStateCard from "../components/InitialStateCard";
import WorkersCard from "../components/WorkersCard";
import WorkersModal from "../components/WorkersModal";
import ErrorView from "../components/ErrorView";

export default function WorkersScreen(props) {
  const [loadText, setLoadText] = useState("");

  const [comp, setComp] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [initialState, setInitialState] = useState(true);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalObj, setModalObj] = useState({});

  const [numWorkers, setNumWorkers] = useState(0);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    run().then(() => setRefreshing(false));
  }, []);

  const call_endpoint = async (api_key) => {
    if (!api_key || api_key == undefined) {
      setComp(
        <ErrorView
          error="Missing API key."
          msg="Please enter your Prohashing API key in the Settings tab."
          theme={props.theme}
        />
      );
      setInitialState(false);
      return;
    }

    try {
      setLoadText("...getting worker data...");
      const req = await fetch(
        `https://prohashing.com/api/v1/walletEx?apiKey=${api_key}`
      );
      let res = await req.json();
      if (res.status && res.status == "success") {
        setNumWorkers(res.data.miners.length);
        setComp(renderWorkers(res.data.miners));
      } else if (res.code && res.code == 400) {
        setComp(
          <ErrorView
            error="Invalid API Key."
            msg="Please verify you have entered the correct API key in the Settings tab."
            theme={props.theme}
          />
        );
      } else {
        setComp(
          <ErrorView
            error="Generic Error."
            msg="Please restart the app and try again."
            theme={props.theme}
          />
        );
      }
    } catch (e) {
      setComp(
        <ErrorView
          error="Error."
          msg="Please make sure you have an active internet connection and try again."
          theme={props.theme}
        />
      );
    }
    setInitialState(false);
  };

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

  const renderWorkers = (miners) => {
    if (miners.length == 0) {
      return (
        <View>
          <Text
            style={{
              paddingHorizontal: 20,
              fontWeight: "700",
              fontSize: 18,
              color: props.theme.colors.text,
            }}
          >
            No active workers.
          </Text>
          <Text
            style={{
              paddingHorizontal: 20,
              paddingTop: 20,
              fontWeight: "700",
              color: props.theme.colors.text,
            }}
          >
            Make sure you have entered a valid Prohashing API key in the
            Settings tab and that your miner(s) are connected and running.
          </Text>
        </View>
      );
    }

    return miners.map((item, index) => (
      <WorkersCard
        key={index}
        item={item}
        onOpenModal={() => loadItemToModal(item)}
        theme={props.theme}
      />
    ));
  };

  const loadItemToModal = (item) => {
    setModalObj({
      title: item.ID,
      algo: item.algo,
      coin: item.coin,
      hash: convert_hashes(item.accepted),
      minRestart: item.minRestartDelay.toFixed(3),
      diff: item.difficulty,
      workRestartPenalty: item.workRestartPenalty,
    });

    setModalVisible(true);
  };

  const clearModal = () => {
    setModalObj({
      title: "",
      algo: "",
      coin: "",
      hash: 0,
      minRestart: 0,
      diff: 0,
      workRestartPenalty: 0,
    });

    setModalVisible(false);
  };

  async function run() {
    setRefreshing(true);
    await call_endpoint(props.apiKey);
    setRefreshing(false);
    setLoadText("");
  }

  useEffect(() => {
    run();
  }, [props.apiKey]);

  return (
    <View
      style={{
        ...styles(props.theme).workersContainer,
        backgroundColor: props.theme.colors.background,
      }}
    >
      <View style={styles(props.theme).containerHeader}>
        <Text
          style={{
            ...styles(props.theme).headerText,
            color: props.theme.colors.title,
          }}
        >
          WORKERS
        </Text>
        <Text
          style={{
            ...styles(props.theme).headerSubtext,
            color: props.theme.colors.subtitle,
          }}
        >
          Connected: {numWorkers}
        </Text>
      </View>

      <Text
        style={{
          fontSize: 12,
          color: props.theme.colors.subtitle,
          textAlign: "center",
          marginBottom: 5,
        }}
      >
        {loadText}
      </Text>

      {initialState && (
        <View>
          <InitialStateCard index={1} theme={props.theme} />
          <InitialStateCard index={2} theme={props.theme} />
          <InitialStateCard index={3} theme={props.theme} />
        </View>
      )}

      {!initialState && (
        <ScrollView
          style={styles(props.theme).workersList}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View>{comp}</View>
        </ScrollView>
      )}

      <WorkersModal
        obj={modalObj}
        visible={modalVisible}
        theme={props.theme}
        onClearModal={clearModal}
      />
    </View>
  );
}

const styles = (theme) =>
  StyleSheet.create({
    workersContainer: {
      display: "flex",
      flex: 1,
      width: "100%",
      backgroundColor: "#fff",
    },
    containerHeader: {
      marginHorizontal: 23,
      paddingTop: 50,
      paddingBottom: 10,
    },
    headerText: {
      fontSize: 32,
      fontWeight: "700",
    },
    headerSubtext: {
      fontSize: 16,
      fontWeight: "700",
    },
    workersList: {},
    errorText: {
      color: "red",
      fontWeight: "700",
    },
    button: {
      backgroundColor: "blue",
      padding: 10,
      marginVertical: 10,
      borderRadius: 15,
      width: "90%",
      marginHorizontal: "5%",
    },
    buttonText: {
      color: "white",
      fontSize: 16,
      fontWeight: "700",
      textAlign: "center",
    },
  });
