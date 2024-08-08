import logo from "./logo.svg";
import "./App.css";
import React, { Component, useReducer } from "react";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentB from "./components/ComponentB";
import ComponentC from "./components/ComponentC";
import ComponentA from "./components/ComponentA";
import DataFeatchingOne from "./components/DataFeatchingOne";
import DataFeatchingTwo from "./components/DataFeatchingTwo";
export const CountContext = React.createContext();

// const initialState = 0;

// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);
  // return (
  //   <CountContext.Provider
  //     value={{ countState: count, countDispatch: dispatch }}
  //   >
  <div className="App">
    <DataFeatchingTwo />
    {/* <DataFeatchingOne /> */}
    {/* Counter - {count}
        <ComponentA />
        <ComponentB />
        <ComponentC /> */}
    {/* <CounterThree /> */}
    {/* <CounterTwo /> */}
    {/* <CounterOne/> */}
  </div>;
  // </CountContext.Provider>
  // );
}

export default App;
