import React, { useState } from "react";

export const AddTransaction = () => {
  const [newDescription, setDescription] = useState();
  const [newAmount, setAmount] = useState();
  return (
    <div className="card-container">
      <form className="transaction-form">
        <h2>Add New Transaction</h2>
        <label htmlFor="doscription">Description:</label>
        <br />
        <input
          name="doscription"
          type="text"
          value={newDescription}
          placeholder="Add Description"
          onchange={(e) => {
            setDescription(e.target.value);
          }}
          required
        />
        <br />
        <label htmlFor="amount">Amount:</label>
        <br />
        <input
          name="amount"
          type="number"
          min="1"
          value={newAmount}
          placeholder="Add Amount"
          onchange={(e) => {
            setAmount(e.target.value);
          }}
          required
        />
        <br />
        <button className="btn income-btn">Add Income</button>
        <button className="btn expense-btn">Add Expense</button>
      </form>
    </div>
  );
};
