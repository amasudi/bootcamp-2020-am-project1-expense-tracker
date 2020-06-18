import React, { createContext, useReducer } from "react";

import { AppReducer } from "./AppReducer";

let initialState = {
  transactions: [],
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
      default:
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
