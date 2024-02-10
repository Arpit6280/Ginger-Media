// App.js

import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import EditProfile from "./components/EditProfile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbars from "./components/Navbars";
import LoginContext from "./store/login-context";

function App() {
  const loginContext = useContext(LoginContext);
  console.log(loginContext.isloggedIn);
  return (
    <>
      {loginContext.isloggedIn ? <Navbars /> : ""}

      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/edit-profile" element={<EditProfile />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
