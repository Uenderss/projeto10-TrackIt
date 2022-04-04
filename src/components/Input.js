import styled from "styled-components";

const Input = styled.input`
  width: 303px;
  height: 45px;
  border: 1px solid #d5d5d5;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 3px;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: #222222;
  font-family: "Lexend Deca", sans-serif;
  padding: 11px;
  margin-bottom: 10px;

  ::placeholder {
    color: #dbdbdb;
    font-family: "Lexend Deca", sans-serif;
    font-size: 25px;
  }
`;

export default Input;
