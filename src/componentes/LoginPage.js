import React from "react";
import logo from "../assets/imagem/logo.png";
import styled from "styled-components";
import "@fontsource/lexend-deca";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit",{email,password});
  };

  return (
    <Tela1>
      <Imagem>
        <img src={logo} alt="logo" />
      </Imagem>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          name="email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="senha"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Entrar</button>
        <span>Não tem uma conta? Cadastre-se!</span>
      </Form>
    </Tela1>
  );
};

export default LoginPage;

const Imagem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 303px;
  height: 242.4px;
  margin: 6px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 303px;
  height: 242.4px;
  margin: 6px;

  input {
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 3px;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
  }
  button {
    width: 303px;
    height: 45px;
    background: #52b6ff;
    border-radius: 4.63636px;
    border: 0;
    margin: 3px;
    color: white;
    font-size: 20.976px;
    line-height: 26px;
  }
  span {
    width: 232px;
    height: 17px;
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #52b6ff;
  }
`;

const Tela1 = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  img {
    width: 180px;
  }
  * {
    font-family: "Lexend Deca";
  }
`;
