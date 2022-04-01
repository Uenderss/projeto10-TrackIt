import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./LoginPage";
import Cadastro from "./Cadastro";
import { GlobalProvider,GlobalContext } from "./Context";
import { useContext } from "react/cjs/react.production.min";

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
          <Route path="/habitos" element={<Private>Habitos</Private>}/>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};
export default AppRoutes;
