//general
import React, {Component} from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  Link,
  NavLink,
  Outlet
} from 'react-router-dom';
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
import Statistics from "./components/Statistics";
import SimpleSteps from "./components/SimpleSteps";
import AboutUs from "./components/AboutUs";
import WhoWeHelp from "./components/WhoWeHelp";
import Contact from "./components/Contact";

function App() {
  // const {,} = ...()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="signup" element={<Signup/>} />
      </Routes>
        {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/start" element={<Start/>}/>
          <Route path="/whatisthisabout" element={<WhatIsThisAbout/>}/>

          <Route path="/">
            <Home/>
          </Route>
          <Route path="login">
            <Login/>
          </Route>
          <Route path="signup">
            <Signup/>
          </Route>
          <Route path="start">
            <Start/>
          </Route>
          <Route path="whatisthisabout">
            <WhatIsThisAbout/>
          </Route>
          <Route path="whatisthisabout">
            <WhatIsThisAbout/>
          </Route> */}
        {/* </Routes> */}
    </BrowserRouter>
  );
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
export default App;



// return (
//   <BrowserRouter>
//     <div className="App">
//       <Navheader/>
//       <Statistics />
//       <SimpleSteps />
//       <AboutUs />
//       <WhoWeHelp />
//       <Contact />
//     </div>
//   </BrowserRouter>
// );