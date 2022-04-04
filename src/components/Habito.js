import styled from "styled-components";
import { useState } from "react";

export default function Habito(props) {
  const [selecionar,setSelecionar]=useState(false);
  
  return (
    <Container>
      <div className="left">
        <div>
          <Title>{props.title}</Title>
          <Description>
            <>{props.recorder}</>
            <>{props.sequenciaAtual}</>
          </Description>
        </div>
      </div>

      <Rigth>
        <button onClick={()=>{setSelecionar(!selecionar)}}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Checkmark</title>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="32"
              d="M416 128L192 384l-96-96"
            />
          </svg>
        </button>
      </Rigth>
    </Container>
  );
}

const Container = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 340px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  margin-left: 5px 18px;
  
  padding: 13px;
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    margin-right: 10px;
  }
`;

const Rigth = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  button {
    background: #ebebeb;
    border: 1px solid #e7e7e7;
    box-sizing: border-box;
    border-radius: 5px;
    width: 69px;
    height: 69px;
  }
  button svg {
    color: white;
  }
`;

const Title = styled.div`
  width: 208px;
  height: 25px;
  font-family: "Lexend Deca";
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  color: #666666;
`;

const Description = styled.div`
  width: 148px;
  height: 32px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 12.976px;
  line-height: 16px;
  color: #666666;
`;
