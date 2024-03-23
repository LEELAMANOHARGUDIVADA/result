import React from 'react'
import logo from '../assets/images/image.png'

const Header = () => {
  return (
    <div className='sticky h-16 w-screen flex items-center justify-center shadow-lg bg-white z-10'>
        <div className='flex items-center justify-center gap-4'>
            <img src={logo} alt="logo" className='w-12' />
            <h1 className='font-semibold'>Jawaharlal Nehru Technological University, Vizianagaram</h1>
        </div>
        
    </div>
  )
}

export default Header