import React, { useContext } from "react";

import { GlobalContext } from "../contexts/GlobalContext";

export const Balance = () => {
  let { transactions } = useContext(GlobalContext);
  let calculateSummary = (type) => {
    let total = 0;
    transactions.forEach((transaction) => {
      if (transaction.type === type) {
        total += transaction.amount;
      }
    });
    return total;
  };
  return (
    <div className="card-container">
      <h2>SUMMARY</h2>
      <div className="income-expense">
        <div className="total-income-expense">
          <h3>Total Income</h3>
          <span className="income-amount">${calculateSummary("income")}</span>
        </div>
        <div className="total-income-expense">
          <h3>Total Expense</h3>
          <span className="expense-amount">${calculateSummary("expense")}</span>
        </div>
      </div>
      <div className="total-balance">
        <h2>BALANCE</h2>
        <span className="balance-amount">
          ${calculateSummary("income") - calculateSummary("expense")}
        </span>
      </div>
    </div>
  );
};
