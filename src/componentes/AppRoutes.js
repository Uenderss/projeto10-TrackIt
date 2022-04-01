import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./LoginPage";
import Cadastro from "./Cadastro";
import Hoje from './Hoje';
import { GlobalProvider, GlobalContext } from "./Context";
import { useContext } from "react";

const AppRoutes = () => {
  const Private = ({children})=>{
    const{autenticador,carregando} = useContext(GlobalContext);

    if(carregando){
        return <div >carregando...</div>
    }
    if(!autenticador) {
        alert("Email ou Senha incorreto(s) tente novamente");
        return <Navigate to="/cadastro"/>
    }
    return children;
  }
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/hoje" element={<Private>Hoje</Private>}/>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};
export default AppRoutes;
