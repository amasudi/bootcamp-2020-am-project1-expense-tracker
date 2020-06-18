import React, { useState, useContext } from "react";

import { GlobalContext } from "../contexts/GlobalContext";
import { Transaction } from "./Transaction";

export const TransactionHistory = () => {
  let { transactions } = useContext(GlobalContext);
  let [mainHeading, setMainHeading] = useState("All Transactions");
  let [allTransactions, setAllTransactions] = useState(transactions);
  let filterTransactions = (type) => {
    switch (type) {
      case "income":
        setMainHeading("Income Transactions");
        setAllTransactions(
          transactions.filter((transaction) => transaction.type === "income")
        );
        break;
      case "expense":
        setMainHeading("Expense Transactions");
        setAllTransactions(
          transactions.filter((transaction) => transaction.type === "expense")
        );
        break;
      default:
        setMainHeading("All Transactions");
        setAllTransactions(transactions);
    }
  };
  return (
    <div className="card-container">
      <h2>{mainHeading}</h2>
      <div className="btn-container">
        <button
          className="transaction-button all-inc"
          onClick={() => filterTransactions("income")}
        >
          Income Transactions
        </button>
        <button
          className="transaction-button all-exp"
          onClick={() => filterTransactions("expense")}
        >
          Expense Transactions
        </button>
        <button
          className="transaction-button all-tr"
          onClick={() => filterTransactions("")}
        >
          All Transactions
        </button>
      </div>
      <ul className="transaction-list">
        {allTransactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
};
