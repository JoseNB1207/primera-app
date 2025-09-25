import { useState } from 'react';
import Boton from './boton';

const Calculadora = () => {

const [numeroPantalla, setNumeroPantalla] = useState (0);


function handleClick(valorNumero){
  setNumeroPantalla (valorNumero);
}

// Aqui es lo que se muestra en pantalla
  return (
    <div className='calculadoraContainer'>
      {numeroPantalla}
      
      <div className='containerBotones'>
        <Boton onClick={()=>handleClick(1)}>1</Boton>  
        <Boton onClick={()=>handleClick(2)}>2</Boton>
        <Boton onClick={()=>handleClick(3)}>3</Boton>
        <Boton onClick={()=>handleClick(4)}>4</Boton>
        <Boton onClick={()=>handleClick(5)}>5</Boton>
        <Boton onClick={()=>handleClick(6)}>6</Boton>
        <Boton onClick={()=>handleClick(7)}>7</Boton>
        <Boton onClick={()=>handleClick(8)}>8</Boton>
        <Boton onClick={()=>handleClick(9)}>9</Boton>
        <Boton onClick={()=>handleClick(0)}>0</Boton> 
      </div>
    </div>
  )
}

export default Calculadora;

    