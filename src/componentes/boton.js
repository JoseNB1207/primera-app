function Boton ({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  )
}

export default Boton;