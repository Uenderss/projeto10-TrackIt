import React from "react";
import "@fontsource/lexend-deca";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Cadastro from "./Cadastro";
import GlobalCss from "./Global.css";
import { UserStorage } from "./UserContext";

const App = () => {
  return(<>
    <BrowserRouter>
    <GlobalCss/>
    <UserStorage>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/cadastro" element={<Cadastro/>}/>
      </Routes>
      </UserStorage>
    </BrowserRouter>
  </>) 
};

export default App;
