import { useState } from 'react';
import Boton from './boton';

const Calculadora = () => {

const [numeroPantalla, setNumeroPantalla] = useState ('0');
const [previo, setPrevio] = useState ('0'); 
const [operacion, setOperacion] = useState('');


function handleResultadoClick(){
  if(operacion === '+'){
    let resultado = (parseInt(previo) + parseInt(numeroPantalla));
    setNumeroPantalla(resultado);
    setPrevio('');
    setOperacion('')
  }
  else if(operacion === '-'){
    let resultado = (parseInt(previo) - parseInt(numeroPantalla));
    setNumeroPantalla(resultado);
    setPrevio('');
    setOperacion('')
  }

   else if(operacion === '*'){
    let resultado = (parseInt(previo) * parseInt(numeroPantalla));
    setNumeroPantalla(resultado);
    setPrevio('');
    setOperacion('')
  }
   else if(operacion === '/'){
    let resultado = (parseFloat(previo) / parseFloat(numeroPantalla));
    setNumeroPantalla(resultado);
    setPrevio('');
    setOperacion('')
  }
}

function handleOperacionClick(op){
  setPrevio(numeroPantalla);
  setNumeroPantalla('');
  setOperacion(op)
}

function handleClick(valorNumero){
  setNumeroPantalla (numeroPantalla+valorNumero);
}

function handleClickClear(limpiar){
  setNumeroPantalla ('');
  setPrevio('');
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
        <Boton onClick={()=>handleOperacionClick('+')}>+</Boton> 
        <Boton onClick={()=>handleOperacionClick('-')}>-</Boton> 
        <Boton onClick={()=>handleOperacionClick('*')}>*</Boton> 
        <Boton onClick={()=>handleOperacionClick('/')}>/</Boton> 
        <Boton onClick={()=>handleResultadoClick('=')}>=</Boton>
        <Boton onClick={()=>handleClickClear('C')}>C</Boton> 
        

      </div>
    </div>
  )
}

export default Calculadora;

    