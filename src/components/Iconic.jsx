import React, { useRef } from 'react'
import Container from './Container'
import iconic from "../assets/project/iconic.png";
import { useScroll, useTransform, motion } from 'framer-motion';

const Iconic = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(
        scrollYProgress,
        [0, 0.1, 1],
        [0, 0, 100]
      );
      const yt = useTransform(
        scrollYProgress,
        [0, 0.1, 1],
        [0, 0, -100]
      );
    return (
        <section className='h-[100vh]'>
            <Container styles='flex flex-col items-center justify-center h-full w-full'>
                <div className='flex flex-col sm:flex-row justify-between items-center'>
                    <div className='w-30%'>
                        <motion.h1 ref={ref} style={{y: yt}} className='text-2xl sm:text-3xl font-semibold'>Simple line design</motion.h1>
                    </div>
                    <img className='w-[80%] sm:w-[45%] rotate' src={iconic} alt='iconic' />
                    <div className='w-30%'>
                        <motion.h1 ref={ref} style={{y}} className='text-2xl sm:text-3xl font-semibold text-right'>Characteristic design</motion.h1>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Iconic