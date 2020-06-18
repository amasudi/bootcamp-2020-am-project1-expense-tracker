export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      {
        return { transactions: [...state.transactions, action.payload] };
      }
      break;
    case "REMOVE":
      {
      }
      break;
    default:
      return state;
  }
};
