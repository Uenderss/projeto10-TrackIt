import styled from "styled-components";

const Button = styled.button`
   height: 45px;
  width: 303px;
  background-color:#52B6FF;
  /* background-color: ${(props) => typeof props.active !== 'boolean' || props.active ? "#22A63F" : "#888"}; */
  color: #FFFFFF;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 26px;
  padding: 14px;
  ${(props) => !props.noMargin && "margin-bottom: 10px;"}
  border-radius: 4.6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default Button;
