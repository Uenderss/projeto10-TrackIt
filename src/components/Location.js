import styled from "styled-components";
import dayjs from "dayjs";
import "dayjs/locale/pt";

export default function Location(props) {
  const aviso = "Nenhum hábito concluido ainda";
  console.log(props);
  return (
    <Container>
      <h2>
        {dayjs().locale("pt").format("dddd")}, {dayjs().format("DD/MM")}
      </h2>
      <h3>{aviso}</h3>
    </Container>
  );
}

const Container = styled.div`
  margin: 17px;
  height: 48px;
  min-width: 340px;
  
  
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
