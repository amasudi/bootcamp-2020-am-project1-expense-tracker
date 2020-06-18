import React, { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";

const initialState = {
  transactions: [
    {
      amount: 1000,
      description: "Milestone 1",
      type: "income",
    },
    {
      amount: 500,
      description: "Salaries",
      type: "expense",
    },
    {
      amount: 1200,
      description: "Milestone 2",
      type: "income",
    },
    {
      amount: 400,
      description: "Monthly Rent",
      type: "expense",
    },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{ transactions: state.transactions }}>
      {children}
    </GlobalContext.Provider>
  );
};
