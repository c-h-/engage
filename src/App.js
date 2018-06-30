import React from "react";
import { Provider } from "react-redux";
import { getStore } from "./redux/store";
import LaunchFlow from "./navigation/LaunchFlow";

const ClientApp = () => {
  return (
    <Provider store={getStore()}>
      <LaunchFlow />
    </Provider>
  );
};

export default ClientApp;
