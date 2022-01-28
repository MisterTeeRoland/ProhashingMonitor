import React, { useEffect, useState, useRef } from "react";
import {
  RefreshControl,
  Dimensions,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert,
  Image,
} from "react-native";

import { coinList } from "../assets/coinlist";
import { load_keys, get_balances, get_values } from "../tools/fetches";
import InitialStateCard from "../components/InitialStateCard";
import EarningsCard from "../components/EarningsCard";
import EarningsModal from "../components/EarningsModal";
import BottomSheet from "react-native-simple-bottom-sheet";
import ErrorView from "../components/ErrorView";

export default function EarningsScreen(props) {
  let current_earnings = 0;
  const sortCase = "value";

  let running = false;

  const [loadText, setLoadText] = useState("");

  const [initialState, setInitialState] = useState(true);

  const [comp, setComp] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);
  const [totalValue, setTotalValue] = useState(0.0);

  //modal states
  const [modalVisible, setModalVisible] = useState(false);
  const [modalObj, setModalObj] = useState({});

  const panelRef = useRef(null);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    run().then(() => setRefreshing(false));
  }, []);

  const call_endpoint = async (api_key, currency, threshold) => {
    running = true;

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

    setLoadText("...getting account data...");
    const result = await get_balances(api_key);
    if (result.status === "success") {
      setComp(await renderBalances(result.data.balances, currency, threshold));
    } else {
      setComp(
        <ErrorView
          error={result.err.title}
          msg={result.err.msg}
          theme={props.theme}
        />
      );
    }

    setInitialState(false);
  };

  const loadItemToModal = (item) => {
    const abbv = item[1].abbreviation.toLowerCase();
    const source = `https://cryptoicon-api.vercel.app/api/icon/${abbv}`;

    setModalObj({
      title: item[1].name,
      image: source,
      balance: item[1].balance,
      abbv: item[1].abbreviation,
      earnings24: item[1].paid24h,
      eligiblePayout: item[1].unpaid,
      threshold: item[1].payoutThreshold,
      earnings: item[1].value,
    });

    panelRef.current.togglePanel();
  };

  const clearEarningsModal = () => {
    setModalObj({
      title: "",
      image: "",
      balance: 0.0,
      abbv: "",
      earnings24: 0.0,
      eligiblePayout: 0.0,
      threshold: 0.0,
      earnings: 0.0,
    });

    panelRef.current.togglePanel();
  };

  const renderBalances = async (balances, currency, threshold) => {
    setLoadText("...getting coin balances...");

    if (Object.entries(balances).length == 0) {
      return (
        <View>
          <Text
            style={{
              paddingHorizontal: 20,
              fontWeight: "700",
              fontSize: 18,
              color: theme.colors.text,
            }}
          >
            No current balance.
          </Text>
          <Text
            style={{
              paddingHorizontal: 20,
              paddingTop: 20,
              fontWeight: "700",
              color: theme.colors.text,
            }}
          >
            Make sure you have entered a valid Prohashing API key in the
            Settings tab and that your miner(s) are connected and running.
          </Text>
        </View>
      );
    }

    var sortable = [];

    current_earnings = 0;

    let ids = [];
    Object.entries(balances).forEach((coin) => {
      let obj = coinList.find(
        (o) => o.symbol === coin[1].abbreviation.toLowerCase()
      );
      if (obj) {
        balances[coin[0]].identifier = obj.id;
        ids.push(obj.id);
      } else {
        balances[coin[0]].identifier = null;
      }
    });

    //filter out empty indexes
    ids = ids.filter((n) => n);

    const value_result = await get_values(ids.join(","), currency);

    //go through each coin and map its price, then calc the current balance + update current earnings
    Object.entries(balances).forEach((coin) => {
      if (coin[1].identifier) {
        let val = coin[1].balance * value_result[coin[1].identifier][currency];
        balances[coin[0]].value = val;
        current_earnings += val;
        sortable.push([balances[coin[1]], balances[coin[0]]]);
      }
    });

    setTotalValue(current_earnings);

    //for now, sort by coin balance
    sortable.sort(function (a, b) {
      return b[1].value - a[1].value;
    });

    let filtered = sortable.filter((item) => item[1].value >= +threshold);
    if (filtered.length > 0) {
      running = false;
      return filtered.map((item, index) => (
        <EarningsCard
          key={index}
          item={item}
          currency={currency}
          theme={props.theme}
          onOpenModal={() => loadItemToModal(item)}
        />
      ));
    } else {
      if (sortable.length > 0) {
        return (
          <ErrorView
            error={"Small balances hidden"}
            msg={
              "All of your current coin balances are below your threshold. Decrease your threshold in the Settings tab to see more."
            }
            theme={props.theme}
          />
        );
      } else {
        return (
          <ErrorView
            error={"No balances"}
            msg={"You have no current balance. Start mining coins to earn."}
            theme={props.theme}
          />
        );
      }
    }
  };

  async function run() {
    await call_endpoint(props.apiKey, props.currency, props.threshold);
    setLoadText("");
  }

  useEffect(() => {
    run();
    const interval = setInterval(() => {
      if (!running) {
        run();
      }
    }, 15000);
    return () => clearInterval(interval);
  }, [props.apiKey, props.threshold, props.currency]);

  return (
    <>
      <View style={styles(props.theme).earningsContainer}>
        <View style={styles(props.theme).containerHeader}>
          <Text style={styles(props.theme).headerText}>EARNINGS</Text>
          <Text style={styles(props.theme).headerSubtext}>
            Current Value: {totalValue.toFixed(2)}{" "}
            {props.currency.toUpperCase()}
          </Text>
        </View>

        <Text style={styles(props.theme).loadText}>{loadText}</Text>

        {initialState && (
          <View>
            <InitialStateCard index={1} theme={props.theme} />
            <InitialStateCard index={2} theme={props.theme} />
            <InitialStateCard index={3} theme={props.theme} />
          </View>
        )}

        {!initialState && (
          <ScrollView
            style={styles(props.theme).earningsList}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View>{comp}</View>
          </ScrollView>
        )}
      </View>

      <BottomSheet
        ref={(ref) => (panelRef.current = ref)}
        sliderMinHeight={0}
        sliderMaxHeight={Dimensions.get("window").height * 0.9}
        isOpen={false}
        outerContentStyle={{
          backgroundColor: props.theme.colors.modalBg,
          paddingHorizontal: 0,
        }}
        innerContentStyle={{ backgroundColor: props.theme.colors.modalBg }}
        lineContainerStyle={{ backgroundColor: props.theme.colors.modalBg }}
        wrapperStyle={{ backgroundColor: props.theme.colors.modalBg }}
      >
        <EarningsModal
          obj={modalObj}
          onClearModal={clearEarningsModal}
          theme={props.theme}
        />
      </BottomSheet>
    </>
  );
}

const styles = (theme) =>
  StyleSheet.create({
    earningsContainer: {
      display: "flex",
      flexDirection: "column",
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
      color: theme.colors.title,
    },
    headerSubtext: {
      fontSize: 16,
      fontWeight: "700",
      color: theme.colors.subtitle,
    },
    loadText: {
      fontSize: 12,
      color: theme.colors.subtitle,
      textAlign: "center",
      marginBottom: 5,
    },
    earningsList: {},
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
