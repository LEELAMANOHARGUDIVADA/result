import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from '../pages/Home'
import ResultPage from '../pages/ResultPage'
import { useEffect, useState } from 'react';

const Routers = ({setHallTicketNumber, hallTicketNumber}) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/results');
  }, []);

  return (
    <Routes>
        <Route path='/results' element={<Home setNumber={setHallTicketNumber} number={hallTicketNumber} />} />
        <Route path='/results/:id' element={<ResultPage number={hallTicketNumber} />} />
    </Routes>
  )
}

export default Routers