function Boton ({ onClick, children, estilos }) {
  return (
    <button onClick={onClick} style={estilos}>
      {children}
    </button>
  )
}

export default Boton;
