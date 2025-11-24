import store from "./store.js";

store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

store.dispatch({ type: "INCREMENT" }); 
store.dispatch({ type: "INCREMENT" }); 
store.dispatch({ type: "DECREMENT" }); 
store.dispatch({ type: "RESET" }); 
store.dispatch({ type: "INCREMENT" }); 
store.dispatch({ type: "INCREMENT" }); 
store.dispatch({ type: "INCREMENT" }); 

















