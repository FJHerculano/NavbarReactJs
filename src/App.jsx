
import Navbar from "./components/Navbar/Navbar";

// Reaproveita estrutura
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div >
      <Navbar/>
        <Outlet/>
    </div>
  )
}

export default App
