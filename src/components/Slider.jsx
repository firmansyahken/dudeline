import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useScroll, useTransform, motion } from "framer-motion";
import P1 from "../assets/project/p1.png";
import P2 from "../assets/project/p2.png";
import P3 from "../assets/project/p3.png";

const Slider = () => {
    const projects = [P1, P2, P3];
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const xTransform = useTransform(scrollYProgress, [0, 0, 1], [0, 0, -600]);

    return (
        <section className="py-24 ">
            <Swiper
                slidesPerView={3 / 4}
                spaceBetween={10}
                centeredSlides={false}
                grabCursor={true}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3 / 4,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 3 / 4,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4 / 2,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index} className="w-[90%] sm:w-[70%]">
                        <motion.img
                            ref={ref}
                            style={{
                                translateX: xTransform,
                            }}
                            className="w-full aspect-[4/2] object-cover relative"
                            src={project}
                            alt="project"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Slider;