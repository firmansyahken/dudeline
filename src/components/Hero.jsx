import React from 'react'
import Container from './Container'

const Hero = () => {
    return (
        <section className='w-full h-[80vh]'>
            <Container styles='flex flex-col justify-center h-full gap-y-24'>
                <h1 className='text-5xl sm:text-7xl font-semibold w-1/2'>
                    Elegant and simplify illustration</h1>
                <div className='w-full flex justify-end'>
                    <p className='w-3/4 sm:w-1/3 text-right text-sm sm:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, blanditiis.</p>
                </div>
                <div className='flex items-center gap-3'>
                    <div className='w-[15px] h-[15px] bg-black'></div>
                    <p className='text-sm sm:text-md'>Scroll Here.</p>
                </div>
            </Container>
        </section>
    )
}

export default Hero