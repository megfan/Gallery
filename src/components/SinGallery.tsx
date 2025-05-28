import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import CL5 from "../assets/design/CL5.png";
import CL4 from "../assets/design/CL4.png";
import CL3 from "../assets/design/CL3.png";
import CL2 from "../assets/design/CL2.png";
import CL1 from "../assets/design/CL1.png";
import { Arrow } from '../helpers/Arrow';

interface SingleGalleryProps {
    galleryItems: string[];
    title: string;
    subTitle: string;
    pictureOnRight: boolean;
}

export const SingleGallery: React.FC<SingleGalleryProps> = ({ galleryItems, title, subTitle, pictureOnRight }) => {

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start start", "end end"]
    });

    const [animateX, setAnimateX] = useState(0);
    // const galleryCL = [CL5, CL2, CL1, CL3, CL4];

    const handleSlider = (e: number) => {
        animateX > -400 || animateX === 0
            ? setAnimateX(animateX + e)
            : setAnimateX(0);
    }

    const scaleTransition = useTransform(scrollYProgress, [0, 1], ['70%', '100%']);

    return (
        <section className={('flex w-full h-[70vh] items-center mt-20 ') + (pictureOnRight ? '' : 'flex-row-reverse')}>
            <div className={('w-2/3 h-full flex flex-col justify-center relative ' + (pictureOnRight ? 'items-start' : 'items-end'))}>
                <p className='text-4xl'>{title}</p>
                <p>{subTitle}</p>
                <div className='mt-10'>
                    <button className='galleryBtn mr-3' onClick={() => handleSlider(100)}>
                        <Arrow />
                    </button>
                    <button className='galleryBtn rotate-180' onClick={() => handleSlider(-100)}>
                        <Arrow />
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
                <motion.div className='w-full h-full flex justify-start'
                    initial={{ x: '-100%' }}
                    animate={{ x: animateX + '%' }}
                    exit={{ x: '100%' }}
                    transition={{
                        duration: 1,
                    }}
                >
                    {galleryItems.map((e, i) => {
                        return   <motion.img src={e} alt={e} className='h-auto w-auto object-contain' key={e + i}/>
                    })}
                </motion.div>
            </motion.div>
        </section>
    )
}