import React from "react";
import logo from "../../assets/imagem/logo.png";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { css } from "@emotion/react";
import styled from "styled-components";
import "@fontsource/lexend-deca";
import { UserContext } from "./UserContext";
import { BeatLoader } from "react-spinners";

const Login = () => {
  const username = useForm();
  const password = useForm();
  
  const { userLogin, error, loading } = useContext(UserContext);

  async function handleSubmit(e) {
    e.preventDefault();
     
    if(username.validate() && password.validate()){
      userLogin(username.value,password.vallue);
    }

  };

  return (
    <Tela1>
      <Imagem>
        <img src={logo} alt="logo" />
      </Imagem>
      <Form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          type="email"
          {...username}
        />
        <input
          placeholder="senha"
          type="password"
          {...password}
        />
        {loading ?( <button><BeatLoader color={"#ffffff"}/></button>):(<button>Entrar</button>) }

        <span>
          <Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link>
        </span>
      </Form>
    
    </Tela1>
    
  );
};

export default Login;

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
