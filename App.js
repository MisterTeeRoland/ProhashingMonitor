import React, { useEffect } from "react";
import { NativeModules } from "react-native";
import * as Updates from "expo-updates";
import Navigation from "./navigation";
import { checkForUpdate } from "./tools/helpers";

export default function App() {
  useEffect(() => {
    checkForUpdate();
  }, []);

  return <Navigation />;
}
