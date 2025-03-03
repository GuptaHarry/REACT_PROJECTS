import React from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter,Routes,Route, Link } from "react-router";
import Home from "./src/components/Home";
import Contact from "./src/components/Contact";
import About from "./src/components/About";
import Details from "./src/components/Details";
import Zero from "./src/components/Zero";
import Hi from "./src/components/Hi";
import Hello from "./src/components/Hello";
function App(){
    return (
        <>
        
        <h1>Hello</h1>

        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
            <Link to="/Details">Details</Link>
        </nav>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/Contact" element={<Contact/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            
            {/* till now normal routing  */}

            {/* now nested routing  */}
            <Route path="/Details" element={<Details/>}>
            
              <Route index element={<Zero/>}></Route>
              <Route path="Hi" element={<Hi/>}></Route>
              <Route path="Hello" element={<Hello/>}></Route>
            
            
            
            </Route>
          </Routes>
        </BrowserRouter>
        </>
    )
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);