import  '../GlobalStyle.css';
import styled from "styled-components";
import SmallLogo from "./SmallLogo";
import User from "./User";

export default function TopBar({imagem}) {
 
  return (
    <Container>
      <SmallLogo />
      <User image={imagem} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  width: 100%;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  

`;
