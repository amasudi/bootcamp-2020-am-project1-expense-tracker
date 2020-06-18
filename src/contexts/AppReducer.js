export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { transactions: [...state.transactions, action.payload] };
      break;
    case "REMOVE":
      let newTrans = state.transactions.filter(
        (transaction) => transaction.id !== action.payload.id
      );
      return {
        transactions: newTrans,
      };
      break;
    default:
      return state;
  }
};
