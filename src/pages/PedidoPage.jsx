import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const PedidoPage = () => {
  const {id} = useParams();

  const navigate = useNavigate()

  const handlePedido =()=> {
    alert("enviado")
    return navigate("/")
  }
  
  return (
    <div>
      <h1>Exibindo o pedido : {id}</h1>
      <button onClick={handlePedido}>Enviar pedido</button>
    </div>
  )
}

export default PedidoPage