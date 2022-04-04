import React, { useState } from "react";
import ListaTodosHabitos from "./ListaTodosHabitos.js";
import NovoHabito from "./NovoHabito";
import styled from "styled-components";
import TopBar from "../TopBar";
import Footer from "../Footer";

const GerirHabitos = (props) => {
  const [habitos, setHabito] = useState([]);

  function adicionarHabito(habito) {
    const itensCopy = Array.from(habitos);
    itensCopy.push({ id: habitos.length, value: habito });
    setHabito(itensCopy);
  }

  function salvarHabito({ target }, index) {
    const itensCopy = Array.from(habitos);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setHabito(itensCopy);
  }

  function deleteHabito(index) {
    const itensCopy = Array.from(habitos);
    itensCopy.splice(index, 1);
    setHabito(itensCopy);
  }
  console.log("habito:",habitos.length)
  
  const semhabito =  (habitos <2) && <SemHabito>
        Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
        começar a trackear!
      </SemHabito>
    
    
  return (
    <Container>
      <TopBar imagem={props.image} />
      <Location>
        <h2> Meus Hábitos</h2>
        <NovoHabito onSubmit={adicionarHabito} />
      </Location>
      
      <div className="GerirHabitos-header">
        {habitos.map(({ id, value }, index) => (
        
          <ListaTodosHabitos
            key={id}
            value={value}
            onAdicionar={(event) => salvarHabito(event, index)}
            onCancelar={() => deleteHabito(index)}
          />
        ))}
      </div>
        {semhabito}
      <Footer />
    </Container>
  );
};

export default GerirHabitos;
const SemHabito = styled.div`
  width: 338px;
  height: 74px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;

  color: #666666;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;

  background-color: #f7f7f7;
`;
const Location = styled.div`
  margin: 17px;
  height: 48px;
  min-width: 340px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
    text-transform: capitalize;
  }
  h3 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #bababa;
  }
`;
