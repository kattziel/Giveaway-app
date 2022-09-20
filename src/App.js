//general
import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet,
} from "react-router-dom";
import ReactDOM from "react-dom";

// styles
import "./App.css";

// pages & components
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Start from "./components/Start";
import WhatIsThisAbout from "./components/WhatIsThisAbout";

import Navheader from "./components/Navheader";
import Navigation from "./components/Navigation";
import Statistics from "./components/Statistics";
import SimpleSteps from "./components/SimpleSteps";
import AboutUs from "./components/AboutUs";
import WhoWeHelp from "./components/WhoWeHelp";
import Contact from "./components/Contact";

import { AuthProvider } from "./hooks/useAuth";
import { Form } from "./components/Form";
import { Logout } from "./components/Logout";

import { RequireAuth } from "./components/RequireAuth";

function App() {
  // const {,} = ...()

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="logout" element={<Logout />} />
          <Route path="form" element={<Form />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
export default App;
