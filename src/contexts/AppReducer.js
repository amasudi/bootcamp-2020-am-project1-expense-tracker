export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      return [action.payload, ...state.transactions];
    }
    case "REMOVE": {
    }
    default:
      return state;
  }
};
