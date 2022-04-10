export default (state = [], action) => {
  switch (action.type) {
    case "POSTS_FETCH":
      return action.payload;
    default:
      return state;
  }
};
