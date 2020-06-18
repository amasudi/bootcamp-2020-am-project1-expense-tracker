import React from "react";

export const Transaction = ({ transaction }) => {
  return (
    <li className={transaction.type}>
      <span className="desc">{transaction.description}</span>{" "}
      <span className="amt">${transaction.amount}</span>
      <button className="del-btn">X</button>
    </li>
  );
};
