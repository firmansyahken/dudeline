import React from 'react'
import Container from './Container'

const Navbar = () => {
  return (
    <nav className='py-16 z-[20] bg-stone-100'>
        <Container styles='flex justify-between'>
            <h1 className='text-xl font-semibold'>Dudeline</h1>
            <div className='flex'>
              <div className='w-[20px] h-[2px] bg-black'></div>
              <div className='w-[2.5px] h-[20px] bg-black'></div>
            </div>
        </Container>
    </nav>
  )
}

export default Navbar