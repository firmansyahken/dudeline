import React from 'react'
import Container from './Container'
import Text from "../assets/project/text.svg"
import Arrow from "../assets/arrow.svg"

const Footer = () => {
    return (
        <footer className='sticky bottom-0 bg-stone-200 z-[-10]'>
            <Container styles='flex flex-col justify-between h-[80vh] py-24'>
                <div className='flex gap-2 items-end'>
                    <h1 className='text-5xl sm:text-7xl font-semibold'>Lets Talk</h1>
                    <img className='w-[50px] sm:w-[70px]' src={Arrow} alt='icon'/>
                </div>
                <div className='flex gap-x-24'>
                    <div className='text-sm sm:text-md'>
                        <p>Dudeline Studio</p>
                        <p>Jl. Kemakmuran, Jawa Tengah, <br />97, Indonesia.</p>
                    </div>
                    <div className='text-sm sm:text-md flex flex-col gap-y-2'>
                        <a href=''>Instagram</a>
                        <a href=''>Twitter</a>
                        <a href=''>E-mail</a>
                    </div>
                </div>
            </Container>
            <div className='p-6'>
                <img className='w-full' src={Text} alt='text' />
            </div>
        </footer>
    )
}

export default Footer