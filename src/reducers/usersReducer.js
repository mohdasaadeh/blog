export default (state = [], action) => {
  switch (action.type) {
    case "USER_FETCH":
      return [...state, action.payload];
    default:
      return state;
  }
};
