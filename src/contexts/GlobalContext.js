import React, { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";

let initialState = {
  transactions: [
    {
      id: 1,
      amount: 1000,
      description: "Milestone 1",
      type: "income",
    },
    {
      id: 2,
      amount: 500,
      description: "Salaries",
      type: "expense",
    },
    {
      id: 3,
      amount: 1200,
      description: "Milestone 2",
      type: "income",
    },
    {
      id: 4,
      amount: 400,
      description: "Monthly Rent",
      type: "expense",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  let [state, dispatch] = useReducer(AppReducer, initialState);

  let handleTransactions = (type, transObj) => {
    switch (type) {
      case "ADD":
        dispatch({
          type: type,
          payload: {
            id: transObj.id,
            type: transObj.type,
            description: transObj.description,
            amount: transObj.amount,
          },
        });
        break;
      case "REMOVE":
        dispatch({
          type: type,
          payload: { id: transObj.id },
        });
        break;
    }
  };

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, handleTransactions }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
