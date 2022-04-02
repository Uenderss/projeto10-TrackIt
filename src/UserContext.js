import React from 'react'
import { createContext, useState } from 'react/cjs/react.production.min'
const UserContext = createContext();


export const UserStorage = ({children}) => {
    const [dados, setDados]=useState(null);
    const [login,setLogin]=useState(null);
    const [carregando,setCarregando]=useState(false);
    const [erro, setErro]=useState(null);

    async function getUser(token){
        const {url,option} = USER_GET({token});
        const response = await fetch(url,option);
        const json=await  response.json();
        setDados(json);
        setLogin(true);
    }
    async function  userLogin(username,password){
        const {url,option} = TOKEN_POST({username,password});
        const tokenRes = await fetch(url,option);
        const {token} = await tokenRe.json();
        window.localStorage.setItem('token',token);
        getUser(token);
    }

  return (
    <UserContext.Provider value={{userLogin}}>{children}</UserContext.Provider>
  )
}

