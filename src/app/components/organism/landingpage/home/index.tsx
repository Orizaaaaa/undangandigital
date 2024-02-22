'use client'
import Image from 'next/image'
import React from 'react'
import './home.scss'
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariants } from '@/app/utils/motion'
import { Hurricane } from 'next/font/google';
import { homeIcon } from '@/app/image';

const hurricane = Hurricane({ weight: '400', subsets: ['latin'] });
const Home = () => {

    return (
        <section className="home container mx-auto " id="home">
            <motion.div className="intro grid  grid-cols-1 lg:grid-cols-5 items-center justify-center"
                variants={staggerContainer()}
                whileInView="show"
                initial="hidden"
            >
                <motion.div className="col-span-3 grid items-center justify-start p-2"
                    variants={slideIn("left", "tween", 0.1, 1)}>
                    <motion.h1 className={hurricane.className} variants={textVariants(1.1)}>Introduce Myself</motion.h1>
                    <motion.h2 variants={textVariants(1.2)}>Oriza Sativa</motion.h2>
                    <motion.h3 variants={textVariants(1.3)}><i>Front End Developer</i></motion.h3>
                </motion.div>

                <motion.div className="flex col-span-2 justify-center "
                    variants={slideIn("right", "tween", 0.1, 1)}>
                    <Image src={homeIcon} alt="homeIcon" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Home
