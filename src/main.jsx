import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import App from './App'

import './styles/global.css'

// 1 - config router
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

// pages components
import Error from './pages/Error'
import HomePage from './pages/HomePage'
import DetalheProdutoPage from './pages/DetalheProdutoPage'
import PedidoPage from './pages/PedidoPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    // Pagina de error
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <HomePage/>
      },
      {
        path: "produto",
        element: <DetalheProdutoPage/>
      },
      // identificador unico
      {
        path: "pedido/:id",
        element: <PedidoPage/>
      },
      // paginas não existentes
      {
        path: "oldproduto",
        element: <Navigate to="/produto"/>
      }
  ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
