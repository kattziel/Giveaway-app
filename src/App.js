//general
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// styles
import "./App.css";

// pages & components
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navigation from "./components/Navigation";

import { Form } from "./components/Form";
import { Logout } from "./components/auth/Logout";

import { AuthContextProvider } from "./components/context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="logout" element={<Logout />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
export default App;
