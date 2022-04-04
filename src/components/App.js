import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../GlobalStyle.css';
import { useState } from "react";
import LoginPage from "./LoginPage";
import Hoje from "./Hoje";
import Cadastro from "./Cadastro";
import GerirHabitos from "./Habitos/GerirHabitos";

function App() {
  const [token, setToken] = useState(null);
  const [image, setImage] = useState();

  return (
    <BrowserRouter>
    <GlobalStyle />
      <Routes>
        <Route path="/" element={ <LoginPage
              salvarToken={(token) => setToken(token)}
              salvarImg={(image) => setImage(image)}
            />
          }
        />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/hoje" element={<Hoje token={token} image={image} />} />
        <Route path="/habitos" element={<GerirHabitos token={token} image={image}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
