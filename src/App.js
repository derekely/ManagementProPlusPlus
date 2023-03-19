import React from "react";
// import  ReactDOM from "react";
import  AddCard  from "./components/AddCard";
import Card from './components/Card';
import NavBar  from "./components/NavBar";

function App() {
  return(
    <>
    <NavBar />
    <Card /> 
    <button onClick={() =>
      <AddCard />
    }>+</button>
    </>
  )
}

export default App;
