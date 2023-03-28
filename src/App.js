import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Project from "./pages/Project";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Tasks from "./pages/Tasks";
import Profile from "./pages/Profile";
import Header from "./components/Header";

function App() {
  return (
<>
<Router>
  <Header/>
  <Routes>
<Route path="/sign-in" element={<SignIn/>}/>
<Route path="/" element={<SignIn/>}/>
<Route path="/Project" element={<Project/>}/>
<Route path="/profile" element={<Profile/>}/>
<Route path="/sign-up" element={<SignUp/>}/>
<Route path="/forgot-password" element={<ForgotPassword/>}/>
<Route path="/tasks" element={<Tasks/>}/>
  </Routes>
</Router>
</>
  );
}

export default App;
