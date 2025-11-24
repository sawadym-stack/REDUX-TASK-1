const initialUserState = {
  name: "",
  loggedIn: false,
};

function userReducer(state = initialUserState, action) {
  switch (action.type) {
    case "LOGIN":
      return { ...state, name: action.payload, loggedIn: true };

    case "LOGOUT":
      return { ...state, name: "", loggedIn: false };

    default:
      return state;
  }
}

export default userReducer;
