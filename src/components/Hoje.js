import { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "./Footer";
import Location from "./Location";
import Habito from "./Habito";
import TopBar from "./TopBar";
import axios from "axios";

export default function Hoje(props) {
  const [habitos, setHabitos] = useState([]);
  const [contador,setContador]=useState(0);

  console.log("eu",props);
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${props.token}`
      }
    }

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const promise = axios.get(URL, config);
    promise.then(response => {
      const {data} = response;
      // console.log("isso",data);
      setHabitos(data);
    });
    promise.catch(err => console.log(err.response));
  }, []);
  
  function listarTodosHabitosDiario() {
    if(habitos.length > 0) {
      return habitos.map(habito => {
        const {name, highestSequence, currentSequence, done, id} = habito;
        return (
          <Habito 
            key={id}
            title={name} 
            recorde ={highestSequence} 
            sequenciaAtual={currentSequence} 
            concluido={done}
            callback={setContador} 
          />
        )
      })
    }

    return <p>Carregando...</p>;
  }
  
  return (
    <Container>
      <TopBar imagem={props.image}/>
      <Location contador={contador} />
      {listarTodosHabitosDiario()}
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  
  background-color: #F7F7F7;
  

`;
