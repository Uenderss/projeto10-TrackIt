import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from "./LoginPage";
import HomePage from "./HomePage";
import { GlobalProvider,GlobalContext } from "./Context";
import { useContext } from "react/cjs/react.production.min";

const AppRoutes = () => {
  const Private = ({children})=>{
    const{autenticador} = useContext(GlobalContext);
    if(!autenticador) {
        alert("Email ou Senha incorreto(s) tente novamente");
        return <Navigate to="/login"/>
    }
    return children;
  }
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<Private>Cadastro</Private>}/>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  );
};
export default AppRoutes;
