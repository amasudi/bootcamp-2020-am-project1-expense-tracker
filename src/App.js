import React, { useReducer } from "react";
import "./App.css";

import { GlobalProvider } from "./contexts/GlobalContext";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <TransactionHistory />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
