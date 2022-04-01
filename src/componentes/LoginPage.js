import React from "react";
import logo from "../assets/imagem/logo.png";
import styled from "styled-components";
import "@fontsource/lexend-deca";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./Context";
import { css } from "@emotion/react";
import { BeatLoader } from "react-spinners";

const LoginPage = () => {
  const { login } = useContext(GlobalContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [habilitar, setHabilitar] = useState(false);
  const [loading, setLoading] = useState("Entrar");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(<BeatLoader css={override} color={"#ffffff"}/>);
    setHabilitar(!habilitar);
    // login(email, password);

    login(email, password)
      .then(function (response) {
        
      })
      .catch(function (error) {
        alert(`    Senha ou usuario inválido!
    Por favor tente novamente ou realize seu cadastro.
            `);
        setLoading("Entrar");
        setPassword("");
        setEmail("");
        console.log(error);
      });
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
          disabled={habilitar}
        />
        <input
          placeholder="senha"
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={habilitar}
        />
        <button type="submit">{loading}
        
        </button>
      
        <span>
          <Link
            to="/cadastro"
            onClick={() => {
              setLoading(!loading);
            }}
          >
            Não tem uma conta? Cadastre-se!
          </Link>
        </span>
      </Form>
    
    </Tela1>
    
  );
};

export default LoginPage;

const override =css`

`;


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
    background-color: ${props=>props.value!== undefined ?"#D4D4D4":"#FFFFFF"};
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
    opacity: ${props=>props.value!== undefined ? 0.7 : 1};
    background: #52b6ff;
    border-radius: 4.63636px;
    border: 0;
    margin: 3px;
    color: white;
    font-size: 20.976px;
    line-height: 26px;
  }
  button span span{
    background-color: white;
    width: 20px;
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
