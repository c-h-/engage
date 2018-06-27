import React from "react";
import { Provider } from "react-redux";
import { getStore } from "./redux/store";
import Navigator from "./navigation/Navigator";

const ClientApp = () => {
  return (
    <Provider store={getStore()}>
      <Navigator />
    </Provider>
  );
};

export default ClientApp;
