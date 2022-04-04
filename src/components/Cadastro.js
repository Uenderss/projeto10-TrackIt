import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import BigLogo from "./BigLogo";
import Button from "./Button";
import Input from "./Input";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [imagem, setImagem] = useState("");
  const [senha, setSenha] = useState("");


  const navigate = useNavigate();

  function cadastrar() {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
    const promise = axios.post(URL, {
      name: nome,
      email: email,
      image: imagem,
      password: senha,
    });
    promise.then((response) => {
      const { data } = response;
      console.log(data);
      navigate("/");
    });
    promise.catch((err) => console.log(err.response));
  }

  return (
    <Container>
      <BigLogo />

      <Input
        type="text"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Input
        type="text"
        placeholder="nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <Input
        type="text"
        placeholder="foto"
        value={imagem}
        onChange={(e) => setImagem(e.target.value)}
      />

      <Button onClick={cadastrar}>cadastrar</Button>
      <StyledLink to="/">Já possui uma conta? Faça login</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  padding: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52B6FF;
`;
