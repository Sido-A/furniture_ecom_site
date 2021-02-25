export const initialState = {
  basket: [],
  user: null,
  product: [],
};

const reducer = (state, action) => {
  console.log(action.type);
  switch (action) {
    case "ADD_COLOR":
      return null;
    default:
      return state;
  }
};

export default reducer;
