import React from 'react'

const Display = ({ numero, estilos }) => {
  return (
    <h1 style={estilos}>{numero}</h1>
  )
}

export default Display;
