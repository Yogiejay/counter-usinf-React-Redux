import "./App.css";
import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";
function App() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });
  return (
    <div className="App">
      <h1>Counter App Using React Reducer</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        INCREMENT
      </button>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        DECREMENT
      </button>
    </div>
  );
}

export default App;
