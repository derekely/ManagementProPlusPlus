import React from "react";
// import  ReactDOM from "react";
import Card from './Card';
import NavBar  from "./components/NavBar";

function App() {
  return(
    <>
    <NavBar />
    <Card />
    <button>Add New Task</button>
    </>
  )
}

export default App;
