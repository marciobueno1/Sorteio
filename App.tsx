if (__DEV__) {
  var Reactotron = require("./src/ReactotronConfig").default;
}
import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";

import Home from "./src/Home";

const App = () => {
  useEffect(() => {
    if (__DEV__) Reactotron.clear();
  }); // componentDidMount
  console.log("Impressão no console do expo");
  if (__DEV__) Reactotron.log("Impressão no reactotron");
  return (
    <PaperProvider>
      <View style={styles.container}>
        <Home />
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
};

const AppWithBenefits = __DEV__ ? Reactotron.overlay(App) : App;

export default AppWithBenefits;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
