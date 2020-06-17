import React from "react";

export const AddTransaction = () => {
  return (
    <div className="card-container">
      <div className="transaction-form">
        <h2>Add New Transaction</h2>
        <label htmlFor="doscription">Description:</label>
        <br />
        <input name="doscription" type="text" value="" required />
        <br />
        <label htmlFor="amount">Amount:</label>
        <br />
        <input name="amount" type="number" min="1" value="" required />
        <br />
        <button className="btn income-btn">Add Income</button>
        <button className="btn expense-btn">Add Expense</button>
      </div>
    </div>
  );
};
