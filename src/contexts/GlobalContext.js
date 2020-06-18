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

  let addTransaction = (transObj) => {
    dispatch({
      type: "ADD",
      payload: {
        id: transObj.id,
        type: transObj.type,
        description: transObj.description,
        amount: transObj.amount,
      },
    });
  };

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
