import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import CLOS5 from "../assets/design/CLOS5.jpg";
import CLOS4 from "../assets/design/CLOS4.jpg";
import CLOS3 from "../assets/design/CLOS3.jpg";
import CLOS2 from "../assets/design/CLOS2.jpg";
import CLOS1 from "../assets/design/CLOS1.jpg";
import { Arrow } from '../../helpers/Arrow';

export const SingleGalleryToyota: React.FC = () => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const [animateX, setAnimateX] = useState(0);
    const galleryCLOS = [CLOS5, CLOS1, CLOS2, CLOS3, CLOS4];

    const handleSlider = (e: number) => {
        animateX > -400 || animateX === 0
            ? setAnimateX(animateX + e)
            : setAnimateX(0);
    }

    const scaleTransition = useTransform(scrollYProgress, [0, 1], ['70%', '100%']);

    return (
        <section className='flex w-full h-[70vh] items-center'>
            <div className='w-2/3 h-full flex flex-col items-start justify-center relative'>
                <p className='text-4xl'>TOYOTA CAMPAING</p>
                <p>CLOS BROTHERS</p>
                <div className='absolute bottom-0 right-0 mr-10'>
                    <button className='galleryBtn mr-3' onClick={() => handleSlider(100)}>
                        <Arrow/>
                    </button>
                    <button className='galleryBtn rotate-180' onClick={() => handleSlider(-100)}>
                        <Arrow/>
                    </button>
                </div>
            </div>
            <motion.div className='w-1/3 h-full object-contain flex justify-end items-end overflow-hidden'
                initial={{ width: '30%' }}
                style={{ width: scaleTransition }}
                transition={{
                    delay: .4,
                    duration: 1,
                }}
            >
                <motion.div className='w-auto h-auto object-cover flex justify-start'
                    initial={{ x: '-100%' }}
                    animate={{ x: animateX + '%' }}
                    exit={{x: '100%'}}
                    transition={{
                        duration: 1,
                    }}
                >
                    <motion.img src={galleryCLOS[0]} alt="logo" className='h-auto w-auto' />
                    <motion.img src={galleryCLOS[1]} alt="logo" className='h-auto w-auto' />
                    <motion.img src={galleryCLOS[2]} alt="logo" className='h-auto w-auto' />
                    <motion.img src={galleryCLOS[3]} alt="logo" className='h-auto w-auto' />
                    <motion.img src={galleryCLOS[4]} alt="logo" className='h-auto w-auto' />
                </motion.div>
            </motion.div>
        </section>
    )
}