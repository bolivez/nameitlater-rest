import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider as ReduxProvider } from "react-redux";

//! REDUX
import RootNav from "./src/navigation/RootNav";
import store from "./src/redux/store";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <RootNav />
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
