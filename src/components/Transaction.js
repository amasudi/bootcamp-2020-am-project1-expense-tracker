import React, { useContext } from "react";

import { GlobalContext } from "../contexts/GlobalContext";

export const Transaction = ({ transaction }) => {
  let { handleTransactions } = useContext(GlobalContext);
  let handleRemoveTransaction = (id) => {
    handleTransactions("REMOVE", { id: id });
  };
  return (
    <li className={transaction.type}>
      <span className="desc">{transaction.description}</span>{" "}
      <span className="amt">${transaction.amount}</span>
      <button
        className="del-btn"
        onClick={() => handleRemoveTransaction(transaction.id)}
      >
        X
      </button>
    </li>
  );
};
