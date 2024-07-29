import React, { useRef } from 'react'
import banner from "../assets/project/banner.webp";
import Container from './Container';
import { useScroll, motion, useTransform } from 'framer-motion';

const About = () => {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

    return (
        <section ref={ref} className='py-12 h-[200vh] relative'>
            <motion.div
                style={{ scale }}
                className='w-full h-[100vh] sticky top-0'>
                <img className='w-full h-full object-cover' src={banner} alt="banner" />
                <motion.div style={{ opacity }} className='absolute bg-[rgba(0,0,0,.6)] w-full h-full top-0'>
                    <Container styles='flex flex-col justify-center w-full h-full'>
                        <div className='flex flex-col sm:flex-row justify-between'>
                            <div>
                                <motion.h1
                                    className='text-5xl sm:text-7xl font-semibold text-white'
                                    style={{ opacity }}>
                                    Dudeline
                                </motion.h1>
                                <motion.h1
                                    className='text-5xl sm:text-7xl font-semibold text-white'
                                    style={{ opacity }}>
                                    Studio
                                </motion.h1>
                            </div>
                            <div className='w-3/2 sm:w-1/2 mt-6 sm:mt-12'>
                                <motion.p
                                    className='font-semibold supports-[animation-timeline]:reveal-text text-md sm:text-xl text-white'
                                    style={{ opacity }}>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, tempora. Sapiente reiciendis aperiam nobis placeat. Iure dignissimos maxime consequuntur iste!
                                </motion.p>
                            </div>
                        </div>
                    </Container>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About