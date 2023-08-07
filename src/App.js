//general
import React from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

// styles
import "./App.css";

// pages & components
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navigation from "./components/Navigation";

import { AuthProvider } from "./hooks/useAuth";
import { Form } from "./components/Form";
import { Logout } from "./components/Logout";

// import { RequireAuth } from "./components/RequireAuth";

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
