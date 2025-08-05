import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from "./MyComponents/Navbar";
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import Contact from "./MyComponents/Contact";
import PasswordValidator from "./MyComponents/PasswordValidator";
import ColorBox from "./MyComponents/ColorBox";
import Emojipicker from "./MyComponents/EmojiPicker";
import "./App.css"
import Login from "./MyComponents/Login";
import CreditCardValidator from "./MyComponents/CreditCardValidator";


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar title="NaviGation System" />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/passwordvalidator" element={<PasswordValidator />}></Route>
      <Route path="/colorbox" element={<ColorBox />}></Route>
      <Route path="/emojipicker" element={<Emojipicker />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/creditcard" element={<CreditCardValidator />}></Route>

    </Routes>

    
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
