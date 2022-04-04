import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Input from "../Input";

const ListaTodosHabitos = ({ onAdicionar, onCancelar, value }) => {
  //   const [selecionarDia,setSelecionarDia]=useState();
  const semana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sabado",
  ];
  const [selecionado, setSelecionado] = useState([]);
  const [cor, setCor] = useState(true);

  
  function toggleDia(index) {
    
    if (selecionado.includes(index + 1)) {
        
      selecionado.splice(selecionado.indexOf(index + 1), 1);
      setSelecionado([...selecionado]);

      return;
    }
    setSelecionado([...selecionado, index + 1]);
    console.log(selecionado)
    console.log(cor);
  }
 
  if(selecionado.length>0){}

  return (
    <CartaoHabito>
      <div>
        <Input placeholder="nome do hábito" value={value} />
      </div>
      <div>
        <Formulario>
          <div >
            {semana.map((dia, index) => {
                
              return (
                <Dia
                  cor={cor}
                  key={dia}
                  onClick={() => toggleDia(index)}
                >
                  <p>{dia[0]}</p>
                </Dia>
              );
            })}
            
          </div>
        </Formulario>
      </div>
      <Botoes>
        <BotaoCancelar onClick={onCancelar}>Cancelar</BotaoCancelar>
        <BotãoSalvar onClick={onAdicionar}>Salvar</BotãoSalvar>
      </Botoes>
    </CartaoHabito>
  );
};

export default ListaTodosHabitos;

const Dia = styled.button`
  width: 30px;
  height: 30px;
  background:${props=>props.cor ?"#fff": "#CFCFCF"}; 
  color:${({cor}) => cor ?"#CFCFCF":"#fff" };
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 2px;
`;
const Botoes = styled.div`
  margin-top: 25px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
const Formulario = styled.div`
  input {
    transform: scale(2);
    padding: 10px;
  }
`;
const CartaoHabito = styled.div`
  width: 340px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  padding: 18px;
  margin: 5px;
  display: flex;
  flex-direction: column;
`;
const BotãoSalvar = styled.button`
  width: 84px;
  height: 35px;
  background: #52b6ff;
  border: 0;
  border-radius: 4.63636px;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
`;
const BotaoCancelar = styled.button`
  width: 84px;
  height: 35px;
  background: #ffffff;
  border: 0;
  border-radius: 4.63636px;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 15.976px;
  line-height: 20px;
  text-align: center;
  color: #52b6ff;
`;