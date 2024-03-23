import { useState } from 'react'
import './App.css'
import Routers from './routes/Routers'
function App() {
  const [hallTicketNumber, setHallTicketNumber] = useState("");

  return (
    <>
     <Routers setHallTicketNumber={setHallTicketNumber} hallTicketNumber={hallTicketNumber} />
    </>
  )
}

export default App
