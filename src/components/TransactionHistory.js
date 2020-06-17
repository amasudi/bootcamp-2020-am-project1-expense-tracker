import React from "react";

export const TransactionHistory = () => {
  let mainHeading = "All Transactions";
  return (
    <div className="card-container">
      <h2>{mainHeading}</h2>
      <div>
        <button className="transaction-button">All Transactions</button>
        <button className="transaction-button">Income Transactions</button>
        <button className="transaction-button">ExpenseTransactions</button>
      </div>
      <ul className="transaction-list">
        <li className="income">
          <span>First Milestone</span> <span>$1000</span>
        </li>
        <li className="expense">
          <span>Salary</span> <span>$500</span>
        </li>
      </ul>
    </div>
  );
};
