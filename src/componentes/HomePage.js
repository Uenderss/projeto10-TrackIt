import React,{useContext, useEffect,useState} from "react";
import { GlobalContext } from "./Context";
import { getUsers } from "./Conexao";


const HomePage = () => {
    const {autenticador, logout}=useContext(GlobalContext);
    const [users,setUsers]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        (async()=>{
            const response =await getUsers();
            console.log(response.data);
            setUsers(response.data);
            setLoading(false);
        })();

    },[])

    const handleLogout=()=>{
        logout();
    }
    if(loading){
        return <div>Carregando dados...</div>
    }
  return (
    <>
      <h1>HomePage</h1>
      
      <button onClick={handleLogout}>Sair</button>
      <ul>
          {
           
          }
      </ul>
    </>
  );
};

export default HomePage;
