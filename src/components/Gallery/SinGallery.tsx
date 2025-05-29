import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from "motion/react";
import { Arrow } from '../../helpers/Arrow';

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

    const handleSlider = (e: number) => {
        animateX > -400 || animateX === 0
            ? setAnimateX(animateX + e)
            : setAnimateX(0);
    }

    const scaleTransition = useTransform(scrollYProgress, [0, 1], ['50%', '100%']);

    return (
        <section className={('flex w-full h-[70vh] items-center mt-20 px-20 ') + (pictureOnRight ? '' : 'flex-row-reverse')}>
            <div className={('w-1/2 h-full flex flex-col justify-center relative ' + (pictureOnRight ? 'items-start' : 'items-end'))}>
                <p className='text-4xl uppercase font-medium'>{title}</p>
                <p>{subTitle}</p>
                <div className='mt-10'>
                    <button className={'galleryBtn ' + (pictureOnRight ? 'rotate-180' : '')} 
                        onClick={() => handleSlider(-100)}>
                        <Arrow />
                    </button>
                </div>
            </div>
            <motion.div className='w-1/2 h-full object-contain flex justify-end items-end overflow-hidden'
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
                        return <motion.img src={e} alt={e} className='h-auto w-auto object-contain' key={e + i}/>
                    })}
                </motion.div>
            </motion.div>
        </section>
    )
}