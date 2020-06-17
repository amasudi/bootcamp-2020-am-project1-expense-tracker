import React from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionHistory } from "./components/TransactionHistory";
import { AddTransaction } from "./components/AddTransaction";

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <TransactionHistory />
      <AddTransaction />
    </div>
  );
}

export default App;
