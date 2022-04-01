import { createContext, useState } from "react";

import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const navigate = useNavigate();
    
    const[user,setUser]=useState(null);

    const login =(email,password)=>{
        const loggerUser ={
            id:"123",
            email,
        };
    
        localStorage.setItem("user", JSON.stringify(loggerUser));

        if(password ==="123"){
            navigate("/");
        }
        setUser({id:"122",email,})//ainda não esta com servidor.
        console.log("login",{email,password})
    };

    const logout =()=>{
        console.log("logout");
        setUser(null);
        navigate("/login");
    };

  return (
    <GlobalContext.Provider
      value={{ autenticador: !!user, user, login, logout }}
    >
        {children}
    </GlobalContext.Provider>
  );
};
