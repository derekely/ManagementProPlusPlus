import React, { useState } from "react";
// import  ReactDOM from "react";
import  AddCard  from "./components/AddCard";
import Card from './components/Card';
import NavBar  from "./components/NavBar";

function App() {
  const [buttonPopup, setButtonPopup] = useState(false)
  return(
    <>
    <NavBar />
    <Card /> 
    <button onClick={() => setButtonPopup(true)}>+</button>
    <AddCard trigger={buttonPopup} setTrigger={setButtonPopup}></AddCard>
    </>
  )
}

export default App;