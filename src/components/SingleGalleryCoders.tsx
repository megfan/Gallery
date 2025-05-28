import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import CL5 from "../assets/design/CL5.png";
import CL4 from "../assets/design/CL4.png";
import CL3 from "../assets/design/CL3.png";
import CL2 from "../assets/design/CL2.png";
import CL1 from "../assets/design/CL1.png";
import { Arrow } from '../helpers/Arrow';

export const SingleGalleryCoders: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const [animateX, setAnimateX] = useState(0);
    const galleryCL = [CL5, CL2, CL1, CL3, CL4];

    const handleSlider = (e: number) => {
        animateX > -400 || animateX === 0
            ? setAnimateX(animateX + e)
            : setAnimateX(0);
    }

    const scaleTransition = useTransform(scrollYProgress, [0, 1], ['70%', '100%']);

    return (
        <section className='flex w-full h-[70vh] items-center mt-64'>
           
            <motion.div className='w-1/3 h-full flex justify-end items-end overflow-hidden'
                initial={{ width: '30%' }}
                style={{ width: scaleTransition }}
                transition={{
                    delay: .4,
                    duration: 1,
                }}
            >
                <motion.div className='w-full h-full flex justify-start'
                    initial={{ x: '-100%' }}
                    animate={{ x: animateX + '%' }}
                    exit={{x: '100%'}}
                    transition={{
                        duration: 1,
                    }}
                >
                    <motion.img src={galleryCL[0]} alt="logo" className='h-auto w-auto object-contain' />
                    <motion.img src={galleryCL[1]} alt="logo" className='h-auto w-auto object-contain' />
                    <motion.img src={galleryCL[2]} alt="logo" className='h-auto w-auto object-contain' />
                    <motion.img src={galleryCL[3]} alt="logo" className='h-auto w-auto object-contain' />
                    <motion.img src={galleryCL[4]} alt="logo" className='h-auto w-auto object-contain' />
                </motion.div>
            </motion.div>
             <div className='w-2/3 h-full flex flex-col items-end justify-center relative'>
                <p className='text-4xl'>CODERS LAB CAMPAING</p>
                <p>CLOS BROTHERS</p>
                <div className='absolute bottom-0 left-0 ml-10'>
                    <button className='galleryBtn mr-3' onClick={() => handleSlider(100)}>
                        <Arrow/>
                    </button>
                    <button className='galleryBtn rotate-180' onClick={() => handleSlider(-100)}>
                        <Arrow/>
                    </button>
                </div>
            </div>
        </section>
    )
}