function chatReducer(state = [], action) {
  switch (action.type) {
    case "chat/reseve":
      return [...state, action.payload];
    case "chat/send":
      return [...state, action.payload];
    default:
      return state;
  }
}

export default chatReducer;
