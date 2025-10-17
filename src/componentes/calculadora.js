import { useState } from 'react';
import Boton from './boton';
import Display from './display';

const Calculadora = () => {

  const [numeroPantalla, setNumeroPantalla] = useState('0');
  const [previo, setPrevio] = useState('0'); 
  const [operacion, setOperacion] = useState('');

  const estilosCalculadora = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    width: '300px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.2)'
  };

  const estilosDisplay = {
    backgroundColor: '#000',
    color: '#fff',
    padding: '15px',
    width: '100%',
    textAlign: 'right',
    fontSize: '2rem',
    borderRadius: '10px',
    marginBottom: '20px',
    overflow: 'hidden'
  };

  const estilosContainerBotones = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    width: '100%'
  };

  const estilosBoton = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '15px',
    fontSize: '1.2rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer'
  };

  const estilosBotonOperacion = {
    backgroundColor: '#ff9500',
    color: '#fff',
    padding: '15px',
    fontSize: '1.2rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer'
  };

  const estilosBotonEspecial = {
    backgroundColor: '#d9534f',
    color: '#fff',
    padding: '15px',
    fontSize: '1.2rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer'
  };

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
      if(previo == 0){
        setNumeroPantalla('Error, valor invalido');
      }
      else{
      let resultado = (parseFloat(previo) / parseFloat(numeroPantalla));
      Number.isNaN(setNumeroPantalla('Error, valor invalido'))
      setNumeroPantalla(resultado);
      setPrevio('');
      setOperacion('')
      }

      
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

  function handleClickClear(){
    setNumeroPantalla ('');
    setPrevio('');
  }

  // Aquí aplicamos los estilos como props
  return (
    <div style={estilosCalculadora}>
      <Display numero={numeroPantalla} estilos={estilosDisplay} />
      
      <div style={estilosContainerBotones}>
        <Boton onClick={()=>handleClick(1)} estilos={estilosBoton}>1</Boton>  
        <Boton onClick={()=>handleClick(2)} estilos={estilosBoton}>2</Boton>
        <Boton onClick={()=>handleClick(3)} estilos={estilosBoton}>3</Boton>
        <Boton onClick={()=>handleClick(4)} estilos={estilosBoton}>4</Boton>
        <Boton onClick={()=>handleClick(5)} estilos={estilosBoton}>5</Boton>
        <Boton onClick={()=>handleClick(6)} estilos={estilosBoton}>6</Boton>
        <Boton onClick={()=>handleClick(7)} estilos={estilosBoton}>7</Boton>
        <Boton onClick={()=>handleClick(8)} estilos={estilosBoton}>8</Boton>
        <Boton onClick={()=>handleClick(9)} estilos={estilosBoton}>9</Boton>
        <Boton onClick={()=>handleClick(0)} estilos={estilosBoton}>0</Boton>
        <Boton onClick={()=>handleOperacionClick('+')} estilos={estilosBotonOperacion}>+</Boton> 
        <Boton onClick={()=>handleOperacionClick('-')} estilos={estilosBotonOperacion}>-</Boton> 
        <Boton onClick={()=>handleOperacionClick('*')} estilos={estilosBotonOperacion}>*</Boton> 
        <Boton onClick={()=>handleOperacionClick('/')} estilos={estilosBotonOperacion}>/</Boton> 
        <Boton onClick={()=>handleResultadoClick('=')} estilos={estilosBotonEspecial}>=</Boton>
        <Boton onClick={()=>handleClickClear('C')} estilos={estilosBotonEspecial}>C</Boton> 
      </div>
    </div>
  )
}

export default Calculadora;
