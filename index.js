// import store from "./store.js";

// store.subscribe(() => {
//   console.log("Updated State:", store.getState());
// });

// store.dispatch({ type: "INCREMENT" }); 
// store.dispatch({ type: "INCREMENT" }); 
// store.dispatch({ type: "DECREMENT" }); 
// store.dispatch({ type: "RESET" }); 
// store.dispatch({ type: "INCREMENT" }); 
// store.dispatch({ type: "INCREMENT" }); 
// store.dispatch({ type: "INCREMENT" }); 


import store from "./store.js";

store.subscribe(() => {
  console.log("STATE UPDATED:", store.getState());
});

// User actions
store.dispatch({ type: "LOGIN", payload: "Muhammed" });
store.dispatch({ type: "ADD_ITEM", payload: "Pizza" });
store.dispatch({ type: "ADD_ITEM", payload: "Burger" });
store.dispatch({ type: "REMOVE_ITEM", payload: "Pizza" });
store.dispatch({ type: "LOGOUT" });
















