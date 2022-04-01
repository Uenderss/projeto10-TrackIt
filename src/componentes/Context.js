import { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import {api, createSession} from './Conexao';


export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const navigate = useNavigate();
    const [carregando, setCarregando]=useState(true);

    const[user,setUser]=useState(null);

    useEffect(()=>{
        const recuperarUsuario= localStorage.getItem('user');
        const token= localStorage.getItem('token');
        if(recuperarUsuario && token){
            setUser(JSON.parse(recuperarUsuario));  
            api.defaults.headers.Authorization=`Bearer ${token}`;       
        }
        setCarregando(false);

    },[])

    const login = async (email,password)=>{
        
        const response = await createSession(email,password);

        console.log("login auth chegou aqui",response);

        const loggerUser =response.data.user;
        const token = response.data.token;

        localStorage.setItem("user", JSON.stringify(loggerUser));
        localStorage.setItem("token",token);
        api.defaults.headers.Authorization =`Bearer ${token}`;
       
        setUser(loggerUser);
        navigate("/habitos");
        
    };

    const logout =()=>{
        console.log("logout");
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        api.defaults.headers.Authorization =null;
        setUser(null);
        navigate("/login");
    };

  return (
    <GlobalContext.Provider
      value={{ authenticated: !!user, user, carregando, login, logout }}
    >
        {children}
    </GlobalContext.Provider>
  );
};
