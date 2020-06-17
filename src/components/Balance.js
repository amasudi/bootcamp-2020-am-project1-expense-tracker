import React from "react";

export const Balance = () => {
  return (
    <div className="card-container">
      <div className="income-expense">
        <div className="total-income-expense">
          <h2>Income</h2>
          <span className="income-amount">$1000</span>
        </div>
        <div className="total-income-expense">
          <h2>Expense</h2>
          <span className="expense-amount">$300</span>
        </div>
      </div>
      <div className="total-balance">
        <h2>BALANCE</h2>
        <span className="balance-amount">$700</span>
      </div>
    </div>
  );
};
