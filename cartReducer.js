const initialCartState = {
  items: [],
};

function cartReducer(state = initialCartState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item !== action.payload),
      };

    default:
      return state;
  }
}

export default cartReducer;
