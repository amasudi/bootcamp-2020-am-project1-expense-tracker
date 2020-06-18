import React, { useState, useContext } from "react";

import { GlobalContext } from "../contexts/GlobalContext";

export const AddTransaction = () => {
  let { transactions, handleTransactions } = useContext(GlobalContext);
  let [newDescription, setDescription] = useState("");
  let [newAmount, setAmount] = useState(1);
  let handleAddTransaction = (type) => {
    if (newDescription === "" || newAmount === "") {
      alert("Please fill all the fields.");
    } else {
      handleTransactions("ADD", {
        id: transactions.length + 1,
        type: type,
        description: newDescription,
        amount: Number(newAmount),
      });
    }
    setDescription("");
    setAmount(1);
  };
  return (
    <div className="card-container">
      <div className="transaction-form">
        <h2>Add New Transaction</h2>
        <label htmlFor="doscription">Description:</label>
        <br />
        <input
          name="doscription"
          type="text"
          value={newDescription}
          placeholder="Add Description"
          autoComplete="off"
          onChange={(e) => {
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
          autoComplete="off"
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          required
        />
        <br />
        <button
          className="btn income-btn"
          onClick={() => handleAddTransaction("income")}
        >
          Add Income
        </button>
        <button
          className="btn expense-btn"
          onClick={() => handleAddTransaction("expense")}
        >
          Add Expense
        </button>
      </div>
    </div>
  );
};
