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
        <section className="home " id="home">
            <motion.div className="intro grid grid-cols-1 lg:grid-cols-2 items-center justify-center"
                variants={staggerContainer()}
                whileInView="show"
                initial="hidden"
            >
                <motion.div className="title grid items-center justify-start p-2"
                    variants={slideIn("left", "tween", 0.1, 1)}>
                    <motion.p variants={textVariants(1.3)}><i>Life is an event</i></motion.p>
                    <motion.h1 className={hurricane.className} variants={textVariants(1.1)}>WEBSITE UNDANGAN DIGITAL</motion.h1>
                    <motion.h2 variants={textVariants(1.2)}>Rayakan pernikahan Anda bersama orang-orang terdekat dalam momen istimewa! Ajak mereka dengan cara istimewa dan unik. Coba sekarang, GRATIS!</motion.h2>
                </motion.div>

                <motion.div className="flex  justify-center "
                    variants={slideIn("right", "tween", 0.1, 1)}>
                    <Image src={homeIcon} alt="homeIcon" />
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Home
