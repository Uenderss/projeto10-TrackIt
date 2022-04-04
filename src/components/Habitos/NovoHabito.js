import React, { useState } from "react";
import styled from "styled-components";


const NovoHabito = ({ onSubmit }) => {
  
  // const [newItem, setNewItem] = useState("");
  let newItem;

  // function setNewTask({ target }) {
  //   setNewItem(target.value);
  // }

  function criarCard(){
    // e.preventDefault();
    onSubmit(newItem);
  }

  return (
    <div>     
        <BotaoAdicionar onClick={criarCard}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Adicionar Habito</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M256 112v288M400 256H112"
            />
          </svg>
        </BotaoAdicionar>
    </div>
  );
};

export default NovoHabito;

const BotaoAdicionar = styled.button`
  width: 40px;
  height: 35px;
  background: #52b6ff;
  border-radius: 4.63636px;
  border:0;
  svg{
    color:white;
  }
`;
