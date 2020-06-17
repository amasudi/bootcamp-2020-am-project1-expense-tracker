import React from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { TransactionHistory } from "./components/TransactionHistory";

function App() {
  return (
    <div>
      <Header />
      <Balance />
      <TransactionHistory />
    </div>
  );
}

export default App;
