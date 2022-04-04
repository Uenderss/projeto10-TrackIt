import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { BeatLoader } from "react-spinners";
import BigLogo from "./BigLogo";
import Button from "./Button";
import Input from "./Input";

export default function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
    axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", {
      email: email,
      password: senha
    }).then(response => {
      const {data} = response;
      props.salvarToken(data.token);
      props.salvarImg(data.image);
      navigate("/hoje");

    }).catch(function (error) {
      alert("Informe um email ou Senha Valido");
      setLoading(false);
      navigate("/");
    });
  }

  return (
    <Container>
      <BigLogo />
      <form onSubmit={handleSubmit}>
      <fieldset disabled={loading}>
      <Input type="text" placeholder="email" value={email} 
        onChange={(e) => setEmail(e.target.value)} />
      <Input type="password" placeholder="senha" value={senha} 
        onChange={(e) => setSenha(e.target.value)} />
        
        {loading ? (
          <Button>
            <BeatLoader color={"#ffffff"} />
          </Button>
        ) : (
          <Button>Entrar</Button>
        )}
         </fieldset>
        </form>
      <StyledLink to="/cadastro">Não possui uma conta? Cadastre-se</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  * {
    font-family: "Lexend Deca";
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
  text-decoration: none;
 
`;
