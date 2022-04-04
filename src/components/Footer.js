import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Link } from "react-router-dom";

export default function FloatingCartButton() {
  const quantity = 66;
  return (
    <Container>
      <StyledLink to="/habitos">Hábitos</StyledLink>
      <StyledLink to="/hoje">
      <CircularProgressbar
        value={quantity}
        text="Hoje"
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent",
        })}
      /></StyledLink>
      <StyledLink to="/historico">Histórico</StyledLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index:3;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 70px;
  
  background: #ffffff;
  
  svg {
    height: 91px;
    position: relative;
    z-index: 3;
    margin-bottom: 25px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 17.976px;
  line-height: 22px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #52b6ff;
`;
