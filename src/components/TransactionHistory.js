import React, { useContext } from "react";

import { GlobalContext } from "../contexts/GlobalContext";
import { Transaction } from "./Transaction";

export const TransactionHistory = () => {
  let { transactions } = useContext(GlobalContext);
  return (
    <div className="card-container">
      <h2>Transaction History</h2>
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
